export default function StatCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change?: string;
}) {
  return (
    <div className="iq-card rounded-xl p-4">

      <div className="text-xs text-slate-500">
        {label}
      </div>

      <div className="mt-2 text-2xl font-semibold">
        {value}
      </div>

      {change && (
        <div className="mt-1 text-xs text-lime-300">
          {change}
        </div>
      )}

    </div>
  );
}