import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030708]">

      <AppHeader />

      <div className="flex">

        <Sidebar />

        <main className="min-w-0 flex-1">
          {children}
        </main>

      </div>

    </div>
  );
}