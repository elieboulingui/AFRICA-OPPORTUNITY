import { Bookmark } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  initials: string;
  color: string;
}

export function JobCard({ title, company, location, type, posted, initials, color }: JobCardProps) {
  return (
    <Card className="flex items-start gap-4 rounded-none border-0 border-b border-[#E0DFDC] bg-white px-4 py-4 shadow-none transition duration-150 ease-in-out hover:bg-[#F9FAFB] last:border-b-0">
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-lg font-semibold text-white ${color}`}>
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <Link href="#" className="text-[16px] font-semibold text-[#0A66C2] hover:underline">
          {title}
        </Link>
        <p className="mt-1 text-[14px] text-[#333333]">{company}</p>
        <p className="mt-1 text-[13px] text-[#666666]">{location}</p>
        <div className="mt-2 flex items-center gap-2 text-[12px] text-[#666666]">
          <span>{type}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#666666]" />
          <span>{posted}</span>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="rounded-full text-[#666666] hover:bg-[#F3F2EF] hover:text-[#0A66C2]">
        <Bookmark size={20} />
      </Button>
    </Card>
  );
}
