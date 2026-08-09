"use client"
  import { useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  BellRing,
  Users,
  Briefcase,
  Search,
  MessageSquare,
  ThumbsUp,
  Share2,
  UserPlus,
  Star,
  Calendar,
  TrendingUp,
  Eye,
  FileText,
  CheckCircle2,
  X,
  MoreHorizontal,
  Settings,
  Filter,
  CheckCheck,
  Trash2,
  ExternalLink,
  Clock,
  Globe,
  Hash,
  Megaphone,
  Building2,
  GraduationCap,
  Heart,
  ArrowRight,
  ChevronLeft,
} from "lucide-react"

interface Notification {
  id: string
  type: "connection" | "like" | "comment" | "share" | "job" | "mention" | "event" | "view" | "follow" | "endorsement" | "article" | "birthday"
  read: boolean
  time: string
  user: {
    name: string
    avatar: string
    title: string
  }
  content: string
  action?: string
  link?: string
}

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "connection",
      read: false,
      time: "Il y a 5 min",
      user: {
        name: "Sophie Martin",
        avatar: "/avatars/sophie.jpg",
        title: "Product Designer @ Google"
      },
      content: "a accepté votre invitation",
      action: "Voir le profil"
    },
    {
      id: "2",
      type: "like",
      read: false,
      time: "Il y a 15 min",
      user: {
        name: "Thomas Dubois",
        avatar: "/avatars/thomas.jpg",
        title: "CTO @ TechStart"
      },
      content: "a aimé votre publication",
      action: "Voir la publication"
    },
    {
      id: "3",
      type: "comment",
      read: false,
      time: "Il y a 30 min",
      user: {
        name: "Marie Lefevre",
        avatar: "/avatars/marie.jpg",
        title: "Marketing Manager"
      },
      content: "a commenté votre publication : \"Excellent article, très inspirant !\"",
      action: "Répondre"
    },
    {
      id: "4",
      type: "job",
      read: false,
      time: "Il y a 1h",
      user: {
        name: "TechCorp",
        avatar: "/companies/techcorp.jpg",
        title: "Entreprise"
      },
      content: "recherche un Senior Developer à Paris",
      action: "Voir l'offre"
    },
    {
      id: "5",
      type: "mention",
      read: true,
      time: "Il y a 2h",
      user: {
        name: "Pierre Durand",
        avatar: "/avatars/pierre.jpg",
        title: "Developer Advocate"
      },
      content: "vous a mentionné dans un commentaire",
      action: "Voir le commentaire"
    },
    {
      id: "6",
      type: "event",
      read: true,
      time: "Il y a 3h",
      user: {
        name: "TechConf 2026",
        avatar: "/events/techconf.jpg",
        title: "Événement"
      },
      content: "L'événement \"React Summit\" commence dans 2 jours",
      action: "Voir l'événement"
    },
    {
      id: "7",
      type: "view",
      read: true,
      time: "Il y a 5h",
      user: {
        name: "Anonymous",
        avatar: "/avatars/anonymous.jpg",
        title: "Recruteur"
      },
      content: "3 personnes ont consulté votre profil",
      action: "Voir qui"
    },
    {
      id: "8",
      type: "follow",
      read: true,
      time: "Il y a 8h",
      user: {
        name: "Alice Bernard",
        avatar: "/avatars/alice.jpg",
        title: "UX Researcher"
      },
      content: "s'est abonnée à vos publications",
      action: "Voir le profil"
    },
    {
      id: "9",
      type: "endorsement",
      read: true,
      time: "Il y a 1j",
      user: {
        name: "Jean Dupont",
        avatar: "/avatars/jean.jpg",
        title: "Full Stack Developer"
      },
      content: "a validé votre compétence \"React\"",
      action: "Voir les compétences"
    },
    {
      id: "10",
      type: "birthday",
      read: true,
      time: "Il y a 1j",
      user: {
        name: "Lucie Moreau",
        avatar: "/avatars/lucie.jpg",
        title: "Data Scientist"
      },
      content: "C'est son anniversaire aujourd'hui !",
      action: "Souhaiter un joyeux anniversaire"
    },
    {
      id: "11",
      type: "article",
      read: true,
      time: "Il y a 2j",
      user: {
        name: "LinkedIn News",
        avatar: "/avatars/linkedin-news.jpg",
        title: "Média"
      },
      content: "Les tendances tech de la semaine : IA, Web3, et plus",
      action: "Lire l'article"
    },
    {
      id: "12",
      type: "share",
      read: true,
      time: "Il y a 3j",
      user: {
        name: "Marc Lambert",
        avatar: "/avatars/marc.jpg",
        title: "DevOps Engineer"
      },
      content: "a partagé votre publication",
      action: "Voir le partage"
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "connection": return <UserPlus className="h-5 w-5 text-blue-600" />
      case "like": return <ThumbsUp className="h-5 w-5 text-blue-500" />
      case "comment": return <MessageSquare className="h-5 w-5 text-green-600" />
      case "share": return <Share2 className="h-5 w-5 text-purple-600" />
      case "job": return <Briefcase className="h-5 w-5 text-orange-600" />
      case "mention": return <Hash className="h-5 w-5 text-indigo-600" />
      case "event": return <Calendar className="h-5 w-5 text-red-600" />
      case "view": return <Eye className="h-5 w-5 text-teal-600" />
      case "follow": return <Users className="h-5 w-5 text-pink-600" />
      case "endorsement": return <Star className="h-5 w-5 text-yellow-600" />
      case "article": return <FileText className="h-5 w-5 text-gray-600" />
      case "birthday": return <Heart className="h-5 w-5 text-red-500" />
      default: return <Bell className="h-5 w-5 text-gray-600" />
    }
  }

  const getNotificationBadge = (type: string) => {
    switch (type) {
      case "connection": return "Relation"
      case "like": return "J'aime"
      case "comment": return "Commentaire"
      case "share": return "Partage"
      case "job": return "Emploi"
      case "mention": return "Mention"
      case "event": return "Événement"
      case "view": return "Profil"
      case "follow": return "Abonné"
      case "endorsement": return "Compétence"
      case "article": return "Article"
      case "birthday": return "Anniversaire"
      default: return "Autre"
    }
  }

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const toggleSelect = (id: string) => {
    setSelectedNotifications(prev =>
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    )
  }

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === "unread") return !n.read
    if (activeTab === "read") return n.read
    if (searchTerm) {
      return n.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             n.content.toLowerCase().includes(searchTerm.toLowerCase())
    }
    return true
  })

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </h1>
              {unreadCount > 0 && (
                <Badge variant="destructive" className="rounded-full">
                  {unreadCount} nouvelles
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2" onClick={markAllAsRead}>
                <CheckCheck className="h-4 w-4" />
                Tout marquer comme lu
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <BellRing className="h-4 w-4 mr-2" />
                    Gérer les alertes
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    Paramètres de notification
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Supprimer toutes les notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* Search and Filters */}
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher dans les notifications..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filtrer
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>Toutes les notifications</DropdownMenuItem>
                    <DropdownMenuItem>Relations</DropdownMenuItem>
                    <DropdownMenuItem>Publications</DropdownMenuItem>
                    <DropdownMenuItem>Emplois</DropdownMenuItem>
                    <DropdownMenuItem>Événements</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full rounded-none border-b">
                  <TabsTrigger value="all" className="flex-1 gap-2">
                    Toutes
                    <Badge variant="secondary" className="text-xs">
                      {notifications.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="flex-1 gap-2">
                    Non lues
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                      {unreadCount}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="read" className="flex-1">
                    Lues
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>

          {/* Notifications List */}
          <Card className="border-gray-200 shadow-sm">
            <ScrollArea className="h-[600px]">
              <div className="divide-y divide-gray-100">
                {filteredNotifications.length === 0 ? (
                  <div className="p-12 text-center">
                    <Bell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-500">Aucune notification</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Vous n'avez pas de notifications pour le moment
                    </p>
                  </div>
                ) : (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer group ${
                        !notification.read ? 'bg-blue-50/50 border-l-4 border-l-blue-600' : ''
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={notification.user.avatar} />
                            <AvatarFallback>
                              {notification.user.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                            {getNotificationIcon(notification.type)}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <p className="text-sm">
                                <span className="font-semibold hover:text-blue-600 hover:underline cursor-pointer">
                                  {notification.user.name}
                                </span>
                                {' '}
                                <span className="text-gray-600">{notification.content}</span>
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {getNotificationBadge(notification.type)}
                                </Badge>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {notification.time}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleSelect(notification.id)
                                }}
                              >
                                <CheckCircle2 className={`h-4 w-4 ${
                                  selectedNotifications.includes(notification.id)
                                    ? 'text-blue-600 fill-blue-600'
                                    : 'text-gray-400'
                                }`} />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={(e) => {
                                    e.stopPropagation()
                                    markAsRead(notification.id)
                                  }}>
                                    Marquer comme lu
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    {notification.action}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="text-red-600"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      deleteNotification(notification.id)
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Supprimer
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>

                          {notification.action && (
                            <div className="mt-2 flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full text-xs h-7"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {notification.action}
                                <ArrowRight className="h-3 w-3 ml-1" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </Card>

          {/* Bulk Actions */}
          {selectedNotifications.length > 0 && (
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-3 flex items-center justify-between">
                <span className="text-sm font-medium text-blue-700">
                  {selectedNotifications.length} notification(s) sélectionnée(s)
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <CheckCheck className="h-4 w-4 mr-1" />
                    Marquer comme lu
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Supprimer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}