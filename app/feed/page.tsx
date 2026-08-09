"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, UserPlus, ThumbsUp, MessageSquare, Briefcase, Eye } from "lucide-react"

export default function NotificationsPage() {
  const [notifications] = useState([
    { id: 1, type: "connection", name: "Sophie Martin", content: "a accepté votre invitation", time: "5 min", read: false, icon: UserPlus },
    { id: 2, type: "like", name: "Thomas Dubois", content: "a aimé votre publication", time: "15 min", read: false, icon: ThumbsUp },
    { id: 3, type: "comment", name: "Marie Lefevre", content: "a commenté votre publication", time: "30 min", read: true, icon: MessageSquare },
    { id: 4, type: "job", name: "TechCorp", content: "recherche un Senior Developer", time: "1h", read: true, icon: Briefcase },
    { id: 5, type: "view", name: "Anonymous", content: "3 personnes ont consulté votre profil", time: "5h", read: true, icon: Eye },
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Bell className="h-5 w-5" />Notifications
          </h1>
          {unreadCount > 0 && <Badge variant="destructive">{unreadCount} nouvelles</Badge>}
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Card>
          <CardContent className="p-0">
            <Tabs defaultValue="all">
              <TabsList className="w-full rounded-none">
                <TabsTrigger value="all" className="flex-1">Toutes</TabsTrigger>
                <TabsTrigger value="unread" className="flex-1">Non lues ({unreadCount})</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <div className="divide-y">
            {notifications.map((notif) => (
              <div key={notif.id} className={`p-4 hover:bg-gray-50 flex items-start gap-3 ${!notif.read ? 'bg-blue-50' : ''}`}>
                <Avatar>
                  <AvatarFallback>{notif.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{notif.name}</span> {notif.content}
                  </p>
                  <span className="text-xs text-gray-400">{notif.time}</span>
                </div>
                <notif.icon className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, UserPlus, ThumbsUp, MessageSquare, Briefcase, Eye } from "lucide-react"

export default function NotificationsPage() {
  const [notifications] = useState([
    { id: 1, type: "connection", name: "Sophie Martin", content: "a accepté votre invitation", time: "5 min", read: false, icon: UserPlus },
    { id: 2, type: "like", name: "Thomas Dubois", content: "a aimé votre publication", time: "15 min", read: false, icon: ThumbsUp },
    { id: 3, type: "comment", name: "Marie Lefevre", content: "a commenté votre publication", time: "30 min", read: true, icon: MessageSquare },
    { id: 4, type: "job", name: "TechCorp", content: "recherche un Senior Developer", time: "1h", read: true, icon: Briefcase },
    { id: 5, type: "view", name: "Anonymous", content: "3 personnes ont consulté votre profil", time: "5h", read: true, icon: Eye },
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Bell className="h-5 w-5" />Notifications
          </h1>
          {unreadCount > 0 && <Badge variant="destructive">{unreadCount} nouvelles</Badge>}
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Card>
          <CardContent className="p-0">
            <Tabs defaultValue="all">
              <TabsList className="w-full rounded-none">
                <TabsTrigger value="all" className="flex-1">Toutes</TabsTrigger>
                <TabsTrigger value="unread" className="flex-1">Non lues ({unreadCount})</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <div className="divide-y">
            {notifications.map((notif) => (
              <div key={notif.id} className={`p-4 hover:bg-gray-50 flex items-start gap-3 ${!notif.read ? 'bg-blue-50' : ''}`}>
                <Avatar>
                  <AvatarFallback>{notif.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{notif.name}</span> {notif.content}
                  </p>
                  <span className="text-xs text-gray-400">{notif.time}</span>
                </div>
                <notif.icon className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
