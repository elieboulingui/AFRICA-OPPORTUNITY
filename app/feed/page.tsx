"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  ThumbsUp, 
  MessageCircle, 
  Send, 
  MoreHorizontal, 
  Heart, 
  Repeat2,
  Image as ImageIcon,
  Video,
  Calendar,
  Article
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function FeedPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Jean Dupont",
      title: "Senior Developer @ TechCorp",
      content: "🎉 Je viens d'obtenir ma certification AWS Solutions Architect !",
      likes: 245,
      comments: 48,
      shares: 12,
      liked: false,
      time: "Il y a 3 heures"
    },
    {
      id: 2,
      author: "Marie Laurent",
      title: "UX Designer @ DesignStudio",
      content: "Les 5 principes clés pour un design system efficace que j'ai appris après 8 ans d'expérience...",
      likes: 567,
      comments: 123,
      shares: 45,
      liked: true,
      time: "Il y a 5 heures"
    },
    {
      id: 3,
      author: "Thomas Petit",
      title: "Entrepreneur & Investor",
      content: "Après avoir analysé plus de 1000 startups cette année, voici les 3 patterns qui distinguent les succès des échecs...",
      likes: 892,
      comments: 156,
      shares: 78,
      liked: false,
      time: "Il y a 8 heures"
    }
  ])

  const [newPost, setNewPost] = useState("")

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        }
      }
      return post
    }))
  }

  const handleAddPost = () => {
    if (newPost.trim()) {
      const newPostObj = {
        id: posts.length + 1,
        author: "Vous",
        title: "Votre poste",
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
        time: "À l'instant"
      }
      setPosts([newPostObj, ...posts])
      setNewPost("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center h-14">
            <h1 className="text-xl font-bold">Fil d'actualité</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Create Post */}
        <Card className="mb-4 border-gray-200 shadow-sm">
          <CardContent className="pt-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-12 w-12">
                <AvatarFallback>VO</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Commencer un post..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="rounded-full bg-gray-50"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddPost()
                  }}
                />
                <Button onClick={handleAddPost} disabled={!newPost.trim()}>
                  Publier
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" className="gap-2 text-gray-500">
                <ImageIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Photo</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-gray-500">
                <Video className="h-5 w-5 text-green-600" />
                <span className="text-sm">Vidéo</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-gray-500">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="text-sm">Événement</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-gray-500">
                <Article className="h-5 w-5 text-red-600" />
                <span className="text-sm">Article</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-sm hover:text-blue-600 hover:underline cursor-pointer">
                        {post.author}
                      </h3>
                      <p className="text-xs text-gray-500">{post.title}</p>
                      <span className="text-xs text-gray-400">{post.time}</span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-5 w-5 text-gray-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Enregistrer</DropdownMenuItem>
                      <DropdownMenuItem>Masquer ce post</DropdownMenuItem>
                      <DropdownMenuItem>Signaler</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>

              <CardContent className="pb-2">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {post.content}
                </p>
              </CardContent>

              <CardFooter className="flex flex-col gap-2 pb-2 pt-0">
                <div className="flex items-center justify-between w-full text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <div className="flex -space-x-1">
                      <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                        <ThumbsUp className="h-3 w-3 text-white" />
                      </div>
                      <div className="h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                        <Heart className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{post.comments} commentaires</span>
                    <span>{post.shares} partages</span>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between w-full">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex-1 gap-2 ${post.liked ? "text-blue-600" : "text-gray-500"}`}
                    onClick={() => handleLike(post.id)}
                  >
                    <ThumbsUp className={`h-4 w-4 ${post.liked ? "fill-blue-600" : ""}`} />
                    <span>J'aime</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 gap-2 text-gray-500">
                    <MessageCircle className="h-4 w-4" />
                    <span>Commenter</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 gap-2 text-gray-500">
                    <Repeat2 className="h-4 w-4" />
                    <span>Republier</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 gap-2 text-gray-500">
                    <Send className="h-4 w-4" />
                    <span>Envoyer</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
