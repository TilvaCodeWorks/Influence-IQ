import Link from "next/link";

import {
  Bookmark,
  ExternalLink,
} from "lucide-react";

import { Influencer } from "@/lib/types";

import {
  formatINR,
  formatNumber,
} from "@/lib/utils";

export default function InfluencerRow({
  influencer,
}: {
  influencer: Influencer;
}) {
  return (
    <div className="grid min-w-[800px] grid-cols-[1.6fr_100px_100px_100px_150px_80px] items-center gap-3 border-b border-white/5 px-4 py-3 last:border-0">

      <div className="flex items-center gap-3">

        <img
          src={influencer.avatar}
          alt=""
          className="h-9 w-9 rounded-full object-cover"
        />

        <div>

          <Link
            href={`/dashboard/${influencer.id}`}
            className="text-sm font-medium hover:text-lime-300"
          >
            {influencer.handle}
          </Link>

          <div className="text-[10px] text-slate-500">
            {influencer.niche}
            {" • "}
            {influencer.location}
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
        {formatINR(
          influencer.estimatedPriceMin
        )}
        {" – "}
        {formatINR(
          influencer.estimatedPriceMax
        )}
      </div>

      <div className="flex gap-3">

        <Link
          href={`/dashboard/${influencer.id}`}
          className="text-slate-500 hover:text-lime-300"
        >
          <ExternalLink size={14} />
        </Link>

        <button className="text-slate-500 hover:text-lime-300">
          <Bookmark size={14} />
        </button>

      </div>

    </div>
  );
}