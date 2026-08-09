import { Bookmark, MessageCircle, Repeat2, ThumbsUp } from "lucide-react";
import { Avatar } from "./avatar";
import type { PostData } from "@/app/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: PostData;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="rounded-lg border-[#E0DFDC] bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <Avatar name={post.author} color={`bg-gradient-to-br ${post.avatarColor}`} size="md" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-[15px] font-semibold text-[#191919]">{post.author}</p>
            <Badge variant="secondary" className="rounded-full bg-[#EBF4FD] text-[#0A66C2]">{post.category ?? "Actualité"}</Badge>
          </div>
          <p className="text-sm text-[#666666]">{post.title}</p>
          <p className="text-sm text-[#666666]">{post.time}</p>
        </div>
      </div>

      <p className="mt-4 text-[15px] leading-7 text-[#333333]">{post.content}</p>

      <img src={post.image} alt="Illustration du post" className="mt-4 h-56 w-full rounded-lg object-cover" />

      <div className="mt-4 flex items-center justify-between text-sm text-[#666666]">
        <p>
          {post.likes} • {post.comments} commentaires • {post.shares} partages
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[#E0DFDC] pt-3 text-sm font-medium text-[#666666]">
        <Button variant="ghost" className="flex items-center gap-2 rounded-md px-3 py-2">
          <ThumbsUp size={16} />
          <span>J’aime</span>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2 rounded-md px-3 py-2">
          <MessageCircle size={16} />
          <span>Commenter</span>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2 rounded-md px-3 py-2">
          <Repeat2 size={16} />
          <span>Republier</span>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2 rounded-md px-3 py-2">
          <Bookmark size={16} />
          <span>Envoyer</span>
        </Button>
      </div>
    </Card>
  );
}
