import { NavBar } from "./nav-bar";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#F3F2EF] text-[#191919]">
      <NavBar />
      <main className={`mx-auto max-w-[1128px] px-4 pb-8 pt-20 lg:px-0 ${className}`}>{children}</main>
    </div>
  );
}
