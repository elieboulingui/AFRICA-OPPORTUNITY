import { PageShell } from "@/app/components/page-shell";
import { Button } from "@/components/ui/button";

interface CompanyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;

  return (
    <PageShell>
      <div className="space-y-4">
        <section className="overflow-hidden rounded-lg border border-[#E0DFDC] bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-32 bg-gradient-to-r from-[#0A66C2] to-[#4F87D1]" />
          <div className="flex flex-col gap-4 px-4 pb-4 md:flex-row md:items-center md:justify-between">
            <div className="-mt-8 flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#0A66C2] text-lg font-semibold text-white">
                {slug.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h1 className="text-[20px] font-semibold text-[#191919]">{slug.replace(/-/g, " ")}</h1>
                <p className="text-sm text-[#666666]">Product & Design • Paris</p>
              </div>
            </div>
            <Button className="rounded-full bg-[#0A66C2] text-white hover:bg-[#004182]">Suivre</Button>
          </div>
        </section>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
            <h2 className="text-[16px] font-semibold text-[#191919]">À propos</h2>
            <p className="mt-3 text-sm leading-7 text-[#333333]">Cette entreprise développe des produits SaaS orientés expérience utilisateur et croissance relevée.</p>
            <h2 className="mt-6 text-[16px] font-semibold text-[#191919]">Offres d’emploi</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#333333]">
              <li>• Senior Product Designer</li>
              <li>• Frontend Engineer</li>
              <li>• Head of Growth</li>
            </ul>
          </section>
          <aside className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
            <h2 className="text-[16px] font-semibold text-[#191919]">Employés</h2>
            <div className="mt-3 space-y-2 text-sm text-[#333333]">
              <p>• Alicia Laurent • Product Designer</p>
              <p>• Julien R. • Talent Lead</p>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
