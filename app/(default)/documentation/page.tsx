import FeedbackForm from "@/components/feedback-form";
import DocsFlowDiagram from "@/components/docs-flow-diagram";
import {
  Rocket,
  Search,
  Sparkles,
  ListChecks,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Documentation - Investronaut",
  description:
    "Learn how Investronaut matches your startup with the right investors.",
};

const sections = [
  {
    id: "what-is",
    icon: Rocket,
    title: "What is Investronaut?",
    body: [
      "Investronaut is an AI-powered matchmaking platform that connects early-stage startups with the investors most likely to fund them.",
      "Instead of cold-emailing hundreds of funds, you describe your startup in plain English and Investronaut surfaces a ranked shortlist of relevant investors — with the reasoning behind each match.",
    ],
  },
  {
    id: "getting-started",
    icon: Search,
    title: "Getting Started",
    body: [
      "1. Create an account (Email/Password or Google) from the Sign up page.",
      "2. On the home page, describe your startup idea in a sentence or two — what it does and who it's for.",
      "3. Hit search. Investronaut analyses your idea and generates your investor matches.",
    ],
  },
  {
    id: "how-it-works",
    icon: Sparkles,
    title: "How matchmaking works",
    body: [
      "Your idea is sent to our AI engine, which evaluates the domain, stage, geography, and typical cheque size your startup fits.",
      "It then returns the six most relevant investor profiles, ranked from best to least fit, each with a short thesis explaining why they're a match.",
      "Vague inputs (a greeting, a single word, or gibberish) are rejected with a prompt to describe your startup properly — so you always get meaningful results.",
    ],
  },
  {
    id: "results",
    icon: ListChecks,
    title: "Understanding your results",
    body: [
      "Each result card shows the investor's type, investment focus, preferred stage, geographic focus, and typical first-cheque range.",
      "Use the rank as a starting point, read the thesis to judge fit, and follow the website link (when available) to research before reaching out.",
    ],
  },
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "Your data & privacy",
    body: [
      "Authentication is handled securely through Firebase. Your startup idea is used only to generate matches and is not shared publicly.",
      "Investor suggestions are AI-generated guidance to speed up your research — always verify details before making investment decisions.",
    ],
  },
];

const faqs = [
  {
    q: "Are the investor matches real firms?",
    a: "Matches are AI-generated suggestions based on your idea. Treat them as a research starting point and verify each firm independently.",
  },
  {
    q: "Why did I get a 'describe your idea' message?",
    a: "Your input was too short or wasn't a genuine startup idea. Add a sentence describing what you're building and who it serves.",
  },
  {
    q: "Is it free?",
    a: "Yes — you can create an account and generate investor matches at no cost.",
  },
];

export default function DocumentationPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-28 sm:px-6 md:pt-32">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Documentation
            </h1>
            <p className="mx-auto max-w-xl text-lg text-slate-500">
              Everything you need to know about finding the right investors with
              Investronaut.
            </p>
          </div>

          {/* Animated flow diagram */}
          <div className="mb-14">
            <DocsFlowDiagram />
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="mb-3 flex items-center gap-3 text-2xl font-bold text-slate-900">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    {section.title}
                  </h2>
                  <div className="space-y-3 pl-12">
                    {section.body.map((p, i) => (
                      <p key={i} className="leading-relaxed text-slate-600">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}

            {/* FAQ */}
            <article id="faq" className="scroll-mt-28">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800">
                  <HelpCircle className="h-5 w-5 text-white" />
                </span>
                Frequently asked questions
              </h2>
              <div className="space-y-4 pl-12">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="mb-1 font-semibold text-slate-900">
                      {faq.q}
                    </h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <FeedbackForm />
    </>
  );
}
