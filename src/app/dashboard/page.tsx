import AppShell from "@/components/AppShell";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";

import {
  influencers,
} from "@/lib/mock-data";

import {
  formatNumber,
} from "@/lib/utils";

export default function Dashboard() {
  return (
    <AppShell>

      <div className="p-5 md:p-8">

        <SectionTitle
          title="Influencer Dashboard"
          subtitle="Your campaign intelligence at a glance."
        />

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            label="Total Campaigns"
            value="24"
            change="+12% this month"
          />

          <StatCard
            label="Total Spend"
            value="₹18.6L"
            change="+8.4% this month"
          />

          <StatCard
            label="Total Reach"
            value="26.4M"
            change="+18.7% this month"
          />

          <StatCard
            label="Avg Engagement"
            value="4.35%"
            change="+0.42%"
          />

        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.5fr_1fr]">

          <div className="iq-card overflow-x-auto rounded-xl">

            <div className="p-5">

              <h2 className="font-semibold">
                Recommended Influencers
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Best creators for your current
                campaign.
              </p>

            </div>

            <div className="min-w-[750px]">

              <div className="grid grid-cols-[1.5fr_100px_100px_100px_120px] border-y border-white/5 px-5 py-3 text-[10px] uppercase tracking-wider text-slate-600">

                <div>Influencer</div>
                <div>Followers</div>
                <div>Engagement</div>
                <div>Match</div>
                <div>Price</div>

              </div>

              {influencers
                .slice(0, 3)
                .map((influencer) => (
                  <div
                    key={influencer.id}
                    className="grid grid-cols-[1.5fr_100px_100px_100px_120px] items-center border-b border-white/5 px-5 py-4"
                  >

                    <div className="flex items-center gap-3">

                      <img
                        src={influencer.avatar}
                        className="h-9 w-9 rounded-full"
                        alt=""
                      />

                      <div>

                        <div className="text-sm">
                          {influencer.handle}
                        </div>

                        <div className="text-[10px] text-slate-500">
                          {influencer.niche}
                        </div>

                      </div>

                    </div>

                    <div className="text-xs">
                      {formatNumber(
                        influencer.followers
                      )}
                    </div>

                    <div className="text-xs">
                      {influencer.engagementRate}%
                    </div>

                    <div className="text-xs text-lime-300">
                      {influencer.matchScore}/100
                    </div>

                    <div className="text-xs">
                      ₹
                      {(
                        influencer
                          .estimatedPriceMin /
                        1000
                      ).toFixed(0)}
                      K
                    </div>

                  </div>
                ))}

            </div>

          </div>

          <div className="iq-card rounded-xl p-5">

            <h2 className="font-semibold">
              Platform Opportunity
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Example for a women&apos;s fashion
              product.
            </p>

            <div className="mt-6 space-y-5">

              {[
                ["Instagram", 92],
                ["TikTok", 88],
                ["YouTube", 74],
                ["Facebook", 61],
                ["LinkedIn", 32],
              ].map(([platform, score]) => (
                <div key={platform}>

                  <div className="mb-2 flex justify-between text-xs">

                    <span>
                      {platform}
                    </span>

                    <span className="text-lime-300">
                      {score}%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-white/5">

                    <div
                      className="h-2 rounded-full bg-lime-300"
                      style={{
                        width: `${score}%`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </AppShell>
  );
}