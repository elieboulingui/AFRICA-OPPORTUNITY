"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CreatePost } from "@/components/feed/create-post"
import { PostCard } from "@/components/feed/post-card"
import { SidebarLeft } from "@/components/feed/sidebar-left"
import { SidebarRight } from "@/components/feed/sidebar-right"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Clock,
  TrendingUp,
  Star,
  Filter,
  SortAsc,
  Hash,
  Bell,
  MessageSquare,
  Briefcase,
  Grid,
} from "lucide-react"

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState("top")

  const posts = [
    {
      author: {
        name: "Jean Dupont",
        title: "Senior Developer @ TechCorp | React & Node.js Expert",
        avatar: "/avatars/user1.jpg",
        time: "Il y a 3 heures",
      },
      content: "🎉 Je suis ravi d'annoncer que je viens d'obtenir ma certification AWS Solutions Architect ! Un grand merci à toute l'équipe qui m'a soutenu pendant cette préparation intensive. N'hésitez pas à me contacter si vous avez des questions sur le parcours de certification ! 💪 #AWS #CloudComputing #Certification",
      image: "/posts/certification.jpg",
      likes: 245,
      comments: 48,
      shares: 12,
      liked: false,
    },
    {
      author: {
        name: "Marie Laurent",
        title: "UX Designer @ DesignStudio • Speaker • Mentor",
        avatar: "/avatars/user2.jpg",
        time: "Il y a 5 heures",
      },
      content: "Voici les 5 principes clés pour un design system efficace que j'ai appris après 8 ans d'expérience :\n\n1. Cohérence avant créativité\n2. Documenter chaque composant\n3. Impliquer les développeurs dès le début\n4. Versionner comme du code\n5. Tester avec de vrais utilisateurs\n\nQu'en pensez-vous ? Quels principes ajouteriez-vous ? 🎨 #DesignSystem #UXDesign #BestPractices",
      likes: 567,
      comments: 123,
      shares: 45,
      liked: true,
    },
    {
      author: {
        name: "Thomas Petit",
        title: "Entrepreneur & Investor | Building the future of work",
        avatar: "/avatars/user3.jpg",
        time: "Il y a 8 heures",
      },
      content: "🔍 Après avoir analysé plus de 1000 startups cette année, voici les 3 patterns qui distinguent les succès des échecs :\n\n1. Focus obsessionnel sur un problème réel\n2. Capacité à pivoter rapidement\n3. Culture d'entreprise dès le jour 1\n\nLes idées ne valent rien sans exécution. La persévérance bat le talent quand le talent ne persévère pas.",
      likes: 892,
      comments: 156,
      shares: 78,
      liked: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">in</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Users className="h-4 w-4" />
                  <span>Réseau</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Emplois</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                Essai Premium gratuit
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20">
              <SidebarLeft />
            </div>
          </aside>

          {/* Main Feed */}
          <div className="col-span-12 lg:col-span-6">
            {/* Feed Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">Fil d'actualité</h1>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filtres</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <SortAsc className="h-4 w-4" />
                    <span className="hidden sm:inline">Trier</span>
                  </Button>
                </div>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="top" className="gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="hidden sm:inline">Top</span>
                  </TabsTrigger>
                  <TabsTrigger value="recent" className="gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="hidden sm:inline">Récents</span>
                  </TabsTrigger>
                  <TabsTrigger value="featured" className="gap-2">
                    <Star className="h-4 w-4" />
                    <span className="hidden sm:inline">À la une</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Create Post */}
            <CreatePost />

            {/* Posts Feed */}
            <div className="space-y-4">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-6">
              <Button variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Charger plus de publications
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20">
              <SidebarRight />
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
