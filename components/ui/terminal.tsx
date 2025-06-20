"use client";
import { useState, useRef } from "react";
import { redirect, useRouter } from "next/navigation";
import { auth } from "@/app/firebase/firebase";

export default function TerminalPrompt() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (value.trim() === "") return;
    sessionStorage.setItem("startupIdea", value);
    router.push("/results");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleTerminalClick = () => {
    setFocused(true);
    // Use setTimeout to ensure the input is rendered before focusing
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

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
        className="relative h-48 md:h-96 w-full rounded-2xl bg-gray-900 px-5 py-3 shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] overflow-hidden cursor-text"
        onClick={handleTerminalClick}
      >
        {/* Single bold light moving slowly */}
        <div className="single-light"></div>

        {/* Main content container with inset border */}
        <div className="absolute inset-[2px] rounded-xl bg-gray-900"></div>

        <div className="relative mb-1 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)]">
          <span className="text-[13px] font-medium text-white">
            Click on Terminal to Start
          </span>
        </div>

        {!focused && (
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

        {focused && (
          <div className="font-mono text-sm text-gray-200 flex items-start w-full relative z-10">
            <span className="text-purple-400 mr-2">$</span>
            <div
              ref={inputRef}
              contentEditable
              suppressContentEditableWarning
              className="flex-1 bg-transparent focus:outline-none whitespace-pre-wrap min-h-[1.2em] text-white"
              onInput={(e) => setValue(e.currentTarget.textContent || "")}
              onKeyDown={handleKeyDown}
              onBlur={() => setFocused(false)}
              data-placeholder="Describe your startup idea, business model, industry, funding needs, and traction..."
              style={{
                ...(value === "" && {
                  position: "relative",
                }),
              }}
            />
          </div>
        )}
      </div>
      <div className="relative md:hidden w-full mt-1 mb-1 flex items-center justify-center">
        <button
          className="py-2 px-4 text-black"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
