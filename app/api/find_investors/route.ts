import { NextResponse } from "next/server";
import OpenAI from "openai";

// Run on the Node.js runtime (not edge) and never cache — the OpenAI key is
// read from the server environment and must stay out of the client bundle.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const investorItem = {
  type: "object",
  additionalProperties: false,
  properties: {
    rank: { type: "integer" },
    investor_name: { type: "string" },
    investor_type: { type: "string" },
    investment_thesis: { type: "string" },
    stage_of_investment: { type: "string" },
    countries_of_investment: { type: "string" },
    first_cheque_minimum: { type: "number" },
    first_cheque_maximum: { type: "number" },
    website: { type: ["string", "null"] },
  },
  required: [
    "rank",
    "investor_name",
    "investor_type",
    "investment_thesis",
    "stage_of_investment",
    "countries_of_investment",
    "first_cheque_minimum",
    "first_cheque_maximum",
    "website",
  ],
} as const;

const responseSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    // "invalid" = junk/unrelated, "need_info" = ask clarifying questions,
    // "ok" = return investors
    status: { type: "string", enum: ["ok", "need_info", "invalid"] },
    feedback: { type: "string" },
    questions: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          id: { type: "string" },
          question: { type: "string" },
          options: { type: "array", items: { type: "string" } },
        },
        required: ["id", "question", "options"],
      },
    },
    investors: { type: "array", items: investorItem },
  },
  required: ["status", "feedback", "questions", "investors"],
} as const;

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured on the server." },
      { status: 500 },
    );
  }

  let startupIdea: string | undefined;
  let finalize = false;
  let exclude: string[] = [];
  let count = 6;
  try {
    const body = await request.json();
    startupIdea = body?.startup_idea;
    finalize = body?.finalize === true;
    if (Array.isArray(body?.exclude)) exclude = body.exclude.filter(Boolean);
    if (typeof body?.count === "number") count = body.count;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!startupIdea || typeof startupIdea !== "string" || !startupIdea.trim()) {
    return NextResponse.json(
      { error: "Please describe your startup idea." },
      { status: 400 },
    );
  }

  const openai = new OpenAI({ apiKey });

  const paginating = exclude.length > 0;
  const startRank = exclude.length + 1;

  let system =
    "You are an expert startup-investor matchmaking analyst. Founders write " +
    "in many ways — full pitches, rough notes, or short search queries. Be " +
    "generous and helpful. Choose exactly one status:\n\n" +
    "- \"invalid\": greetings ('hi'), gibberish/random characters, or input " +
    "entirely unrelated to startups or investing (e.g. 'capital of Delhi'). " +
    "Put a short friendly message in `feedback`; questions=[]; investors=[].\n\n" +
    "- \"need_info\": use ONLY when the input is too thin to match well — " +
    "essentially just a single sector/keyword or a vague request with NO other " +
    "signal (e.g. 'looking for edtech vc', 'fintech', 'need investors'). " +
    "Generate 2-4 short multiple-choice questions for the missing essentials " +
    "(stage, geography, team size, funding amount). Each question has a " +
    "snake_case `id`, a short `question`, and 3-5 concise `options`. Never ask " +
    "about details the user already gave. questions=[...]; investors=[]; " +
    "feedback=\"\".\n\n" +
    "- \"ok\": use as soon as the input has a sector/idea PLUS at least one " +
    "concrete signal — geography, stage, team size, funding amount, traction, " +
    "or a described product. For example 'edtech VC, India, team of 100' is OK " +
    "(do NOT ask questions). Return up to " +
    count +
    " ranked investors that would realistically fund it (rank 1 = best fit). " +
    "Infer sensible defaults for anything minor that's missing. Cheque amounts " +
    "must be plain USD numbers (e.g. 250000, not '250K'). investment_thesis " +
    "explains in 1-2 sentences WHY this investor fits THIS input. Use a real " +
    "website URL only if confident; otherwise null. Never invent fake URLs. " +
    "questions=[]; feedback=\"\".";

  if (finalize) {
    system +=
      "\n\nThe user has now answered follow-up questions (appended to their " +
      "input). You have enough context: respond with status \"ok\" and " +
      "investors. Do NOT use \"need_info\" now (only \"invalid\" if the input " +
      "is genuinely junk).";
  }

  if (paginating) {
    system +=
      "\n\nThis is a 'show more' request. Status must be \"ok\". Do NOT include " +
      "any of these already-shown investors: " +
      exclude.join(", ") +
      ". Return the NEXT most relevant investors, continuing rank numbering " +
      "from " +
      startRank +
      ". If there are no more genuinely relevant investors, return an empty " +
      "investors array (still status \"ok\").";
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      messages: [
        { role: "system", content: system },
        { role: "user", content: `Founder's input: ${startupIdea}` },
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "matchmaking_response",
          strict: true,
          schema: responseSchema,
        },
      },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { status: "invalid", feedback: "No response from the model.", questions: [], investors: [] },
        { status: 200 },
      );
    }

    const parsed = JSON.parse(content);
    return NextResponse.json(parsed);
  } catch (err) {
    console.error("find_investors error:", err);
    return NextResponse.json(
      { error: "Failed to generate investor matches." },
      { status: 502 },
    );
  }
}
