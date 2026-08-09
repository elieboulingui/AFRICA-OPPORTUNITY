"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Image as ImageIcon,
  Video,
  Calendar,
  Article,
  Users,
  Plus,
  Globe,
  Smile,
  MapPin,
  Send,
} from "lucide-react"

export function CreatePost() {
  const [isOpen, setIsOpen] = useState(false)
  const [postContent, setPostContent] = useState("")

  return (
    <Card className="mb-4 border-gray-200 shadow-sm">
      <CardContent className="pt-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
            <AvatarImage src="/avatars/current-user.jpg" />
            <AvatarFallback>VO</AvatarFallback>
          </Avatar>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex-1 justify-start text-gray-400 rounded-full h-12 border-gray-300 hover:bg-gray-50"
              >
                Commencer un post...
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0 gap-0">
              <DialogHeader className="px-6 pt-4 pb-2">
                <DialogTitle className="text-center">Créer un post</DialogTitle>
              </DialogHeader>
              <div className="px-6 py-2">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/avatars/current-user.jpg" />
                    <AvatarFallback>VO</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">Votre Nom</p>
                    <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                      <Globe className="h-3 w-3" />
                      Tout le monde
                    </Button>
                  </div>
                </div>
                <Textarea
                  placeholder="Que voulez-vous partager ?"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="min-h-[120px] border-0 p-0 text-base resize-none focus-visible:ring-0"
                />
                <div className="flex items-center justify-between py-3 border-t">
                  <span className="text-sm font-semibold">Ajouter à votre post</span>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-blue-600 hover:bg-blue-50">
                      <ImageIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-green-600 hover:bg-green-50">
                      <Video className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-purple-600 hover:bg-purple-50">
                      <Calendar className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-orange-600 hover:bg-orange-50">
                      <Article className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-pink-600 hover:bg-pink-50">
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <Button
                  className="w-full rounded-full mt-2"
                  disabled={!postContent.trim()}
                  onClick={() => {
                    // Handle post creation
                    setIsOpen(false)
                    setPostContent("")
                  }}
                >
                  Publier
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center justify-between">
          <Button variant="ghost" className="flex-1 gap-2 text-gray-500 hover:bg-gray-50">
            <ImageIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Photo</span>
          </Button>
          <Button variant="ghost" className="flex-1 gap-2 text-gray-500 hover:bg-gray-50">
            <Video className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">Vidéo</span>
          </Button>
          <Button variant="ghost" className="flex-1 gap-2 text-gray-500 hover:bg-gray-50">
            <Calendar className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Événement</span>
          </Button>
          <Button variant="ghost" className="flex-1 gap-2 text-gray-500 hover:bg-gray-50">
            <Article className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium">Article</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
