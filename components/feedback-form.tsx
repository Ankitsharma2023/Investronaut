"use client";
import { useState } from "react";

// Web3Forms public access key (safe to use in client-side code).
// Submissions are emailed to the address configured on web3forms.com.
const WEB3FORMS_ACCESS_KEY = "aa96e3a2-ba14-42dc-a37f-e976f0eb28c3";

type Status = "idle" | "submitting" | "success" | "error";

export default function FeedbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg("");

    const payload: Record<string, string> = Object.fromEntries(
      new FormData(form) as unknown as Iterable<[string, string]>,
    );
    payload.access_key = WEB3FORMS_ACCESS_KEY;
    payload.subject = "New Investronaut Feedback";
    payload.from_name = payload.name || "Investronaut";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Couldn't reach the feedback service. If you use an ad/tracker blocker (e.g. Brave Shields), allow api.web3forms.com and try again.",
      );
    }
  };

  return (
    <section id="feedback" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            We&apos;d love your feedback
          </h2>
          <p className="text-slate-500">
            Tell us what&apos;s working, what&apos;s not, or what you&apos;d like
            to see next on Investronaut.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-xl border border-blue-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
              ✓
            </div>
            <h3 className="mb-1 text-lg font-semibold text-slate-900">
              Thank you!
            </h3>
            <p className="text-slate-500">
              Your feedback has been sent. We really appreciate it.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-slate-700"
                  htmlFor="feedback-name"
                >
                  Name
                </label>
                <input
                  id="feedback-name"
                  name="name"
                  type="text"
                  required
                  className="form-input w-full py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-slate-700"
                  htmlFor="feedback-email"
                >
                  Email
                </label>
                <input
                  id="feedback-email"
                  name="email"
                  type="email"
                  required
                  className="form-input w-full py-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-slate-700"
                  htmlFor="feedback-message"
                >
                  Feedback
                </label>
                <textarea
                  id="feedback-message"
                  name="message"
                  required
                  rows={4}
                  className="form-textarea w-full py-2"
                  placeholder="Share your thoughts..."
                />
              </div>
            </div>

            {status === "error" && (
              <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Feedback"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
