import { Avatar } from "./avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ConnectionCardProps {
  name: string;
  title: string;
  initials: string;
  color: string;
  coverClass: string;
}

export function ConnectionCard({ name, title, initials, color, coverClass }: ConnectionCardProps) {
  return (
    <Card className="overflow-hidden border-[#E0DFDC] bg-white shadow-sm">
      <div className={`h-20 bg-gradient-to-r ${coverClass}`} />
      <div className="flex flex-col items-center px-4 pb-4">
        <div className="-mt-9">
          <Avatar name={initials} color={color} size="lg" className="border-2 border-white" />
        </div>
        <p className="mt-3 text-[15px] font-semibold text-[#191919]">{name}</p>
        <p className="mt-1 text-center text-sm text-[#666666] line-clamp-2">{title}</p>
        <Button variant="outline" className="mt-4 w-full rounded-full border-[#0A66C2] px-3 py-2 text-sm font-semibold text-[#0A66C2] hover:bg-[#EBF4FD]">
          Se connecter
        </Button>
      </div>
    </Card>
  );
}
