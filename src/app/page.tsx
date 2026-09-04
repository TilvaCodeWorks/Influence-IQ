// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"

          
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }



import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Crosshair,
  DollarSign,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import Logo from "@/components/Logo";

const features = [
  {
    title: "Deep Analytics",
    description: "Engagement, reach and content performance in one place.",
    icon: BarChart3,
  },
  {
    title: "Authenticity",
    description: "Detect suspicious activity and evaluate audience quality.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Matching",
    description: "Find creators aligned with your audience and campaign.",
    icon: Crosshair,
  },
  {
    title: "Fair Pricing",
    description: "Estimate realistic collaboration pricing from performance.",
    icon: DollarSign,
  },
  {
    title: "Campaign Planner",
    description: "Build creator combinations around your budget and goals.",
    icon: Rocket,
  },
];

const stats = [
  ["500K+", "Creators analyzed"],
  ["12M+", "Data points"],
  ["94%", "Detection accuracy"],
  ["8.6x", "Average ROI"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030708] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-lime-400/[0.055] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#030708]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <Link className="transition hover:text-white" href="/dashboard">
              Product
            </Link>

            <a className="transition hover:text-white" href="#features">
              Features
            </a>

            <a className="transition hover:text-white" href="#pricing">
              Pricing
            </a>

            <a className="transition hover:text-white" href="#about">
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="hidden text-sm text-slate-400 transition hover:text-white sm:block"
            >
              Log in
            </Link>

            <Link
              href="/dashboard"
              className="group flex items-center gap-1.5 rounded-lg bg-lime-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-lime-300"
            >
              Get Started
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-6 lg:pb-14 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Hero copy */}
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-300/15 bg-lime-300/[0.05] px-3 py-1.5 text-xs text-lime-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
              AI-powered influencer intelligence
            </div>

            <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
              Find creators
              <span className="block text-slate-200">who actually</span>
              <span className="text-lime-300">influence.</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-400 sm:text-base">
              Analyze creators using engagement, audience quality,
              authenticity, reach and pricing signals. Make smarter
              influencer decisions with real data.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/analyze"
                className="group flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
              >
                Analyze Influencer
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/dashboard"
                className="group flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                Explore Dashboard
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
              <div className="flex -space-x-2">
                {["A", "M", "R"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#030708] bg-slate-700 text-[8px] text-white"
                  >
                    {letter}
                  </div>
                ))}

                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#030708] bg-lime-400 text-[8px] font-bold text-black">
                  +
                </div>
              </div>

              <span>Trusted by 500+ brands</span>
            </div>
          </div>

          {/* Analytics visual */}
          <div className="relative mx-auto h-[460px] w-full max-w-[600px] sm:h-[500px]">
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.035] blur-3xl" />

            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-300/[0.07]" />

            {/* Main creator card */}
            <div className="absolute left-1/2 top-1/2 z-10 h-[350px] w-[225px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] border border-lime-300/20 bg-[#0a100f] shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=90"
                alt="Fashion creator"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-20">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-lime-300/20 bg-lime-300/10 text-xs font-bold text-lime-300">
                    @
                  </div>

                  <div>
                    <p className="text-xs font-semibold">
                      @wanderwithsara
                    </p>

                    <p className="mt-0.5 text-[10px] text-lime-300">
                      Fashion • Lifestyle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric cards */}
            <MetricCard
              icon={<TrendingUp size={14} />}
              label="Engagement"
              value="4.82%"
              change="+18.4%"
              className="left-0 top-8 sm:left-2"
            />

            <MetricCard
              icon={<Users size={14} />}
              label="Estimated reach"
              value="128K"
              change="+12.8%"
              className="right-0 top-16 sm:right-2"
            />

            <MetricCard
              icon={<ShieldCheck size={14} />}
              label="Authenticity"
              value="92/100"
              change="Excellent"
              className="bottom-20 left-0 sm:left-2"
            />

            <MetricCard
              icon={<Zap size={14} />}
              label="Audience quality"
              value="87/100"
              change="High"
              className="bottom-14 right-0 sm:right-2"
            />

            {/* Price */}
            <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-lime-300/20 bg-[#09100f]/95 px-4 py-2.5 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300/10 text-lime-300">
                  <DollarSign size={15} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-500">
                    Estimated price
                  </p>

                  <p className="text-sm font-semibold">
                    ₹25K – ₹45K
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], index) => (
            <div
              key={label}
              className={`px-5 py-6 text-center ${
                index < 3 ? "border-r border-white/[0.06]" : ""
              }`}
            >
              <p className="text-xl font-semibold sm:text-2xl">
                {value}
              </p>

              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Analyzer */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-14">
        <div className="relative overflow-hidden rounded-2xl border border-lime-300/10 bg-gradient-to-r from-lime-300/[0.07] to-white/[0.02] p-5 sm:p-6">
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-lime-300">
                <Sparkles size={12} />
                Instant analysis
              </div>

              <h2 className="text-xl font-semibold">
                Analyze any influencer
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Paste a social profile URL to see its performance signals.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:flex-row lg:max-w-2xl">
              <input
                type="url"
                placeholder="Paste Instagram, YouTube or TikTok URL..."
                aria-label="Social media profile URL"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-lime-300/30"
              />

              <Link
                href="/analyze"
                className="flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
              >
                Analyze
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-16"
      >
        <div className="mb-8 max-w-2xl">
          <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-lime-300">
            Platform
          </div>

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything you need to choose better.
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Go beyond followers and vanity metrics. Understand the
            signals that determine creator value.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-lime-300/20 hover:bg-lime-300/[0.025]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-lime-300/10 bg-lime-300/[0.06] text-lime-300">
                <Icon size={18} />
              </div>

              <h3 className="mt-5 text-sm font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-16"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-lime-300">
              Data over assumptions
            </div>

            <h2 className="max-w-lg text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              The biggest following doesn&apos;t always create the biggest impact.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
              InfluenceIQ combines engagement, reach, audience quality,
              authenticity and pricing to reveal the actual value behind
              every creator.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Detect suspicious activity",
                "Compare creator performance",
                "Estimate collaboration pricing",
                "Build smarter campaigns",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-slate-300"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-300/10 text-lime-300">
                    <Check size={11} />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Compact dashboard */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#08100f] p-4 shadow-2xl sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-500">
                  Creator overview
                </p>

                <p className="mt-1 text-sm font-semibold">
                  @wanderwithsara
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300/10 text-xs font-bold text-lime-300">
                @
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <DashboardMetric
                label="Engagement"
                value="4.82%"
                trend="+18%"
              />

              <DashboardMetric
                label="Reach"
                value="128K"
                trend="+12%"
              />

              <DashboardMetric
                label="Authenticity"
                value="92/100"
                trend="Excellent"
              />

              <DashboardMetric
                label="Audience"
                value="87/100"
                trend="High quality"
              />
            </div>

            <div className="mt-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500">
                    Engagement trend
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Growing steadily
                  </p>
                </div>

                <TrendingUp
                  size={17}
                  className="text-lime-300"
                />
              </div>

              <div className="mt-4 flex h-20 items-end gap-1.5">
                {[30, 35, 28, 45, 43, 55, 52, 65, 60, 76, 70, 90].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-sm bg-lime-300/50 transition hover:bg-lime-300"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-16"
      >
        <div className="mb-8 text-center">
          <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-lime-300">
            Pricing
          </div>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Simple pricing. No surprises.
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Start free and upgrade when your creator research grows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Pricing
            name="Starter"
            price="₹0"
            description="For exploring InfluenceIQ."
            features={[
              "5 influencer analyses",
              "Basic audience metrics",
              "Engagement overview",
            ]}
          />

          <Pricing
            name="Growth"
            price="₹2,999"
            description="For growing brands."
            highlighted
            features={[
              "Unlimited analyses",
              "Audience authenticity",
              "Pricing estimates",
              "Creator comparisons",
              "Campaign planning",
            ]}
          />

          <Pricing
            name="Agency"
            price="₹9,999"
            description="For agencies and teams."
            features={[
              "Everything in Growth",
              "Multiple team members",
              "Advanced analytics",
              "Campaign management",
              "Priority support",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-16">
        <div className="relative overflow-hidden rounded-2xl border border-lime-300/15 bg-lime-300/[0.055] px-6 py-10 text-center">
          <div className="absolute left-1/2 top-[-160px] h-80 w-80 -translate-x-1/2 rounded-full bg-lime-300/[0.08] blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 text-black">
              <Sparkles size={18} />
            </div>

            <h2 className="mx-auto mt-4 max-w-xl text-2xl font-semibold sm:text-3xl">
              Stop guessing.
              <span className="text-lime-300">
                {" "}
                Start influencing smarter.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm text-slate-500">
              Analyze your first creator and discover the metrics
              that actually matter.
            </p>

            <Link
              href="/analyze"
              className="group mx-auto mt-6 flex w-fit items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
            >
              Analyze an Influencer

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
          <Logo />

          <p className="text-[11px] text-slate-600">
            © 2026 InfluenceIQ. All rights reserved.
          </p>

          <div className="flex gap-5 text-xs text-slate-500">
            <Link
              href="/dashboard"
              className="transition hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/analyze"
              className="transition hover:text-white"
            >
              Analyze
            </Link>

            <a
              href="#pricing"
              className="transition hover:text-white"
            >
              Pricing
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   METRIC CARD
========================================================= */

function MetricCard({
  icon,
  label,
  value,
  change,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  className: string;
}) {
  return (
    <div
      className={`absolute z-20 w-40 rounded-xl border border-white/[0.08] bg-[#09100f]/95 p-3.5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-lime-300/20 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime-300/10 text-lime-300">
          {icon}
        </div>

        <TrendingUp
          size={11}
          className="text-lime-300"
        />
      </div>

      <p className="mt-2 text-[10px] text-slate-500">
        {label}
      </p>

      <p className="mt-0.5 text-base font-semibold">
        {value}
      </p>

      <p className="mt-0.5 text-[9px] text-lime-300">
        {change}
      </p>
    </div>
  );
}

/* =========================================================
   DASHBOARD METRIC
========================================================= */

function DashboardMetric({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
      <p className="text-[10px] text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-base font-semibold">
        {value}
      </p>

      <p className="mt-0.5 text-[9px] text-lime-300">
        {trend}
      </p>
    </div>
  );
}

/* =========================================================
   PRICING
========================================================= */

function Pricing({
  name,
  price,
  description,
  features,
  highlighted = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${
        highlighted
          ? "border-lime-300/30 bg-lime-300/[0.045]"
          : "border-white/[0.07] bg-white/[0.02]"
      }`}
    >
      {highlighted && (
        <span className="absolute right-4 top-4 rounded-full bg-lime-300 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-black">
          Popular
        </span>
      )}

      <p className="text-xs font-medium text-slate-400">
        {name}
      </p>

      <div className="mt-3 flex items-end gap-1">
        <span className="text-3xl font-semibold tracking-tight">
          {price}
        </span>

        <span className="mb-1 text-[10px] text-slate-500">
          /month
        </span>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        {description}
      </p>

      <div className="my-5 h-px bg-white/[0.06]" />

      <div className="space-y-2.5">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 text-xs text-slate-400"
          >
            <Check
              size={13}
              className="shrink-0 text-lime-300"
            />

            {feature}
          </div>
        ))}
      </div>

      <Link
        href="/dashboard"
        className={`mt-6 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition ${
          highlighted
            ? "bg-lime-400 text-black hover:bg-lime-300"
            : "border border-white/10 text-white hover:bg-white/[0.05]"
        }`}
      >
        Get Started
        <ArrowRight size={13} />
      </Link>
    </div>
  );
}

