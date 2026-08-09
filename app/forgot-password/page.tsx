"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/reset-password");
  }

  return (
    <div className="min-h-screen bg-[#EEF4FF] text-[#191919]">
      <main className="mx-auto flex min-h-screen max-w-[1128px] items-center justify-center px-4 py-16">
        <Card className="w-full max-w-xl space-y-6 rounded-[24px] border border-[#E0DFDC] bg-white p-8 shadow-sm">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A66C2] text-white">
              <Mail size={24} />
            </div>
            <h1 className="text-2xl font-semibold">Mot de passe oublié</h1>
            <p className="text-sm text-[#666666]">Entrez votre adresse e-mail pour recevoir un lien de réinitialisation.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-semibold text-[#191919]">Adresse e-mail</Label>
              <div className="relative">
                <Mail size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
                <Input id="email" type="email" placeholder="adresse@entreprise.com" className="pl-10" required />
              </div>
            </div>

            <Button type="submit" className="w-full rounded-full bg-[#0A66C2] text-white hover:bg-[#004182]">Envoyer le lien</Button>
          </form>

          <div className="flex items-center justify-center gap-2 text-sm text-[#666666]">
            <ArrowLeft size={16} className="text-[#0A66C2]" />
            <Link href="/signin" className="font-semibold text-[#0A66C2] hover:underline">Retour à la connexion</Link>
          </div>
        </Card>
      </main>
    </div>
  );
}
