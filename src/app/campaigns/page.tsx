"use client";

import {
  useState,
} from "react";

import AppShell from "@/components/AppShell";

import SectionTitle from "@/components/SectionTitle";

export default function CampaignsPage() {
  const [step, setStep] =
    useState(1);

  const steps = [
    "Campaign Brief",
    "Select Influencers",
    "Budget & Goals",
    "Summary",
  ];

  return (
    <AppShell>

      <div className="p-5 md:p-8">

        <SectionTitle
          title="Campaign Planner"
          subtitle="Build a campaign and find the right creator combination."
        />

        <div className="mb-5 flex gap-2 overflow-x-auto rounded-xl border border-white/5 bg-[#071012] p-2">

          {steps.map(
            (stepName, index) => {

              const number =
                index + 1;

              return (
                <button
                  key={stepName}
                  onClick={() =>
                    setStep(number)
                  }
                  className={`flex min-w-max items-center gap-2 rounded-lg px-4 py-2 text-xs ${
                    step === number
                      ? "bg-lime-300/10 text-lime-300"
                      : "text-slate-500"
                  }`}
                >

                  <span className="grid h-6 w-6 place-items-center rounded-full border border-white/10">
                    {number}
                  </span>

                  {stepName}

                </button>
              );
            }
          )}

        </div>

        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">

          <div className="iq-card rounded-xl p-5">

            <h2 className="font-semibold">
              {steps[step - 1]}
            </h2>

            {step === 1 && (
              <div className="mt-6 space-y-4">

                <Input
                  label="Campaign Name"
                  placeholder="Summer Collection Launch"
                />

                <Input
                  label="Product"
                  placeholder="Women's Oversized T-Shirt"
                />

                <Input
                  label="Category"
                  placeholder="Fashion"
                />

                <Input
                  label="Campaign Goal"
                  placeholder="Sales / Conversions"
                />

                <Input
                  label="Target Audience"
                  placeholder="Women 18-30, India"
                />

              </div>
            )}

            {step === 2 && (
              <div className="mt-6 rounded-xl border border-lime-300/10 bg-lime-300/[0.03] p-5 text-sm leading-7 text-slate-400">

                Recommended creator mix:

                <strong className="text-white">
                  {" "}
                  3 Instagram fashion creators
                  + 2 TikTok creators
                </strong>

                <br />

                This combination gives you
                discovery + visual credibility
                + short-form reach.

              </div>
            )}

            {step === 3 && (
              <div className="mt-6 space-y-4">

                <Input
                  label="Total Budget"
                  placeholder="₹1,00,000"
                />

                <Input
                  label="Expected Reach"
                  placeholder="500K – 900K"
                />

                <Input
                  label="Expected Sales"
                  placeholder="150 – 250"
                />

              </div>
            )}

            {step === 4 && (
              <div className="mt-6 rounded-xl border border-lime-300/10 bg-lime-300/[0.03] p-5 text-sm text-slate-400">

                Campaign ready.

                <br />

                Your next step is to shortlist
                creators and send them your
                campaign brief.

              </div>
            )}

            <button
              onClick={() =>
                setStep(
                  Math.min(
                    step + 1,
                    4
                  )
                )
              }
              className="mt-6 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black"
            >
              Next
            </button>

          </div>

          <div className="iq-card rounded-xl p-5">

            <h2 className="font-semibold">
              Estimated Results
            </h2>

            <div className="mt-6 space-y-5">

              <Result
                label="Estimated Reach"
                value="2.4M – 3.1M"
              />

              <Result
                label="Estimated Views"
                value="1.2M – 1.8M"
              />

              <Result
                label="Estimated Engagements"
                value="85K – 120K"
              />

              <Result
                label="Estimated Cost"
                value="₹2.5L – ₹3.2L"
              />

            </div>

          </div>

        </div>

      </div>

    </AppShell>
  );
}

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block text-xs text-slate-500">

      {label}

      <input
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
      />

    </label>
  );
}

function Result({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <div className="text-xs text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-lg font-semibold">
        {value}
      </div>

    </div>
  );
}