import { Lock, ShieldCheck, BellRing, UserCog } from "lucide-react";
import { PageShell } from "@/app/components/page-shell";

const tabs = [
  { title: "Préférences du compte", icon: UserCog },
  { title: "Confidentialité", icon: ShieldCheck },
  { title: "Notifications", icon: BellRing },
  { title: "Sécurité", icon: Lock },
];

export default function SettingsPage() {
  return (
    <PageShell>
      <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <h2 className="text-[16px] font-semibold text-[#191919]">Paramètres & confidentialité</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <div key={tab.title} className="rounded-lg border border-[#E0DFDC] p-3">
                <div className="flex items-center gap-2 text-[#0A66C2]">
                  <Icon size={16} />
                  <p className="text-sm font-semibold text-[#191919]">{tab.title}</p>
                </div>
                <p className="mt-2 text-sm text-[#666666]">Paramètres associés à votre expérience de navigation.</p>
              </div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
