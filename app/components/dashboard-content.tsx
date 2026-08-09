import { CalendarDays, Compass, FileText, ImagePlus, Sparkles, Video } from "lucide-react";
import Link from "next/link";
import { Avatar } from "@/app/components/avatar";
import { PostCard } from "@/app/components/post-card";
import { ProfileSummaryCard } from "@/app/components/profile-summary-card";
import { Button } from "@/components/ui/button";
import { newsItems, posts, profileSummary, suggestedPages } from "@/app/lib/mock-data";

export function DashboardContent() {
  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,555px)_320px]">
      <aside className="hidden lg:block">
        <ProfileSummaryCard profile={profileSummary} />
        <div className="mt-4 rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
          <h2 className="text-[15px] font-semibold text-[#191919]">Navigation rapide</h2>
          <div className="mt-3 space-y-2 text-sm text-[#333333]">
            <Link href="/mynetwork" className="flex items-center gap-2 rounded-md px-2 py-2 transition hover:bg-[#F3F2EF]">
              <CalendarDays size={16} className="text-[#0A66C2]" />
              <span>Mon réseau</span>
            </Link>
            <Link href="/groups" className="flex items-center gap-2 rounded-md px-2 py-2 transition hover:bg-[#F3F2EF]">
              <Compass size={16} className="text-[#0A66C2]" />
              <span>Groupes</span>
            </Link>
            <Link href="/events" className="flex items-center gap-2 rounded-md px-2 py-2 transition hover:bg-[#F3F2EF]">
              <CalendarDays size={16} className="text-[#0A66C2]" />
              <span>Événements</span>
            </Link>
            <Link href="/learning" className="flex items-center gap-2 rounded-md px-2 py-2 transition hover:bg-[#F3F2EF]">
              <FileText size={16} className="text-[#0A66C2]" />
              <span>Learning</span>
            </Link>
          </div>
        </div>
      </aside>

      <section className="space-y-4">
        <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
          <div className="flex items-start gap-3">
            <Avatar name="Alicia Laurent" color="bg-gradient-to-br from-blue-600 to-cyan-500" size="md" />
            <Button variant="outline" className="h-12 flex-1 justify-start rounded-full border-[#E0DFDC] bg-[#F3F2EF] px-4 text-left text-sm text-[#666666] hover:bg-[#EBF4FD]">
              Commencer un post...
            </Button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <button className="flex items-center justify-center gap-2 rounded-md border border-[#E0DFDC] px-3 py-2 text-sm font-medium text-[#333333] transition hover:bg-[#F3F2EF]">
              <ImagePlus size={16} className="text-[#0A66C2]" />
              <span>Photo</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border border-[#E0DFDC] px-3 py-2 text-sm font-medium text-[#333333] transition hover:bg-[#F3F2EF]">
              <Video size={16} className="text-[#0A66C2]" />
              <span>Vidéo</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border border-[#E0DFDC] px-3 py-2 text-sm font-medium text-[#333333] transition hover:bg-[#F3F2EF]">
              <CalendarDays size={16} className="text-[#0A66C2]" />
              <span>Événement</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border border-[#E0DFDC] px-3 py-2 text-sm font-medium text-[#333333] transition hover:bg-[#F3F2EF]">
              <FileText size={16} className="text-[#0A66C2]" />
              <span>Article</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-[#E0DFDC] bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
          <p className="text-sm font-medium text-[#191919]">Trier par : Récents</p>
          <Button variant="ghost" className="text-sm text-[#0A66C2] hover:bg-[#EBF4FD]">
            Plus pertinents
          </Button>
        </div>

        {posts.map((post) => (
          <PostCard key={post.author} post={post} />
        ))}

        <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center gap-2 text-[#0A66C2]">
            <Sparkles size={16} />
            <p className="text-sm font-semibold">Publicité native • Recommandé pour vous</p>
          </div>
          <p className="mt-2 text-sm text-[#333333]">Découvrez comment transformer votre présence professionnelle avec des parcours adaptés à votre niveau.</p>
        </div>
      </section>

      <aside className="hidden lg:block space-y-4">
        <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
          <h2 className="text-[16px] font-semibold text-[#191919]">Actualités LinkedIn</h2>
          <ul className="mt-3 space-y-2">
            {newsItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#333333]">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#666666]" />
                <span className="leading-6">{item}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="mt-4 inline-flex text-sm font-medium text-[#666666] hover:text-[#0A66C2]">
            Voir plus
          </a>
        </div>

        <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
          <h2 className="text-[16px] font-semibold text-[#191919]">Ajouter à votre fil</h2>
          <div className="mt-3 space-y-3">
            {suggestedPages.map((page) => (
              <div key={page.name} className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-sm font-semibold text-white ${page.color}`}>
                  {page.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#191919]">{page.name}</p>
                  <p className="text-xs text-[#666666]">{page.followers}</p>
                </div>
                <button className="rounded-full border border-[#0A66C2] px-3 py-1 text-sm font-semibold text-[#0A66C2] transition hover:bg-[#EBF4FD]">
                  S&apos;abonner
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
          <p className="text-sm font-semibold text-[#191919]">Publicité display</p>
          <p className="mt-2 text-sm text-[#666666]">Découvrez des outils pour accélérer votre carrière et élargir votre réseau professionnel.</p>
        </div>
      </aside>
    </div>
  );
}
