"use client";
import { useEffect, useState } from "react";
import {
  ExternalLink,
  Building2,
  MapPin,
  DollarSign,
  TrendingUp,
  Globe,
  Sparkles,
} from "lucide-react";
import { auth } from "@/app/firebase/firebase";
import { redirect } from "next/navigation";

interface InvestorMatch {
  rank: number;
  investor_name: string;
  investor_type: string;
  investment_thesis: string;
  stage_of_investment: string;
  countries_of_investment: string;
  first_cheque_minimum: number;
  first_cheque_maximum: number;
  website?: string | null;
}

type ReasonState = { open: boolean; loading: boolean; text: string };

export default function ResultsPage() {
  const [results, setResults] = useState<InvestorMatch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [idea, setIdea] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [exhausted, setExhausted] = useState<boolean>(false);
  const [reasons, setReasons] = useState<Record<string, ReasonState>>({});

  useEffect(() => {
    if (!auth.currentUser) {
      redirect("/signin?next=results");
    }
    const startupIdea = sessionStorage.getItem("startupIdea");
    if (!startupIdea) {
      setLoading(false);
      return;
    }
    setIdea(startupIdea);

    // The terminal usually validates + fetches before navigating here and
    // stashes the matches. Use them to avoid a second API call.
    const cached = sessionStorage.getItem("investorResults");
    if (cached) {
      try {
        setResults(JSON.parse(cached));
        setLoading(false);
        return;
      } catch {
        // fall through to fetching if the cache is corrupt
      }
    }

    const fetchResults = async () => {
      try {
        const res = await fetch("/api/find_investors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ startup_idea: startupIdea, finalize: true }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error || "Something went wrong.");
        }
        if (data.status === "invalid") {
          throw new Error(data.feedback || "That doesn't look like a startup idea.");
        }
        setResults(data.investors || []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while finding investors. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  // Render **highlighted** terms from the reasoning in the dark brand gray.
  const renderReason = (text: string) =>
    text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      ),
    );

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${(amount / 1000).toFixed(0)}K`;
  };

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      const res = await fetch("/api/find_investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startup_idea: idea,
          finalize: true,
          exclude: results.map((r) => r.investor_name),
          count: 4,
        }),
      });
      const data = await res.json();
      const fresh: InvestorMatch[] = (data.investors || []).filter(
        (i: InvestorMatch) =>
          !results.some((r) => r.investor_name === i.investor_name),
      );
      if (fresh.length === 0) {
        setExhausted(true);
      } else {
        setResults((prev) => [...prev, ...fresh]);
      }
    } catch {
      setExhausted(true);
    } finally {
      setLoadingMore(false);
    }
  };

  const toggleReason = async (investor: InvestorMatch) => {
    const key = investor.investor_name;
    const current = reasons[key];
    if (current?.open) {
      setReasons((prev) => ({ ...prev, [key]: { ...current, open: false } }));
      return;
    }
    if (current?.text) {
      setReasons((prev) => ({ ...prev, [key]: { ...current, open: true } }));
      return;
    }
    setReasons((prev) => ({
      ...prev,
      [key]: { open: true, loading: true, text: "" },
    }));
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startup_idea: idea, investor }),
      });
      const data = await res.json();
      setReasons((prev) => ({
        ...prev,
        [key]: {
          open: true,
          loading: false,
          text: data.reason || data.error || "No reasoning available.",
        },
      }));
    } catch {
      setReasons((prev) => ({
        ...prev,
        [key]: { open: true, loading: false, text: "Couldn't load reasoning." },
      }));
    }
  };

  const LoadingCard = () => (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse">
      <div className="mb-4 flex items-start justify-between">
        <div className="h-6 w-48 rounded bg-slate-200"></div>
        <div className="h-6 w-8 rounded-full bg-slate-200"></div>
      </div>
      <div className="space-y-3">
        <div className="h-4 w-32 rounded bg-slate-200"></div>
        <div className="h-4 w-full rounded bg-slate-200"></div>
        <div className="h-4 w-40 rounded bg-slate-200"></div>
        <div className="h-4 w-56 rounded bg-slate-200"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center space-x-2">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-800 border-t-transparent"></div>
              <span className="text-xl font-semibold text-slate-900">
                Finding Perfect Investors...
              </span>
            </div>
            <p className="text-slate-500">
              Analyzing your startup idea and matching with the best investors
            </p>
          </div>
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold text-slate-900">
            Investor Matches
          </h1>
          {idea && (
            <div className="inline-block rounded-full border border-slate-200 bg-gray-100 px-6 py-2">
              <p className="font-medium text-gray-800">"{idea}"</p>
            </div>
          )}
          {!error && results.length > 0 && (
            <p className="mt-3 text-slate-500">
              Found {results.length} potential investor
              {results.length !== 1 ? "s" : ""} for your startup
            </p>
          )}
        </div>

        {/* Results */}
        {error ? (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <span className="text-2xl text-red-600">!</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              Couldn&apos;t load matches
            </h3>
            <p className="text-slate-500">{error}</p>
          </div>
        ) : results.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <span className="text-2xl text-slate-400">?</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              No Investors Found
            </h3>
            <p className="text-slate-500">
              Try refining your startup idea or check back later.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6">
              {results.map((investor, index) => {
                const reason = reasons[investor.investor_name];
                return (
                  <div
                    key={`${investor.investor_name}-${index}`}
                    className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                  >
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
                          <Building2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-gray-900">
                            {investor.investor_name}
                          </h2>
                          <p className="text-sm text-slate-500">
                            {investor.investor_type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                          #{index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-800" />
                          <div>
                            <p className="mb-1 text-sm font-medium text-slate-700">
                              Investment Focus
                            </p>
                            <p className="text-sm leading-relaxed text-slate-500">
                              {investor.investment_thesis}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Globe className="h-5 w-5 flex-shrink-0 text-gray-800" />
                          <div>
                            <p className="mb-1 text-sm font-medium text-slate-700">
                              Investment Stage
                            </p>
                            <p className="text-sm text-slate-500">
                              {investor.stage_of_investment}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 flex-shrink-0 text-gray-800" />
                          <div>
                            <p className="mb-1 text-sm font-medium text-slate-700">
                              Geographic Focus
                            </p>
                            <p className="text-sm text-slate-500">
                              {investor.countries_of_investment}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <DollarSign className="h-5 w-5 flex-shrink-0 text-gray-800" />
                          <div>
                            <p className="mb-1 text-sm font-medium text-slate-700">
                              Check Size
                            </p>
                            <p className="text-sm text-slate-500">
                              {formatCurrency(investor.first_cheque_minimum)} -{" "}
                              {formatCurrency(investor.first_cheque_maximum)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4">
                      <button
                        onClick={() => toggleReason(investor)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-gray-300 hover:text-gray-900"
                      >
                        <Sparkles className="h-4 w-4" />
                        {reason?.open ? "Hide reason" : "Reason"}
                      </button>
                      {investor.website && (
                        <a
                          href={investor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm font-medium text-gray-800 transition-colors hover:text-gray-900"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    {/* Reasoning panel */}
                    {reason?.open && (
                      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                        {reason.loading ? (
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-800 border-t-transparent"></span>
                            Generating reasoning...
                          </div>
                        ) : (
                          <p className="text-sm leading-relaxed text-slate-600">
                            {renderReason(reason.text)}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination / show more */}
            <div className="mt-10 text-center">
              {exhausted ? (
                <p className="text-sm text-slate-500">
                  That&apos;s every strong match we found for your input.
                </p>
              ) : (
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="btn btn-primary px-6 disabled:opacity-60"
                >
                  {loadingMore ? "Finding more..." : "Show more investors"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
