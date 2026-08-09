import Link from "next/link";
import { Avatar } from "./avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { profileSummary } from "@/app/lib/mock-data";

interface ProfileSummaryCardProps {
  profile: typeof profileSummary;
}

export function ProfileSummaryCard({ profile }: ProfileSummaryCardProps) {
  return (
    <Card className="overflow-hidden border-[#E0DFDC] bg-white shadow-sm">
      <div className="h-16 bg-gradient-to-r from-[#0A66C2] to-[#70B5F9]" />
      <div className="px-4 pb-4">
        <div className="-mt-7 flex justify-center">
          <Avatar name={profile.name} color="bg-gradient-to-br from-[#0A66C2] to-[#70B5F9]" size="lg" className="border-4 border-white" />
        </div>
        <div className="mt-3 text-center">
          <p className="text-[16px] font-semibold text-[#191919]">{profile.name}</p>
          <p className="mt-1 text-sm text-[#666666]">{profile.title}</p>
        </div>
        <div className="mt-4 space-y-2 border-t border-[#E0DFDC] pt-4 text-sm text-[#333333]">
          <div className="flex items-center justify-between">
            <span className="text-[#666666]">Qui a vu votre profil</span>
            <span className="font-semibold text-[#0A66C2]">{profile.views}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#666666]">Vues de votre post</span>
            <span className="font-semibold text-[#0A66C2]">{profile.posts}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#666666]">Relations</span>
            <span className="font-semibold text-[#191919]">{profile.connections}</span>
          </div>
        </div>
        <Button asChild variant="link" className="mt-4 h-auto p-0 text-sm font-medium text-[#0A66C2]">
          <Link href="#">Mes éléments sauvegardés</Link>
        </Button>
      </div>
    </Card>
  );
}
