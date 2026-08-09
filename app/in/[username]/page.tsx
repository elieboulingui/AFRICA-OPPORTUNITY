import Link from "next/link";
import { PageShell } from "@/app/components/page-shell";
import { Button } from "@/components/ui/button";

interface ProfilePageProps {
  params: Promise<{ username: string }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;

  return (
    <PageShell>
      <div className="space-y-4">
        <section className="overflow-hidden rounded-lg border border-[#E0DFDC] bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-36 bg-gradient-to-r from-[#0A66C2] via-[#4F87D1] to-[#A2CFFF]" />
          <div className="px-4 pb-4">
            <div className="-mt-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#0A66C2] text-xl font-semibold text-white">
              {username.slice(0, 2).toUpperCase()}
            </div>
            <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-[24px] font-semibold text-[#191919]">{username.replace(/-/g, " ")}</h1>
                <p className="mt-1 text-sm text-[#666666]">Développeur Full Stack • Product Builder • Passionné de design systems</p>
              </div>
              <div className="flex gap-2">
                <Button className="rounded-full bg-[#0A66C2] text-white hover:bg-[#004182]">Se connecter</Button>
                <Button variant="outline" className="rounded-full border-[#0A66C2] text-[#0A66C2] hover:bg-[#EBF4FD]">Message</Button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
            <h2 className="text-[16px] font-semibold text-[#191919]">À propos</h2>
            <p className="mt-3 text-sm leading-7 text-[#333333]">Je conçois des produits numériques à fort impact, avec une approche centrée utilisateur et une forte sensibilité au design d’interface et à l’expérience produit.</p>
            <h2 className="mt-6 text-[16px] font-semibold text-[#191919]">Expérience</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#333333]">
              <li>• Lead Frontend Engineer chez Axiom Labs</li>
              <li>• Senior Product Designer chez Northstar</li>
              <li>• Consultant UI/UX chez Studio Bleu</li>
            </ul>
          </section>

          <aside className="space-y-4">
            <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
              <h2 className="text-[16px] font-semibold text-[#191919]">Compétences</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {['React', 'Next.js', 'UI Design', 'Product Strategy'].map((skill) => (
                  <span key={skill} className="rounded-full bg-[#EEF3F8] px-3 py-1 text-sm text-[#333333]">{skill}</span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
              <h2 className="text-[16px] font-semibold text-[#191919]">Profils similaires</h2>
              <div className="mt-3 space-y-2 text-sm text-[#333333]">
                <Link href="/in/sofia-dupont" className="block rounded-md px-2 py-2 transition hover:bg-[#F3F2EF]">Sofia Dupont</Link>
                <Link href="/in/nadia-ikram" className="block rounded-md px-2 py-2 transition hover:bg-[#F3F2EF]">Nadia Ikram</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
