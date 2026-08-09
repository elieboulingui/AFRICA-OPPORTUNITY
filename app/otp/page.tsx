"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Mail } from "lucide-react";

export default function OtpPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newCode = [...code];
    pastedData.split("").forEach((char, i) => {
      if (i < 6) newCode[i] = char;
    });
    setCode(newCode);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      router.push("/dashboard");
    }
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
              
              <div className="flex justify-center gap-2">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="h-14 w-12 rounded-lg text-center text-lg font-semibold"
                    required
                  />
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full rounded-full bg-[#0A66C2] text-white hover:bg-[#004182]">
              Valider le code
            </Button>
          </form>

          <div className="text-center text-sm text-[#666666]">
            <p>Vous n'avez pas reçu de code ? <Link href="/signin" className="font-semibold text-[#0A66C2] hover:underline">Retour à la connexion</Link></p>
          </div>
        </Card>
      </main>
    </div>
  );
}