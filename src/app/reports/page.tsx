import AppShell from "@/components/AppShell";

import SectionTitle from "@/components/SectionTitle";

import StatCard from "@/components/StatCard";

export default function ReportsPage() {
  return (
    <AppShell>

      <div className="p-5 md:p-8">

        <SectionTitle
          title="Reports & Analytics"
          subtitle="Track campaign performance and ROI."
        />

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            label="Campaigns"
            value="24"
            change="+12%"
          />

          <StatCard
            label="Spend"
            value="₹18.6L"
            change="+8.4%"
          />

          <StatCard
            label="Reach"
            value="26.4M"
            change="+18.7%"
          />

          <StatCard
            label="Engagement"
            value="4.35%"
            change="+0.42%"
          />

        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">

          <div className="iq-card rounded-xl p-5">

            <h2 className="font-semibold">
              Performance Overview
            </h2>

            <div className="mt-8 flex h-56 items-end gap-2">

              {[
                35,
                58,
                48,
                75,
                55,
                82,
                67,
                92,
                78,
                98,
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

          <div className="iq-card rounded-xl p-5">

            <h2 className="font-semibold">
              Top Campaigns
            </h2>

            <div className="mt-5 space-y-3">

              {[
                "Summer Collection",
                "New Product Launch",
                "Festive Fashion",
                "Streetwear Drop",
              ].map(
                (campaign, index) => (
                  <div
                    key={campaign}
                    className="flex items-center justify-between rounded-lg border border-white/5 p-4"
                  >

                    <div>

                      <div className="text-sm">
                        {campaign}
                      </div>

                      <div className="mt-1 text-[10px] text-slate-500">
                        {[
                          "₹2.8M",
                          "₹1.5M",
                          "₹980K",
                          "₹720K",
                        ][index]}{" "}
                        reach
                      </div>

                    </div>

                    <div className="text-xs text-lime-300">
                      {
                        [
                          "4.8%",
                          "4.2%",
                          "4.0%",
                          "3.8%",
                        ][index]
                      }
                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </AppShell>
  );
}