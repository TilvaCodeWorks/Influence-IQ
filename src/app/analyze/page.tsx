"use client";

import {
  useState,
} from "react";

import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";

import AppShell from "@/components/AppShell";

import SectionTitle from "@/components/SectionTitle";

import {
  detectPlatform,
  formatINR,
} from "@/lib/utils";

interface AnalysisResult {
  platform: string;

  engagementRate: number;

  audienceQuality: number;

  authenticityScore: number;

  priceMin: number;

  priceMax: number;

  recommendation: string;

  reason: string;
}

export default function AnalyzePage() {
  const [url, setUrl] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<AnalysisResult | null>(
      null
    );

  async function analyze() {
    if (!url.trim()) return;

    setLoading(true);

    setResult(null);

    const response =
      await fetch("/api/analyze", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          url,
        }),
      });

    const data =
      await response.json();

    setResult(data);

    setLoading(false);
  }

  return (
    <AppShell>

      <div className="mx-auto max-w-5xl p-5 md:p-8">

        <SectionTitle
          title="Analyze Influencer"
          subtitle="Paste a creator URL and generate a decision-ready report."
        />

        <div className="iq-card rounded-2xl p-5">

          <div className="mb-5 flex items-center gap-2">

            <Sparkles
              size={17}
              className="text-lime-300"
            />

            <span className="text-sm font-medium">
              Multi-platform analyzer
            </span>

          </div>

          <div className="flex flex-col gap-3 md:flex-row">

            <input
              value={url}
              onChange={(event) =>
                setUrl(
                  event.target.value
                )
              }
              placeholder="https://instagram.com/username"
              className="flex-1 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-lime-300/40"
            />

            <button
              onClick={analyze}
              disabled={loading}
              className="rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-black disabled:opacity-50"
            >

              {loading ? (
                <>
                  <Loader2
                    size={15}
                    className="mr-2 inline animate-spin"
                  />

                  Analyzing...
                </>
              ) : (
                <>
                  Analyze

                  <ArrowRight
                    size={15}
                    className="ml-1 inline"
                  />
                </>
              )}

            </button>

          </div>

          <div className="mt-3 text-xs text-slate-600">

            Detected Platform:

            <span className="ml-1 text-slate-400">
              {url
                ? detectPlatform(url)
                : "—"}
            </span>

          </div>

        </div>

        {result && (
          <div className="mt-5 space-y-4">

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <Metric
                label="Platform"
                value={result.platform}
              />

              <Metric
                label="Engagement Rate"
                value={`${result.engagementRate}%`}
              />

              <Metric
                label="Audience Quality"
                value={`${result.audienceQuality}/100`}
              />

              <Metric
                label="Authenticity"
                value={`${result.authenticityScore}/100`}
              />

            </div>

            <div className="grid gap-4 lg:grid-cols-2">

              <div className="iq-card rounded-xl p-5">

                <h2 className="font-semibold">
                  Campaign Recommendation
                </h2>

                <div className="mt-4 rounded-xl border border-lime-300/10 bg-lime-300/[0.03] p-5">

                  <div className="text-xs text-slate-500">
                    Recommended priority
                  </div>

                  <div className="mt-2 text-2xl font-semibold text-lime-300">
                    {result.recommendation}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {result.reason}
                  </p>

                </div>

              </div>

              <div className="iq-card rounded-xl p-5">

                <h2 className="font-semibold">
                  Estimated Collaboration Price
                </h2>

                <div className="mt-5 text-3xl font-semibold">
                  {formatINR(
                    result.priceMin
                  )}
                  {" – "}
                  {formatINR(
                    result.priceMax
                  )}
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Demo estimate. In production,
                  this model should learn from your
                  actual influencer deals.
                </p>

              </div>

            </div>

            <div className="iq-card rounded-xl p-5">

              <h2 className="font-semibold">
                Data & Compliance
              </h2>

              <div className="mt-4 space-y-3 text-xs text-slate-400">

                <div>
                  <CheckCircle2
                    size={14}
                    className="mr-2 inline text-lime-300"
                  />

                  Current frontend uses mock
                  analytics.
                </div>

                <div>
                  <CheckCircle2
                    size={14}
                    className="mr-2 inline text-lime-300"
                  />

                  Production connectors should
                  use approved APIs/OAuth.
                </div>

                <div>
                  <CheckCircle2
                    size={14}
                    className="mr-2 inline text-lime-300"
                  />

                  Never ask creators for passwords.
                </div>

              </div>

            </div>

          </div>
        )}

      </div>

    </AppShell>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="iq-card rounded-xl p-4">

      <div className="text-xs text-slate-500">
        {label}
      </div>

      <div className="mt-2 text-xl font-semibold">
        {value}
      </div>

    </div>
  );
}