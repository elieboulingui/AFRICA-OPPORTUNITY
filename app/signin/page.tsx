"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User, ShieldCheck } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#EEF4FF] text-[#191919]">
      <main className="mx-auto flex min-h-screen max-w-[1128px] items-center justify-center px-4 py-16">
        <Card className="w-full max-w-xl space-y-6 rounded-[24px] border border-[#E0DFDC] bg-white p-8 shadow-sm">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A66C2] text-white">
              <ShieldCheck size={24} />
            </div>
            <h1 className="text-2xl font-semibold">Inscription</h1>
            <p className="text-sm text-[#666666]">Créez votre compte LinkWork et rejoignez votre réseau professionnel.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-semibold text-[#191919]">Nom complet</Label>
              <div className="relative">
                <User size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
                <Input id="name" type="text" placeholder="Jean Dupont" className="pl-10" required />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-semibold text-[#191919]">Adresse e-mail</Label>
              <div className="relative">
                <Mail size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
                <Input id="email" type="email" placeholder="adresse@entreprise.com" className="pl-10" required />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-sm font-semibold text-[#191919]">Mot de passe</Label>
              <div className="relative">
                <Lock size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10" required />
              </div>
            </div>

            <Button type="submit" className="w-full rounded-full bg-[#0A66C2] text-white hover:bg-[#004182]">S'inscrire</Button>
          </form>

          <p className="text-center text-sm text-[#666666]">
            Déjà un compte ? <Link href="/signin" className="font-semibold text-[#0A66C2] hover:underline">Connexion</Link>
          </p>
        </Card>
      </main>
    </div>
  );
}