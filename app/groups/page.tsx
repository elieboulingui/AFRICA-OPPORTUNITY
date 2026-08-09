import { Users2, Search } from "lucide-react";
import { PageShell } from "@/app/components/page-shell";

const groups = [
  { name: "Product Designers France", members: "18,2 k membres", description: "Communauté de designers produits et UX" },
  { name: "React Developers", members: "12,7 k membres", description: "Discussions autour de React et Next.js" },
  { name: "Startup Builders", members: "9,1 k membres", description: "Leçons de growth, produit et recrutement" },
];

export default function GroupsPage() {
  return (
    <PageShell>
      <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <div className="flex items-center gap-2">
          <Users2 size={18} className="text-[#0A66C2]" />
          <h2 className="text-[16px] font-semibold text-[#191919]">Groupes recommandés</h2>
        </div>
        <label className="mt-4 flex items-center gap-2 rounded-md border border-[#E0DFDC] bg-[#EEF3F8] px-3 py-2 text-sm text-[#666666]">
          <Search size={16} />
          <input type="text" placeholder="Rechercher un groupe" className="w-full bg-transparent outline-none" />
        </label>
        <div className="mt-4 space-y-3">
          {groups.map((group) => (
            <div key={group.name} className="rounded-lg border border-[#E0DFDC] p-3">
              <p className="text-[15px] font-semibold text-[#191919]">{group.name}</p>
              <p className="mt-1 text-sm text-[#666666]">{group.members}</p>
              <p className="mt-2 text-sm text-[#333333]">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
