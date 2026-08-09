"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ShieldCheck, Mail } from "lucide-react";

export default function OtpPage() {
  const [code, setCode] = useState("");
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
            <h1 className="text-2xl font-semibold">Connexion OTP</h1>
            <p className="text-sm text-[#666666]">Saisissez le code reçu par e-mail ou SMS pour accéder à votre compte LinkWork.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#191919]">
                <Mail size={16} />
                <span>Code de vérification</span>
              </div>
              <InputOTP value={code} onChange={(value) => setCode(value)} className="rounded-lg border border-[#E0DFDC] bg-transparent p-2">
                <InputOTPGroup className="gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <InputOTPSlot key={index} index={index} className="h-14 w-12 rounded-lg text-center text-lg font-semibold" />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button type="submit" className="w-full rounded-full bg-[#0A66C2] text-white hover:bg-[#004182]">Valider le code</Button>
          </form>

          <div className="text-center text-sm text-[#666666]">
            <p>Vous n'avez pas reçu de code ? <Link href="/signin" className="font-semibold text-[#0A66C2] hover:underline">Retour à la connexion</Link></p>
          </div>
        </Card>
      </main>
    </div>
  );
}
