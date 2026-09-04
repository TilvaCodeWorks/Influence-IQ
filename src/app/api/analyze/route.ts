import { NextResponse } from "next/server";

import {
  detectPlatform,
} from "@/lib/utils";

export async function POST(
  request: Request
) {
  const body =
    await request.json();

  const url =
    body.url || "";

  const platform =
    detectPlatform(url);

  const data = {
    Instagram: {
      engagementRate: 4.82,
      audienceQuality: 87,
      authenticityScore: 92,
      priceMin: 25000,
      priceMax: 45000,
    },

    YouTube: {
      engagementRate: 3.76,
      audienceQuality: 90,
      authenticityScore: 93,
      priceMin: 150000,
      priceMax: 500000,
    },

    TikTok: {
      engagementRate: 6.1,
      audienceQuality: 85,
      authenticityScore: 89,
      priceMin: 30000,
      priceMax: 60000,
    },

    Facebook: {
      engagementRate: 2.91,
      audienceQuality: 79,
      authenticityScore: 86,
      priceMin: 15000,
      priceMax: 40000,
    },

    LinkedIn: {
      engagementRate: 2.35,
      audienceQuality: 92,
      authenticityScore: 95,
      priceMin: 20000,
      priceMax: 75000,
    },

    Snapchat: {
      engagementRate: 5.42,
      audienceQuality: 84,
      authenticityScore: 88,
      priceMin: 25000,
      priceMax: 55000,
    },

    X: {
      engagementRate: 2.72,
      audienceQuality: 81,
      authenticityScore: 87,
      priceMin: 15000,
      priceMax: 50000,
    },
  } as const;

  const selected =
    data[
      platform as keyof typeof data
    ] || data.Instagram;

  let recommendation =
    "High Priority";

  if (platform === "YouTube") {
    recommendation =
      "High Consideration";
  }

  if (platform === "LinkedIn") {
    recommendation =
      "B2B Priority";
  }

  let reason =
    "Good potential for influencer campaigns.";

  if (platform === "Instagram") {
    reason =
      "Strong fit for fashion discovery, visual storytelling and women aged 18–34.";
  }

  if (platform === "YouTube") {
    reason =
      "Strong option when the product requires detailed demonstrations or education.";
  }

  if (platform === "TikTok") {
    reason =
      "Strong discovery potential for short-form, trend-driven products.";
  }

  if (platform === "LinkedIn") {
    reason =
      "Better suited for B2B, professional services and founder-led campaigns.";
  }

  return NextResponse.json({
    platform,

    ...selected,

    recommendation,

    reason,
  });
}