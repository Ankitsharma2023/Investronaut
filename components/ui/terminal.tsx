"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/firebase";

const INDUSTRIES = [
  "Fintech",
  "Healthtech",
  "EdTech",
  "E-commerce",
  "AI / SaaS",
  "AgriTech",
];

// Only reject the most obvious non-inputs instantly; let the API judge the rest.
function isObviousJunk(text: string): boolean {
  const t = text.trim().toLowerCase();
  if (t.length < 5) return true;
  const greetings = [
    "hi",
    "hii",
    "hiii",
    "hello",
    "hey",
    "hola",
    "test",
    "asdf",
  ];
  if (greetings.includes(t)) return true;
  return false;
}

type Status = "idle" | "checking" | "invalid" | "needInfo";
type Question = { id: string; question: string; options: string[] };

export default function TerminalPrompt() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const router = useRouter();
  const inputRef = useRef<HTMLDivElement>(null);

  const focusInput = (text?: string) => {
    setFocused(true);
    setStatus("idle");
    setTimeout(() => {
      const el = inputRef.current;
      if (!el) return;
      if (typeof text === "string") el.textContent = text;
      el.focus();
      // place caret at end
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }, 0);
  };

  const showInvalid = (msg: string) => {
    setStatus("invalid");
    setErrorMsg(msg);
  };

  const runSearch = async (idea: string, finalize: boolean) => {
    setStatus("checking");
    setErrorMsg("");

    // When finalizing, fold the chosen answers into the query for the AI.
    const answerText = Object.values(answers).filter(Boolean).join("; ");
    const enriched =
      finalize && answerText ? `${idea}\n\nAdditional details: ${answerText}` : idea;

    try {
      const res = await fetch("/api/find_investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startup_idea: enriched, finalize }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        showInvalid(body?.error || "Something went wrong. Please try again.");
        return;
      }

      const data = await res.json();

      if (data.status === "invalid") {
        showInvalid(data.feedback || "That doesn't look like a startup idea yet.");
        return;
      }
      if (data.status === "need_info" && Array.isArray(data.questions) && data.questions.length) {
        setQuestions(data.questions);
        setAnswers({});
        setStatus("needInfo");
        return;
      }

      // status "ok" — hand the matches to the results page.
      sessionStorage.setItem("startupIdea", idea);
      sessionStorage.setItem(
        "investorResults",
        JSON.stringify(data.investors || []),
      );
      router.push(auth.currentUser ? "/results" : "/signin?next=results");
    } catch {
      showInvalid("Network error. Please try again.");
    }
  };

  const handleSubmit = () => {
    const idea = value.trim();
    if (idea === "") {
      focusInput();
      return;
    }
    // Answering the clarifying questions → finalize the search.
    if (status === "needInfo") {
      runSearch(idea, true);
      return;
    }
    if (isObviousJunk(idea)) {
      showInvalid("That doesn't look like a startup idea yet.");
      return;
    }
    runSearch(idea, false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const fillIndustry = (industry: string) => {
    const template = `A ${industry} startup that helps [who] do [what], currently at [pre-seed/seed] stage.`;
    setValue(template);
    focusInput(template);
  };

  const showHints = !focused && value === "" && status === "idle";
  const showHelper = status === "invalid";

  return (
    <div className="w-full" data-aos="zoom-y-out" data-aos-delay={600}>
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .single-light {
          position: absolute;
          top: -10px;
          left: 50%;
          width: 40px;
          height: 20px;
          background: rgba(168, 85, 247, 0.8);
          box-shadow: 0 0 15px 5px rgba(168, 85, 247, 0.8);
          border-radius: 50%;
          animation: rotate 12s linear infinite;
          transform-origin: 0 100%;
        }
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #6b7280;
          opacity: 0.7;
          pointer-events: none;
        }
      `}</style>

      <div
        className="relative min-h-48 md:min-h-96 w-full cursor-text overflow-hidden rounded-2xl bg-gray-900 px-5 py-3 shadow-[0_0_30px_5px_rgba(168,85,247,0.3)]"
        onClick={() => focused || focusInput(value)}
      >
        {/* Single bold light moving slowly */}
        <div className="single-light"></div>

        {/* Main content container with inset border */}
        <div className="absolute inset-[2px] rounded-xl bg-gray-900"></div>

        <div className="relative mb-2 flex items-center gap-3">
          {/* Mac-style traffic-light dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]"></span>
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="h-3 w-3 rounded-full bg-[#27c93f]"></span>
          </div>
          <span className="text-[13px] font-medium text-white">
            {focused || value
              ? "Investronaut Terminal"
              : "Click on Terminal to Start"}
          </span>
        </div>

        {/* Animated hints (idle, empty) */}
        {showHints && (
          <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0 relative z-10 pointer-events-none">
            <span className="animate-[code-1_10s_infinite] text-gray-200">
              Investronaut:
            </span>{" "}
            <span className="animate-[code-2_10s_infinite]">
              write about your Business Model
            </span>
            <br />
            <span className="animate-[code-3_10s_infinite]">
              And its Industry,
            </span>{" "}
            <span className="animate-[code-4_10s_infinite]">Current Stage</span>
            <br />
            <br />
            <span className="animate-[code-5_10s_infinite] text-gray-200">
              Funding Required
            </span>
            <br />
            <span className="animate-[code-6_10s_infinite]">
              Traction and Metrics
            </span>
          </div>
        )}

        {/* Input line */}
        {!showHints && status !== "checking" && (
          <div className="relative z-10 flex w-full items-start font-mono text-sm text-gray-200">
            <span className="mr-2 text-blue-400">$</span>
            <div
              ref={inputRef}
              contentEditable
              suppressContentEditableWarning
              className="min-h-[1.2em] flex-1 whitespace-pre-wrap bg-transparent text-white focus:outline-none"
              onInput={(e) => setValue(e.currentTarget.textContent || "")}
              onKeyDown={handleKeyDown}
              onFocus={() => setFocused(true)}
              data-placeholder="Describe your startup idea, business model, industry, funding needs, and traction..."
            />
          </div>
        )}

        {/* Checking state */}
        {status === "checking" && (
          <div className="relative z-10 flex items-center gap-2 font-mono text-sm text-blue-300">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></span>
            Analyzing your idea...
          </div>
        )}

        {/* Invalid: error + industry options + what's missing + type-your-own */}
        {showHelper && (
          <div
            className="relative z-10 mt-3 font-mono text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-red-400">⚠ {errorMsg}</p>
            <p className="mt-2 text-gray-400">
              Include: <span className="text-gray-200">what it does</span> ·{" "}
              <span className="text-gray-200">who it&apos;s for</span> ·{" "}
              <span className="text-gray-200">industry</span> ·{" "}
              <span className="text-gray-200">stage</span>
            </p>
            <p className="mt-3 text-gray-300">Pick an industry to start:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {INDUSTRIES.map((industry) => (
                <button
                  key={industry}
                  onClick={() => fillIndustry(industry)}
                  className="rounded-full border border-blue-600/50 bg-blue-600/10 px-3 py-1 text-blue-300 transition hover:bg-blue-600/20"
                >
                  {industry}
                </button>
              ))}
              <button
                onClick={() => focusInput("")}
                className="rounded-full border border-gray-600 bg-gray-800 px-3 py-1 text-gray-300 transition hover:bg-gray-700"
              >
                ✎ Type my own
              </button>
            </div>
          </div>
        )}

        {/* Need more info: clarifying multiple-choice questions */}
        {status === "needInfo" && (
          <div
            className="relative z-10 mt-3 font-mono text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gray-300">
              A few quick details to sharpen your matches:
            </p>
            <div className="mt-3 space-y-3">
              {questions.map((q) => (
                <div key={q.id}>
                  <p className="text-gray-400">{q.question}</p>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {q.options.map((opt) => {
                      const selected = answers[q.id] === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() =>
                            setAnswers((a) => ({ ...a, [q.id]: opt }))
                          }
                          className={`rounded-full border px-3 py-1 transition ${
                            selected
                              ? "border-blue-500 bg-blue-600/30 text-white"
                              : "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Pick what applies (optional) and hit Find Investors.
            </p>
          </div>
        )}
      </div>

      {/* Submit button */}
      <div className="relative mt-3 flex w-full items-center justify-center">
        <button
          className="btn btn-primary px-6 disabled:opacity-60"
          disabled={status === "checking"}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {status === "checking" ? "Analyzing..." : "Find Investors"}
        </button>
      </div>
    </div>
  );
}
