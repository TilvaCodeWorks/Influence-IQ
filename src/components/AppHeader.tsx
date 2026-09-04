import {
  Bell,
  Search,
} from "lucide-react";

import Logo from "./Logo";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/5 bg-[#050b0d]/90 px-5 backdrop-blur-xl">

      <div className="flex items-center gap-6">

        <Logo />

        <div className="hidden h-7 w-px bg-white/10 lg:block" />

        <div className="hidden items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2 text-xs text-slate-500 lg:flex">
          <Search size={14} />

          Search creators,
          campaigns...
        </div>

      </div>

      <div className="flex items-center gap-5">

        <Bell
          size={17}
          className="text-slate-400"
        />

        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-200 to-orange-600" />

      </div>

    </header>
  );
}