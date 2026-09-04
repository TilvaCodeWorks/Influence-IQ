"use client";

import Link from "next/link";

import {
  BarChart3,
  Calculator,
  FileText,
  GitCompare,
  LayoutDashboard,
  Megaphone,
  Search,
  Settings,
  Users,
} from "lucide-react";

import { usePathname } from "next/navigation";

const menu = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },

  {
    href: "/influencers",
    label: "Influencers",
    icon: Users,
  },

  {
    href: "/analyze",
    label: "Analyze",
    icon: Search,
  },

  {
    href: "/compare",
    label: "Compare",
    icon: GitCompare,
  },

  {
    href: "/campaigns",
    label: "Campaigns",
    icon: Megaphone,
  },

  {
    href: "/pricing-estimator",
    label: "Pricing Estimator",
    icon: Calculator,
  },

  {
    href: "/reports",
    label: "Reports",
    icon: FileText,
  },

  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 border-r border-white/5 bg-[#050b0d] lg:block">

      <div className="sticky top-16 h-[calc(100vh-64px)] px-3 py-5">

        <div className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
          Workspace
        </div>

        <nav className="space-y-1">

          {menu.map(
            ({
              href,
              label,
              icon: Icon,
            }) => {

              const active =
                pathname === href ||
                pathname.startsWith(
                  href + "/"
                );

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                    active
                      ? "bg-lime-300/10 text-lime-300"
                      : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  <Icon size={16} />

                  {label}
                </Link>
              );
            }
          )}

        </nav>

        <div className="mt-8 rounded-xl border border-lime-300/10 bg-lime-300/[0.03] p-4">

          <div className="text-[10px] font-bold tracking-wider text-lime-300">
            PRO TIP
          </div>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            Do not choose creators only by
            follower count. Engagement,
            audience quality and campaign
            fit matter more.
          </p>

        </div>

      </div>

    </aside>
  );
}