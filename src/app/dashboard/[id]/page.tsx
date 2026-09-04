import { notFound } from "next/navigation";

import AppShell from "@/components/AppShell";

import SectionTitle from "@/components/SectionTitle";

import {
  influencers,
} from "@/lib/mock-data";

import {
  formatNumber,
  formatINR,
} from "@/lib/utils";

export default async function InfluencerReport({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } =
    await params;

  const influencer =
    influencers.find(
      (item) => item.id === id
    );

  if (!influencer) {
    notFound();
  }

  return (
    <AppShell>

      <div className="p-5 md:p-8">

        <SectionTitle
          title="Influencer Report"
          subtitle="Detailed creator intelligence."
        />

        <div className="grid gap-5 xl:grid-cols-[1fr_320px]">

          <div>

            <div className="iq-card rounded-xl p-5">

              <div className="flex items-center gap-4">

                <img
                  src={influencer.avatar}
                  className="h-16 w-16 rounded-full object-cover"
                  alt=""
                />

                <div>

                  <h2 className="text-xl font-semibold">
                    {influencer.handle}
                  </h2>

                  <p className="text-xs text-slate-500">
                    {influencer.niche}
                    {" • "}
                    {influencer.location}
                  </p>

                  <div className="mt-2 text-xs text-lime-300">
                    {influencer.platform}
                  </div>

                </div>

              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

                <Metric
                  label="Followers"
                  value={formatNumber(
                    influencer.followers
                  )}
                />

                <Metric
                  label="Avg Views"
                  value={formatNumber(
                    influencer.avgViews
                  )}
                />

                <Metric
                  label="Engagement"
                  value={`${influencer.engagementRate}%`}
                />

                <Metric
                  label="Audience Quality"
                  value={`${influencer.audienceQuality}/100`}
                />

                <Metric
                  label="Authenticity"
                  value={`${influencer.authenticityScore}/100`}
                />

              </div>

            </div>

            <div className="iq-card mt-5 rounded-xl p-5">

              <h2 className="font-semibold">
                Engagement Overview
              </h2>

              <div className="mt-8 flex h-52 items-end gap-2">

                {[
                  32,
                  45,
                  38,
                  58,
                  52,
                  68,
                  61,
                  75,
                  64,
                  82,
                  72,
                  90,
                ].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-lime-300/70"
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  )
                )}

              </div>

            </div>

          </div>

          <aside>

            <div className="iq-card rounded-xl p-5">

              <h2 className="font-semibold">
                Campaign Fit
              </h2>

              <div className="mt-7 text-center">

                <div className="text-5xl font-semibold text-lime-300">
                  {influencer.matchScore}
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  Match Score / 100
                </div>

              </div>

              <div className="mt-7 space-y-4">

                <Score
                  label="Fashion Fit"
                  value={96}
                />

                <Score
                  label="Audience Fit"
                  value={91}
                />

                <Score
                  label="Content Quality"
                  value={89}
                />

                <Score
                  label="Authenticity"
                  value={
                    influencer.authenticityScore
                  }
                />

              </div>

              <div className="mt-7 rounded-lg border border-white/5 p-4">

                <div className="text-xs text-slate-500">
                  Estimated Collaboration
                </div>

                <div className="mt-2 font-semibold">
                  {formatINR(
                    influencer.estimatedPriceMin
                  )}
                  {" – "}
                  {formatINR(
                    influencer.estimatedPriceMax
                  )}
                </div>

              </div>

            </div>

          </aside>

        </div>

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
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">

      <div className="text-[10px] text-slate-600">
        {label}
      </div>

      <div className="mt-1 text-sm font-semibold">
        {value}
      </div>

    </div>
  );
}

function Score({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>

      <div className="flex justify-between text-xs">

        <span>{label}</span>

        <span>{value}%</span>

      </div>

      <div className="mt-2 h-1.5 rounded-full bg-white/5">

        <div
          className="h-1.5 rounded-full bg-lime-300"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}