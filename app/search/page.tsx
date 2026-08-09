import { Search as SearchIcon } from "lucide-react";
import { PageShell } from "@/app/components/page-shell";

const results = [
  { type: "Personne", title: "Sofia Dupont", subtitle: "Principal UX Designer chez Northstar" },
  { type: "Offre", title: "Senior Product Designer", subtitle: "Northstar • Paris, Île-de-France" },
  { type: "Groupe", title: "Product Designers France", subtitle: "18,2 k membres" },
];

export default function SearchPage() {
  return (
    <PageShell>
      <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <label className="flex items-center gap-2 rounded-md border border-[#E0DFDC] bg-[#EEF3F8] px-3 py-2 text-sm text-[#666666]">
          <SearchIcon size={16} />
          <input type="text" placeholder="Rechercher des personnes, postes, entreprises..." className="w-full bg-transparent outline-none" />
        </label>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Personnes', 'Offres', 'Posts', 'Entreprises'].map((filter) => (
            <button key={filter} className="rounded-full border border-[#E0DFDC] bg-[#EEF3F8] px-3 py-1.5 text-sm text-[#333333]">
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          {results.map((result) => (
            <div key={result.title} className="rounded-lg border border-[#E0DFDC] p-3">
              <p className="text-sm font-semibold text-[#0A66C2]">{result.type}</p>
              <p className="mt-1 text-[15px] font-semibold text-[#191919]">{result.title}</p>
              <p className="mt-1 text-sm text-[#666666]">{result.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
