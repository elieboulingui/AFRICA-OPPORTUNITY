"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, ShieldCheck, Smartphone } from "lucide-react";

export default function SignInPage() {
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
            <h1 className="text-2xl font-semibold">Connexion</h1>
            <p className="text-sm text-[#666666]">Connectez-vous pour accéder à votre tableau de bord professionnel LinkWork.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-semibold text-[#191919]">Adresse e-mail</Label>
              <div className="relative">
                <Mail size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
                <Input id="email" type="email" placeholder="adresse@entreprise.com" className="pl-10" required />
              </div>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-semibold text-[#191919]">Mot de passe</Label>
                <Link href="/forgot-password" className="text-sm text-[#0A66C2] hover:underline">Mot de passe oublié ?</Link>
              </div>
              <div className="relative">
                <Lock size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10" required />
              </div>
            </div>

            <Button type="submit" className="w-full rounded-full bg-[#0A66C2] text-white hover:bg-[#004182]">Se connecter</Button>
          </form>

          <div className="grid gap-3">
            <Button asChild variant="outline" className="w-full rounded-full border-[#0A66C2] px-4 py-3 text-[#0A66C2] hover:bg-[#EBF4FD]">
              <Link href="/otp" className="flex items-center justify-center gap-2">
                <Smartphone size={18} />
                <span>Connexion par code OTP</span>
              </Link>
            </Button>

            <p className="text-center text-sm text-[#666666]">
              Pas encore de compte ? <Link href="/signup" className="font-semibold text-[#0A66C2] hover:underline">Inscription</Link>
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
