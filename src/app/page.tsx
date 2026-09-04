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
  ArrowUpRight,
  BarChart3,
  Crosshair,
  DollarSign,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Logo from "@/components/Logo";

const features = [
  {
    title: "Deep Analytics",
    description:
      "Understand engagement, reach, audience and content performance.",
    icon: BarChart3,
  },
  {
    title: "Audience Authenticity",
    description:
      "Identify suspicious activity and evaluate audience quality.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Matching",
    description:
      "Find creators that match your product, audience and campaign.",
    icon: Crosshair,
  },
  {
    title: "Fair Pricing",
    description:
      "Estimate collaboration pricing using performance signals.",
    icon: DollarSign,
  },
  {
    title: "Campaign Planner",
    description:
      "Plan campaigns, budgets and creator combinations.",
    icon: Rocket,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* NAVBAR */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#030708]/85 backdrop-blur-xl">

        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

          <Logo />

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">

            <Link href="/dashboard">
              Product
            </Link>

            <a href="#features">
              Features
            </a>

            <a href="#pricing">
              Pricing
            </a>

            <a href="#about">
              About
            </a>

          </nav>

          <div className="flex items-center gap-4">

            <Link
              href="/dashboard"
              className="hidden text-sm text-slate-300 sm:block"
            >
              Log in
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-lime-300"
            >
              Get Started Free
            </Link>

          </div>

        </div>

      </header>

      {/* HERO */}

      <section className="relative mx-auto max-w-7xl px-6 pb-12 pt-32">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-4 py-2 text-xs text-lime-300">

              <Sparkles size={14} />

              AI POWERED INFLUENCER
              INTELLIGENCE

            </div>

            <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl">

              Find the Right
              Influencers.

              <span className="block text-lime-300">
                Maximize Impact.
              </span>

              <span className="block">
                Every Time.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">

              InfluenceIQ helps brands analyze,
              compare and discover creators
              across social platforms — so you
              know who to contact, what to pay
              and where to spend.

            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/analyze"
                className="rounded-lg bg-lime-400 px-6 py-3 font-semibold text-black"
              >
                Analyze Influencer
                <ArrowUpRight
                  size={16}
                  className="ml-2 inline"
                />
              </Link>

              <Link
                href="/dashboard"
                className="rounded-lg border border-white/10 px-6 py-3 font-semibold"
              >
                Explore Dashboard
              </Link>

            </div>

            <div className="mt-8 text-sm text-slate-400">
              Trusted by 500+ brands
            </div>

          </div>

          {/* ANALYTICS VISUAL */}

          <div className="relative mx-auto h-[520px] w-full max-w-xl">

            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-300/10 bg-lime-300/[0.03]" />

            <div className="absolute left-1/2 top-1/2 h-[330px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-lime-300/30">

              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=85"
                alt="Fashion influencer"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 backdrop-blur">

                <div className="font-semibold">
                  @wanderwithsara
                </div>

                <div className="text-xs text-lime-300">
                  Instagram
                </div>

              </div>

            </div>

            <AnalyticsCard
              title="Engagement Rate"
              value="4.82%"
              className="left-0 top-16"
            />

            <AnalyticsCard
              title="Estimated Reach"
              value="128K"
              className="right-0 top-24"
            />

            <AnalyticsCard
              title="Audience Quality"
              value="87/100"
              className="bottom-24 left-0"
            />

            <AnalyticsCard
              title="Authenticity"
              value="92/100"
              className="bottom-24 right-0"
            />

            <AnalyticsCard
              title="Estimated Price"
              value="₹25K – ₹45K"
              className="bottom-0 left-1/2 -translate-x-1/2"
            />

          </div>

        </div>

      </section>

      {/* ANALYZE BAR */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="iq-card rounded-2xl p-5">

          <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:items-center">

            <div>

              <h2 className="font-semibold">
                Analyze Any Influencer
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Paste an Instagram, YouTube,
                TikTok or other supported URL.
              </p>

            </div>

            <div className="flex gap-2">

              <input
                placeholder="Paste social media URL..."
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none"
              />

              <Link
                href="/analyze"
                className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black"
              >
                Analyze
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-16"
      >

        <h2 className="text-center text-2xl font-semibold">
          Everything You Need to Make
          Smarter Choices
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">

          {features.map(
            ({
              title,
              description,
              icon: Icon,
            }) => (
              <div
                key={title}
                className="iq-card rounded-xl p-5"
              >

                <Icon
                  size={26}
                  className="text-lime-300"
                />

                <h3 className="mt-6 font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {description}
                </p>

              </div>
            )
          )}

        </div>

      </section>

      {/* PRICING */}

      <section
        id="pricing"
        className="mx-auto max-w-7xl px-6 py-12"
      >

        <h2 className="text-center text-2xl font-semibold">
          Simple Pricing
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          <Pricing
            name="Starter"
            price="₹0"
            description="For testing InfluenceIQ."
          />

          <Pricing
            name="Growth"
            price="₹2,999"
            description="For growing brands."
            highlighted
          />

          <Pricing
            name="Agency"
            price="₹9,999"
            description="For agencies and teams."
          />

        </div>

      </section>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-600">
        InfluenceIQ © 2026
      </footer>

    </div>
  );
}

function AnalyticsCard({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className: string;
}) {
  return (
    <div
      className={`iq-card absolute w-40 rounded-xl p-4 ${className}`}
    >
      <div className="text-[11px] text-slate-500">
        {title}
      </div>

      <div className="mt-2 text-xl font-semibold">
        {value}
      </div>

      <div className="mt-3 h-1 rounded-full bg-lime-300/60" />
    </div>
  );
}

function Pricing({
  name,
  price,
  description,
  highlighted,
}: {
  name: string;
  price: string;
  description: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`iq-card rounded-2xl p-6 ${
        highlighted
          ? "border-lime-300/30"
          : ""
      }`}
    >
      <div className="text-sm text-slate-400">
        {name}
      </div>

      <div className="mt-3 text-3xl font-semibold">
        {price}
        <span className="text-xs text-slate-500">
          /month
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-500">
        {description}
      </p>

      <Link
        href="/dashboard"
        className="mt-6 block rounded-lg border border-white/10 px-4 py-3 text-center text-sm"
      >
        Start
      </Link>
    </div>
  );
}