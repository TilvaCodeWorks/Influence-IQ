import AppShell from "@/components/AppShell";

import SectionTitle from "@/components/SectionTitle";

import {
  influencers,
} from "@/lib/mock-data";

import {
  formatNumber,
} from "@/lib/utils";

export default function ComparePage() {
  const selected =
    influencers.slice(0, 3);

  return (
    <AppShell>

      <div className="p-5 md:p-8">

        <SectionTitle
          title="Compare Influencers"
          subtitle="Compare creators side by side before spending your budget."
        />

        <div className="overflow-x-auto iq-card rounded-xl">

          <table className="w-full min-w-[750px]">

            <thead>

              <tr className="border-b border-white/5">

                <th className="p-5 text-left text-xs text-slate-500">
                  Metric
                </th>

                {selected.map(
                  (influencer) => (
                    <th
                      key={influencer.id}
                      className="p-5 text-left"
                    >

                      <div className="flex items-center gap-3">

                        <img
                          src={
                            influencer.avatar
                          }
                          className="h-9 w-9 rounded-full"
                          alt=""
                        />

                        <div>

                          <div className="text-sm">
                            {
                              influencer.handle
                            }
                          </div>

                          <div className="text-[10px] text-slate-500">
                            {
                              influencer.platform
                            }
                          </div>

                        </div>

                      </div>

                    </th>
                  )
                )}

              </tr>

            </thead>

            <tbody>

              <CompareRow
                label="Followers"
                values={selected.map(
                  (x) =>
                    formatNumber(
                      x.followers
                    )
                )}
              />

              <CompareRow
                label="Average Views"
                values={selected.map(
                  (x) =>
                    formatNumber(
                      x.avgViews
                    )
                )}
              />

              <CompareRow
                label="Engagement Rate"
                values={selected.map(
                  (x) =>
                    `${x.engagementRate}%`
                )}
              />

              <CompareRow
                label="Audience Quality"
                values={selected.map(
                  (x) =>
                    `${x.audienceQuality}/100`
                )}
              />

              <CompareRow
                label="Authenticity"
                values={selected.map(
                  (x) =>
                    `${x.authenticityScore}/100`
                )}
              />

              <CompareRow
                label="Match Score"
                values={selected.map(
                  (x) =>
                    `${x.matchScore}/100`
                )}
              />

              <CompareRow
                label="Estimated Price"
                values={selected.map(
                  (x) =>
                    `₹${(
                      x.estimatedPriceMin /
                      1000
                    ).toFixed(0)}K – ₹${(
                      x.estimatedPriceMax /
                      1000
                    ).toFixed(0)}K`
                )}
              />

            </tbody>

          </table>

        </div>

      </div>

    </AppShell>
  );
}

function CompareRow({
  label,
  values,
}: {
  label: string;
  values: string[];
}) {
  return (
    <tr className="border-b border-white/5">

      <td className="p-5 text-xs text-slate-500">
        {label}
      </td>

      {values.map(
        (value, index) => (
          <td
            key={index}
            className="p-5 text-xs"
          >
            {value}
          </td>
        )
      )}

    </tr>
  );
}