import { Avatar as ShadcnAvatar, AvatarFallback } from "@/components/ui/avatar";

interface AvatarProps {
  name: string;
  color: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Avatar({ name, color, size = "md", className = "" }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const sizeClasses = {
    sm: "h-10 w-10 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-14 w-14 text-lg",
  };

  return (
    <ShadcnAvatar className={`border border-white/70 shadow-sm ${sizeClasses[size]} ${className}`}>
      <AvatarFallback className={`flex items-center justify-center rounded-full font-semibold text-white ${color}`}>
        {initials}
      </AvatarFallback>
    </ShadcnAvatar>
  );
}
