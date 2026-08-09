"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Page d'accueil publique (landing). L'utilisateur accède aux pages de connexion et d'inscription.
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] text-[#191919]">
      <header className="mx-auto flex w-full max-w-[1128px] items-center justify-between px-4 py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2] text-lg font-semibold text-white">W</div>
          <span className="text-xl font-semibold">LinkWork</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/feed" className="text-sm font-medium text-[#666666] transition hover:text-[#0A66C2]">Découvrir</Link>
          <Link href="/learning" className="hidden text-sm font-medium text-[#666666] transition hover:text-[#0A66C2] md:inline">Learning</Link>
          <Link href="/jobs" className="hidden text-sm font-medium text-[#666666] transition hover:text-[#0A66C2] md:inline">Offres</Link>
          <Button asChild variant="secondary" size="sm">
            <Link href="/signin">Se connecter</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/signup">S'inscrire</Link>
          </Button>
        </nav>
      </header>

      <main className="mx-auto max-w-[1128px] px-4 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">Rejoignez votre réseau professionnel</h1>
            <p className="mt-4 text-lg text-[#666666]">Créez votre profil, partagez vos idées et découvrez des opportunités de carrière adaptées à votre expertise.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="min-w-[160px]">
                <Link href="/signin">Connexion</Link>
              </Button>
              <Button asChild variant="outline" className="min-w-[160px] text-[#0A66C2] hover:bg-[#EBF4FD]">
                <Link href="/signup">Inscription</Link>
              </Button>
            </div>

            <div className="mt-8 rounded-3xl border border-[#E0DFDC] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#191919]">LinkWork gratuit pour votre carrière</h2>
              <ul className="mt-4 space-y-2 text-sm text-[#333333]">
                <li>• Développez votre réseau professionnel</li>
                <li>• Recevez des offres d'emploi ciblées</li>
                <li>• Partagez vos réussites et trouvez des opportunités</li>
              </ul>
            </div>
          </div>

          <Card className="rounded-[24px] px-6 py-8 shadow-sm">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A66C2]">Accès rapide</p>
              <h3 className="text-2xl font-semibold text-[#191919]">Votre espace pro en un clic</h3>
              <p className="text-sm leading-6 text-[#666666]">Accédez à votre tableau de bord, vos messages, vos invitations, et vos opportunités de carrière avec une seule connexion.</p>
            </div>
            <div className="mt-6 grid gap-3">
              <Link href="/signin" className="rounded-lg bg-[#0A66C2] px-4 py-3 text-sm font-semibold text-white text-center transition hover:bg-[#004182]">Se connecter</Link>
              <Link href="/signup" className="rounded-lg border border-[#0A66C2] px-4 py-3 text-sm font-semibold text-[#0A66C2] text-center transition hover:bg-[#EBF4FD]">Créer un compte</Link>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
