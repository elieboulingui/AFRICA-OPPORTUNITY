"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Search, Settings, UserRound, Users } from "lucide-react";
import { useAppStore } from "@/app/store";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const links = [
  { href: "/dashboard", label: "Accueil", icon: Home },
  { href: "/network", label: "Mon Réseau", icon: Users },
  { href: "/jobs", label: "Offres d'emploi", icon: BriefcaseBusiness },
];

export function NavBar() {
  const pathname = usePathname();
  const setActiveView = useAppStore((state) => state.setActiveView);
  const normalizedPath = pathname === "/mynetwork" ? "/network" : pathname === "/messaging" ? "/messages" : pathname;

  useEffect(() => {
    if (pathname === "/mynetwork" || pathname === "/network") {
      setActiveView("network");
    } else if (pathname === "/jobs") {
      setActiveView("jobs");
    } else {
      setActiveView("home");
    }
  }, [pathname, setActiveView]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E0DFDC] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1128px] items-center justify-between px-4 lg:px-0">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2] text-lg font-semibold text-white">W</div>
          <span className="text-xl font-semibold text-[#191919]">LinkWork</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <label className="flex w-full max-w-lg items-center gap-2 rounded-full border border-[#E0DFDC] bg-[#EEF3F8] px-4 py-2 text-sm text-[#666666]">
            <Search size={18} />
            <Input type="text" placeholder="Rechercher" className="h-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0" />
          </label>
        </div>

        <nav className="flex items-center gap-2 sm:gap-3">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = normalizedPath === href;
            return (
              <Button asChild size="sm" variant={isActive ? "secondary" : "ghost"} key={href}>
                <Link href={href} className="flex items-center gap-2 rounded-full px-2 py-2 sm:px-3">
                  <Icon size={18} />
                  <span className="hidden text-sm font-medium md:inline">{label}</span>
                </Link>
              </Button>
            );
          })}

          <Button asChild size="sm" variant={normalizedPath === "/messages" ? "secondary" : "ghost"}>
            <Link href="/messages" className="flex items-center gap-2 rounded-full px-2 py-2 sm:px-3">
              <MessageCircleMore size={18} />
              <span className="hidden text-sm font-medium md:inline">Messages</span>
            </Link>
          </Button>

          <Button asChild size="sm" variant={pathname === "/notifications" ? "secondary" : "ghost"}>
            <Link href="/notifications" className="flex items-center gap-2 rounded-full px-2 py-2 sm:px-3">
              <Bell size={18} />
              <span className="hidden text-sm font-medium md:inline">Notifications</span>
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] p-0 text-sm font-semibold text-white">
                AL
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/in/alicia-laurent" className="flex items-center gap-2">
                  <UserRound size={16} />
                  <span>Voir le profil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex items-center gap-2">
                  <Settings size={16} />
                  <span>Paramètres</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/" className="flex items-center gap-2">
                  <span>Se déconnecter</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
