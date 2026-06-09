"use client";
import { PencilLine, BrainCircuit, ListOrdered, Handshake } from "lucide-react";

const steps = [
  {
    icon: PencilLine,
    title: "Describe your idea",
    desc: "Type your startup in plain English",
  },
  {
    icon: BrainCircuit,
    title: "AI analyzes",
    desc: "Domain, stage, geography & cheque size",
  },
  {
    icon: ListOrdered,
    title: "Ranked matches",
    desc: "Top 6 investors, best fit first",
  },
  {
    icon: Handshake,
    title: "You connect",
    desc: "Research & reach out with context",
  },
];

export default function DocsFlowDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
      <style jsx>{`
        @keyframes flow-x {
          0% {
            left: 0;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        @keyframes flow-y {
          0% {
            top: 0;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        .flow-dot-x {
          animation: flow-x 2.2s ease-in-out infinite;
        }
        .flow-dot-y {
          animation: flow-y 1.6s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col items-stretch gap-0 md:flex-row md:items-center md:justify-between">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="contents">
              {/* Node */}
              <div className="flex flex-col items-center text-center md:flex-1">
                <div className="relative mb-3">
                  <span className="absolute inset-0 animate-ping rounded-2xl bg-gray-800/15" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-800">
                    <Icon className="h-7 w-7 text-white" />
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-[10rem] text-xs text-slate-500">
                  {step.desc}
                </p>
              </div>

              {/* Connector (between nodes only) */}
              {i < steps.length - 1 && (
                <>
                  {/* Horizontal on desktop */}
                  <div className="relative mx-2 hidden h-0.5 flex-1 bg-gradient-to-r from-gray-300 to-gray-400 md:block">
                    <span className="flow-dot-x absolute -top-[3px] h-2 w-2 rounded-full bg-gray-800" />
                  </div>
                  {/* Vertical on mobile */}
                  <div className="relative mx-auto my-2 h-8 w-0.5 bg-gradient-to-b from-gray-300 to-gray-400 md:hidden">
                    <span className="flow-dot-y absolute -left-[3px] h-2 w-2 rounded-full bg-gray-800" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
