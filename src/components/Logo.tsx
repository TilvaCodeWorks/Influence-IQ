import { Activity } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-lg font-bold">
      <div className="grid h-8 w-8 place-items-center rounded-lg border border-lime-300/30 bg-lime-300/10 text-lime-300">
        <Activity size={18} />
      </div>

      <span>
        Influence
        <span className="text-lime-300">
          IQ
        </span>
      </span>
    </div>
  );
}