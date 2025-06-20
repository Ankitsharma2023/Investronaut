"use client";
import { useEffect, useState } from "react";
import {
  ExternalLink,
  Building2,
  MapPin,
  DollarSign,
  TrendingUp,
  Globe,
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

export default function ResultsPage() {
  const [results, setResults] = useState<InvestorMatch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [idea, setIdea] = useState<string>("");

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

    const fetchResults = async () => {
      try {
        const res = await fetch("http://localhost:8000/find_investors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ startup_idea: startupIdea }),
        });

        if (!res.ok) throw new Error("API request failed");
        const data: InvestorMatch[] = await res.json();
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${(amount / 1000).toFixed(0)}K`;
  };

  const LoadingCard = () => (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="h-6 bg-slate-700 rounded w-48"></div>
        <div className="h-6 w-8 bg-slate-700 rounded-full"></div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-slate-700 rounded w-32"></div>
        <div className="h-4 bg-slate-700 rounded w-full"></div>
        <div className="h-4 bg-slate-700 rounded w-40"></div>
        <div className="h-4 bg-slate-700 rounded w-56"></div>
        <div className="h-4 bg-slate-700 rounded w-36"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xl font-semibold text-white">
                Finding Perfect Investors...
              </span>
            </div>
            <p className="text-slate-400">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-3">
            Investor Matches
          </h1>
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-2 border border-blue-500/30">
            <p className="text-blue-300 font-medium">"{idea}"</p>
          </div>
          <p className="text-slate-400 mt-3">
            Found {results.length} potential investor
            {results.length !== 1 ? "s" : ""} for your startup
          </p>
        </div>

        {/* Results */}
        {results.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-400 text-2xl">?</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No Investors Found
            </h3>
            <p className="text-slate-400">
              Try refining your startup idea or check back later.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {results.map((investor, index) => (
              <div
                key={investor.rank}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "slideInUp 0.6s ease-out forwards",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {investor.investor_name}
                      </h2>
                      <p className="text-slate-400 text-sm">
                        {investor.investor_type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      #{investor.rank}
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-slate-300 mb-1">
                          Investment Focus
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {investor.investment_thesis}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-slate-300 mb-1">
                          Investment Stage
                        </p>
                        <p className="text-slate-400 text-sm">
                          {investor.stage_of_investment}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-slate-300 mb-1">
                          Geographic Focus
                        </p>
                        <p className="text-slate-400 text-sm">
                          {investor.countries_of_investment}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-slate-300 mb-1">
                          Check Size
                        </p>
                        <p className="text-slate-400 text-sm">
                          {formatCurrency(investor.first_cheque_minimum)} -{" "}
                          {formatCurrency(investor.first_cheque_maximum)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website Link */}
                {investor.website && (
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <a
                      href={investor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                      <span className="text-sm font-medium">Visit Website</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
