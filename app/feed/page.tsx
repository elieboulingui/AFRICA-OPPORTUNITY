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
  Newspaper, // ← Changé de Article à Newspaper
  Globe,
  Users,
  Briefcase,
  Bell,
  MessageSquare,
  Search
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
      title: "Senior Developer @ TechCorp | React & Node.js Expert",
      avatar: "JD",
      content: "🎉 Je suis ravi d'annoncer que je viens d'obtenir ma certification AWS Solutions Architect ! Un grand merci à toute l'équipe qui m'a soutenu pendant cette préparation intensive.",
      likes: 245,
      comments: 48,
      shares: 12,
      liked: false,
      time: "Il y a 3 heures",
      showComments: false,
      comments_list: [
        { id: 1, author: "Marie Laurent", content: "Félicitations ! 🎉", time: "2h" },
        { id: 2, author: "Thomas Petit", content: "Bien joué !", time: "1h" }
      ]
    },
    {
      id: 2,
      author: "Marie Laurent",
      title: "UX Designer @ DesignStudio • Speaker • Mentor",
      avatar: "ML",
      content: "Voici les 5 principes clés pour un design system efficace :\n\n1. Cohérence avant créativité\n2. Documenter chaque composant\n3. Impliquer les développeurs dès le début\n4. Versionner comme du code\n5. Tester avec de vrais utilisateurs",
      likes: 567,
      comments: 123,
      shares: 45,
      liked: true,
      time: "Il y a 5 heures",
      showComments: false,
      comments_list: []
    },
    {
      id: 3,
      author: "Thomas Petit",
      title: "Entrepreneur & Investor | Building the future",
      avatar: "TP",
      content: "Après avoir analysé plus de 1000 startups cette année, voici les 3 patterns qui distinguent les succès des échecs :\n\n1. Focus obsessionnel sur un problème réel\n2. Capacité à pivoter rapidement\n3. Culture d'entreprise dès le jour 1",
      likes: 892,
      comments: 156,
      shares: 78,
      liked: false,
      time: "Il y a 8 heures",
      showComments: false,
      comments_list: [
        { id: 1, author: "Sophie Martin", content: "Tellement vrai !", time: "3h" }
      ]
    }
  ])

  const [newPost, setNewPost] = useState("")
  const [commentTexts, setCommentTexts] = useState<{ [key: number]: string }>({})

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
        id: Date.now(),
        author: "Vous",
        title: "Votre poste actuel",
        avatar: "VO",
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
        time: "À l'instant",
        showComments: false,
        comments_list: []
      }
      setPosts([newPostObj, ...posts])
      setNewPost("")
    }
  }

  const toggleComments = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, showComments: !post.showComments }
      }
      return post
    }))
  }

  const handleAddComment = (postId: number) => {
    const commentText = commentTexts[postId] || ""
    if (commentText.trim()) {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments + 1,
            comments_list: [...post.comments_list, {
              id: post.comments_list.length + 1,
              author: "Vous",
              content: commentText,
              time: "À l'instant"
            }]
          }
        }
        return post
      }))
      setCommentTexts({ ...commentTexts, [postId]: "" })
    }
  }

  return (
    <div className="min-h-screen bg-[#F3F2EF]">
      {/* Header LinkedIn */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">in</span>
              </div>
              <div className="relative ml-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher"
                  className="pl-10 pr-4 py-1.5 bg-[#EDF3F8] rounded text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-gray-900">
                <Users className="h-5 w-5" />
                <span className="text-xs">Réseau</span>
              </button>
              <button className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-gray-900">
                <Briefcase className="h-5 w-5" />
                <span className="text-xs">Emplois</span>
              </button>
              <button className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-gray-900">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs">Messages</span>
              </button>
              <button className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-gray-900">
                <Bell className="h-5 w-5" />
                <span className="text-xs">Notifications</span>
              </button>
              <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                <span className="text-sm font-semibold">VO</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Create Post */}
        <Card className="mb-4 border-gray-200 shadow-sm">
          <CardContent className="pt-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-12 w-12">
                <AvatarFallback>VO</AvatarFallback>
              </Avatar>
              <Input
                placeholder="Commencer un post..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddPost()
                }}
                className="flex-1 rounded-full bg-gray-50"
              />
              <Button onClick={handleAddPost} disabled={!newPost.trim()}>
                Publier
              </Button>
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
                <Newspaper className="h-5 w-5 text-red-600" />
                <span className="text-sm">Article</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="border-gray-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-sm hover:text-blue-600 hover:underline cursor-pointer">
                        {post.author}
                      </h3>
                      <p className="text-xs text-gray-500">{post.title}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                        <span>{post.time}</span>
                        <span>•</span>
                        <Globe className="h-3 w-3" />
                      </div>
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
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
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
                    <button onClick={() => toggleComments(post.id)} className="hover:text-blue-600 hover:underline">
                      {post.comments} commentaires
                    </button>
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 gap-2 text-gray-500"
                    onClick={() => toggleComments(post.id)}
                  >
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

                {post.showComments && (
                  <div className="w-full pt-2 space-y-3">
                    <Separator />
                    {post.comments_list.map((comment) => (
                      <div key={comment.id} className="flex gap-2 items-start">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{comment.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">{comment.author}</span>
                            <span className="text-xs text-gray-400">{comment.time}</span>
                          </div>
                          <p className="text-sm text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-2 items-start">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>VO</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 flex gap-2">
                        <Input
                          placeholder="Ajouter un commentaire..."
                          value={commentTexts[post.id] || ""}
                          onChange={(e) => setCommentTexts({ ...commentTexts, [post.id]: e.target.value })}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                          className="flex-1 rounded-full bg-gray-50 text-sm"
                        />
                        <Button size="icon" onClick={() => handleAddComment(post.id)} className="rounded-full h-8 w-8">
                          <Send className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
