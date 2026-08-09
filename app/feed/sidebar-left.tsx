"use client"

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Bookmark,
  Users,
  Calendar,
  Clock,
  Briefcase,
  Hash,
  GraduationCap,
  ChevronDown,
} from "lucide-react"

export function SidebarLeft() {
  const recentHashtags = ["#tech", "#design", "#startup", "#innovation", "#leadership"]
  const groups = [
    { name: "Designers UX", members: "12,345", icon: Users },
    { name: "Développeurs React", members: "8,920", icon: Briefcase },
    { name: "Startup France", members: "15,678", icon: Hash },
  ]

  const events = [
    { name: "Tech Conference 2026", date: "15 Sept", icon: Calendar },
    { name: "Design Meetup", date: "22 Sept", icon: Users },
  ]

  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card className="border-gray-200 shadow-sm overflow-hidden">
        <div className="relative h-20 bg-gradient-to-r from-blue-500 to-purple-600">
          <Avatar className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-16 w-16 border-4 border-white shadow-lg">
            <AvatarImage src="/avatars/current-user.jpg" />
            <AvatarFallback>VO</AvatarFallback>
          </Avatar>
        </div>
        <CardContent className="pt-8 pb-4 text-center">
          <h3 className="font-semibold text-base hover:text-blue-600 hover:underline cursor-pointer">
            Votre Nom
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Développeur Full Stack | React & Node.js
          </p>
          <div className="mt-3 pt-3 border-t space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Vues du profil</span>
              <span className="text-blue-600 font-semibold">124</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Impressions du post</span>
              <span className="text-blue-600 font-semibold">85</span>
            </div>
          </div>
          <Separator className="my-3" />
          <Button variant="ghost" size="sm" className="w-full text-xs">
            <Bookmark className="h-4 w-4 mr-2" />
            Éléments enregistrés
          </Button>
        </CardContent>
      </Card>

      {/* Groups */}
      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase">Groupes</h3>
            <Button variant="ghost" size="sm" className="h-7 text-xs">
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-2">
            {groups.map((group) => (
              <div
                key={group.name}
                className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <div className="h-8 w-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <group.icon className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{group.name}</p>
                  <p className="text-xs text-gray-500">{group.members} membres</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="w-full text-blue-600 text-xs mt-2">
            Voir plus
          </Button>
        </CardContent>
      </Card>

      {/* Events */}
      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase">Événements</h3>
            <Button variant="ghost" size="sm" className="h-7 text-xs">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-2">
            {events.map((event) => (
              <div
                key={event.name}
                className="flex items-start gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <div className="h-8 w-8 bg-green-50 rounded-lg flex items-center justify-center">
                  <event.icon className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{event.name}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Hashtags */}
      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Hashtags récents</h3>
          <div className="flex flex-wrap gap-2">
            {recentHashtags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
