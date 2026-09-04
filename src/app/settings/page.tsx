import AppShell from "@/components/AppShell";

import SectionTitle from "@/components/SectionTitle";

export default function SettingsPage() {
  return (
    <AppShell>

      <div className="p-5 md:p-8">

        <SectionTitle
          title="Settings"
          subtitle="Manage your InfluenceIQ workspace."
        />

        <div className="grid gap-5 lg:grid-cols-[220px_1fr]">

          <div className="iq-card rounded-xl p-2">

            {[
              "Profile",
              "Account",
              "Notifications",
              "Billing",
              "Team",
              "Integrations",
            ].map(
              (item, index) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-3 text-sm ${
                    index === 0
                      ? "bg-lime-300/10 text-lime-300"
                      : "text-slate-400"
                  }`}
                >
                  {item}
                </div>
              )
            )}

          </div>

          <div className="iq-card rounded-xl p-6">

            <h2 className="font-semibold">
              Profile Information
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Input
                label="Full Name"
                value="Demo User"
              />

              <Input
                label="Email"
                value="hello@influenceiq.com"
              />

              <Input
                label="Company"
                value="Your Brand"
              />

              <Input
                label="Currency"
                value="INR ₹"
              />

            </div>

            <button className="mt-6 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black">
              Save Changes
            </button>

          </div>

        </div>

      </div>

    </AppShell>
  );
}

function Input({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <label className="text-xs text-slate-500">

      {label}

      <input
        defaultValue={value}
        className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
      />

    </label>
  );
}