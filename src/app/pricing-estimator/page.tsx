"use client";

import {
  useMemo,
  useState,
} from "react";

import AppShell from "@/components/AppShell";

import SectionTitle from "@/components/SectionTitle";

const platforms = [
  "Instagram",
  "YouTube",
  "TikTok",
  "Facebook",
  "LinkedIn",
  "Snapchat",
  "X",
];

const contentTypes = [
  "Post",
  "Video",
  "Story",
  "Short",
];

export default function PricingEstimator() {
  const [followers, setFollowers] =
    useState(245000);

  const [engagement, setEngagement] =
    useState(4.82);

  const [platform, setPlatform] =
    useState("Instagram");

  const [contentType, setContentType] =
    useState("Post");

  const price = useMemo(() => {
    let base =
      (followers / 1000) * 55;

    base *=
      1 + engagement / 10;

    if (contentType === "Video") {
      base *= 1.8;
    }

    if (contentType === "Story") {
      base *= 0.55;
    }

    if (platform === "YouTube") {
      base *= 2.5;
    }

    if (platform === "TikTok") {
      base *= 1.2;
    }

    return Math.round(base);
  }, [
    followers,
    engagement,
    platform,
    contentType,
  ]);

  return (
    <AppShell>

      <div className="p-5 md:p-8">

        <SectionTitle
          title="Pricing Estimator"
          subtitle="Estimate a creator collaboration range."
        />

        <div className="grid gap-5 lg:grid-cols-2">

          <div className="iq-card rounded-xl p-5">

            <Select
              label="Platform"
              value={platform}
              setValue={setPlatform}
              options={platforms}
            />

            <Select
              label="Content Type"
              value={contentType}
              setValue={setContentType}
              options={contentTypes}
            />

            <NumberInput
              label="Followers"
              value={followers}
              setValue={setFollowers}
            />

            <NumberInput
              label="Engagement Rate %"
              value={engagement}
              setValue={setEngagement}
            />

          </div>

          <div className="iq-card rounded-xl p-6">

            <div className="text-xs text-slate-500">
              Estimated Price Range
            </div>

            <div className="mt-4 text-4xl font-semibold">
              ₹
              {Math.round(
                price * 0.85
              ).toLocaleString("en-IN")}

              {" – "}

              ₹
              {Math.round(
                price * 1.15
              ).toLocaleString("en-IN")}
            </div>

            <div className="mt-8 space-y-4 text-xs text-slate-400">

              <Row
                label="Base estimate"
                value={`₹${price.toLocaleString(
                  "en-IN"
                )}`}
              />

              <Row
                label="Engagement multiplier"
                value={`${(
                  1 +
                  engagement / 10
                ).toFixed(2)}x`}
              />

              <Row
                label="Content multiplier"
                value={
                  contentType === "Video"
                    ? "1.8x"
                    : contentType ===
                        "Story"
                      ? "0.55x"
                      : "1x"
                }
              />

            </div>

            <p className="mt-8 text-[11px] leading-5 text-slate-600">
              Demo pricing formula only.
              Your production system should
              learn from actual negotiated
              campaign prices.
            </p>

          </div>

        </div>

      </div>

    </AppShell>
  );
}

function NumberInput({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (
    value: number
  ) => void;
}) {
  return (
    <label className="mt-4 block text-xs text-slate-500">

      {label}

      <input
        type="number"
        value={value}
        onChange={(event) =>
          setValue(
            Number(
              event.target.value
            )
          )
        }
        className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
      />

    </label>
  );
}

function Select({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string;
  setValue: (
    value: string
  ) => void;
  options: string[];
}) {
  return (
    <label className="mb-4 block text-xs text-slate-500">

      {label}

      <select
        value={value}
        onChange={(event) =>
          setValue(
            event.target.value
          )
        }
        className="mt-1 w-full rounded-lg border border-white/10 bg-[#081113] px-3 py-3 text-sm text-white outline-none"
      >

        {options.map(
          (option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          )
        )}

      </select>

    </label>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-3">

      <span>{label}</span>

      <span className="text-white">
        {value}
      </span>

    </div>
  );
}