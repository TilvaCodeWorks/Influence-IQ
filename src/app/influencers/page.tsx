import AppShell from "@/components/AppShell";

import SectionTitle from "@/components/SectionTitle";

import InfluencerRow from "@/components/InfluencerRow";

import {
  influencers,
} from "@/lib/mock-data";

export default function InfluencersPage() {
  return (
    <AppShell>

      <div className="p-5 md:p-8">

        <SectionTitle
          title="Search Influencers"
          subtitle="Find creators that match your campaign."
        />

        <div className="iq-card rounded-xl p-5">

          <div className="grid gap-3 md:grid-cols-5">

            <Filter
              label="Platform"
              value="All"
            />

            <Filter
              label="Category"
              value="Fashion"
            />

            <Filter
              label="Location"
              value="India"
            />

            <Filter
              label="Followers"
              value="10K – 1M"
            />

            <Filter
              label="Engagement"
              value="3% – 10%"
            />

          </div>

        </div>

        <div className="mt-5 overflow-x-auto iq-card rounded-xl">

          <div className="min-w-[800px]">

            <div className="border-b border-white/5 p-5">

              <h2 className="font-semibold">
                Results
                <span className="ml-2 text-xs text-slate-600">
                  128 Found
                </span>
              </h2>

            </div>

            <div className="grid grid-cols-[1.6fr_100px_100px_100px_150px_80px] gap-3 border-b border-white/5 px-4 py-3 text-[10px] uppercase tracking-wider text-slate-600">

              <div>Influencer</div>
              <div>Followers</div>
              <div>Engagement</div>
              <div>Match</div>
              <div>Price</div>
              <div />

            </div>

            {influencers.map(
              (influencer) => (
                <InfluencerRow
                  key={influencer.id}
                  influencer={influencer}
                />
              )
            )}

          </div>

        </div>

      </div>

    </AppShell>
  );
}

function Filter({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <label className="text-xs text-slate-500">

      {label}

      <div className="mt-1 rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-slate-300">
        {value}
      </div>

    </label>
  );
}