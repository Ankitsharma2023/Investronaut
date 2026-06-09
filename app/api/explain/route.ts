import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured on the server." },
      { status: 500 },
    );
  }

  let startupIdea: string | undefined;
  let investor: any;
  try {
    const body = await request.json();
    startupIdea = body?.startup_idea;
    investor = body?.investor;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!startupIdea || !investor?.investor_name) {
    return NextResponse.json(
      { error: "startup_idea and investor are required." },
      { status: 400 },
    );
  }

  const openai = new OpenAI({ apiKey });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.6,
      messages: [
        {
          role: "system",
          content:
            "You are a startup-investor matchmaking analyst. In 2-4 concise " +
            "sentences, explain specifically WHY this investor is a good match " +
            "for the founder's input. Reference concrete signals — sector fit, " +
            "stage, geography, cheque size, and thesis alignment. Be honest: if " +
            "there is a caveat (e.g. geography mismatch), note it briefly.\n\n" +
            "Wrap the MOST IMPORTANT terms in double asterisks so they can be " +
            "highlighted — specifically the investor name, sector/industry, " +
            "stage, geography, cheque size, and any key metric or number. " +
            "Example: '**Blume Ventures** backs **seed-stage** **fintech** " +
            "startups in **India** with cheques up to **$1M**.' Do not use any " +
            "other markdown.",
        },
        {
          role: "user",
          content:
            `Founder's input: ${startupIdea}\n\n` +
            `Investor: ${investor.investor_name} (${investor.investor_type})\n` +
            `Thesis: ${investor.investment_thesis}\n` +
            `Stage: ${investor.stage_of_investment}\n` +
            `Geography: ${investor.countries_of_investment}\n` +
            `Cheque: ${investor.first_cheque_minimum} - ${investor.first_cheque_maximum} USD`,
        },
      ],
    });

    const reason = completion.choices[0]?.message?.content?.trim();
    return NextResponse.json({ reason: reason || "No reasoning available." });
  } catch (err) {
    console.error("explain error:", err);
    return NextResponse.json(
      { error: "Failed to generate reasoning." },
      { status: 502 },
    );
  }
}
