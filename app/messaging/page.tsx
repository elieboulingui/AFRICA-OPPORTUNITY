"use client"

import * as React from "react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Send,
  Image,
  Paperclip,
  Smile,
  MoreHorizontal,
  ThumbsUp,
  Phone,
  Share,
  Bookmark,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MessageType {
  id: string
  content: string
  sender: {
    id: string
    name: string
    avatar?: string
    initials: string
    headline?: string
  }
  timestamp: Date
  isRead?: boolean
  reactions?: Array<{
    emoji: string
    count: number
    reacted: boolean
  }>
}

const currentUser = {
  id: "user-1",
  name: "Sophie Martin",
  avatar: "/avatars/sophie.jpg",
  initials: "SM",
  headline: "Senior Product Designer",
}

const contactUser = {
  id: "user-2",
  name: "Thomas Dubois",
  avatar: "/avatars/thomas.jpg",
  initials: "TD",
  headline: "Tech Recruiter at TechCorp",
}

const initialMessages: MessageType[] = [
  {
    id: "1",
    content: "Bonjour Sophie ! J'ai vu votre profil et votre expérience chez DesignStudio m'a beaucoup impressionné.",
    sender: contactUser,
    timestamp: new Date(Date.now() - 3600000 * 2),
    reactions: [{ emoji: "👍", count: 1, reacted: false }],
  },
  {
    id: "2",
    content: "Bonjour Thomas ! Merci pour votre message. Je suis ouverte à de nouvelles opportunités.",
    sender: currentUser,
    timestamp: new Date(Date.now() - 3600000),
    isRead: true,
  },
  {
    id: "3",
    content: "Super ! Il s'agit d'un poste en CDI à Paris. Package : 65-80k€, stock options, mutuelle premium.",
    sender: contactUser,
    timestamp: new Date(Date.now() - 1800000),
    reactions: [{ emoji: "❤️", count: 1, reacted: true }],
  },
]

export function LinkedInMessaging() {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: MessageType = {
      id: Date.now().toString(),
      content: newMessage,
      sender: currentUser,
      timestamp: new Date(),
      isRead: false,
    }

    setMessages([...messages, message])
    setNewMessage("")

    setIsTyping(true)
    setTimeout(() => {
      const reply: MessageType = {
        id: (Date.now() + 1).toString(),
        content: "Excellent ! Seriez-vous disponible pour un appel cette semaine ?",
        sender: contactUser,
        timestamp: new Date(),
        reactions: [],
      }
      setMessages(prev => [...prev, reply])
      setIsTyping(false)
    }, 3000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleReaction = (messageId: string, emoji: string) => {
    setMessages(prev =>
      prev.map(msg => {
        if (msg.id !== messageId) return msg
        
        const existingReaction = msg.reactions?.find(r => r.emoji === emoji)
        if (existingReaction) {
          return {
            ...msg,
            reactions: msg.reactions?.map(r =>
              r.emoji === emoji
                ? { ...r, count: r.reacted ? r.count - 1 : r.count + 1, reacted: !r.reacted }
                : r
            ).filter(r => r.count > 0),
          }
        }
        
        return {
          ...msg,
          reactions: [...(msg.reactions || []), { emoji, count: 1, reacted: true }],
        }
      })
    )
  }

const formatTime = (date: Date) => {
  const diff = new Date().getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return "À l'instant"
  if (minutes < 60) return `Il y a ${minutes} min`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `Il y a ${hours}h`
  return date.toLocaleDateString("fr-FR", { month: "short", day: "numeric" })
}

  return (
    <div className="flex h-screen flex-col bg-white">
      {/* Header */}
      <div className="border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={contactUser.avatar} />
            <AvatarFallback>{contactUser.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="font-semibold text-sm">{contactUser.name}</h2>
            <p className="text-xs text-gray-500">{contactUser.headline}</p>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Phone className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                <DropdownMenuItem>Marquer comme non lu</DropdownMenuItem>
                <DropdownMenuItem>Mettre en sourdine</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Bloquer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => {
          const isCurrentUser = message.sender.id === currentUser.id
          
          return (
            <div key={message.id} className="space-y-2">
              {message.id === messages[0].id && (
                <div className="flex items-center gap-3 mb-4">
                  <Separator className="flex-1" />
                  <span className="text-xs text-gray-500">
                    {message.timestamp.toLocaleDateString("fr-FR", { weekday: "long", month: "long", day: "numeric" })}
                  </span>
                  <Separator className="flex-1" />
                </div>
              )}
              
              <div className={`flex gap-3 ${isCurrentUser ? "flex-row-reverse" : ""}`}>
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarImage src={message.sender.avatar} />
                  <AvatarFallback>{message.sender.initials}</AvatarFallback>
                </Avatar>
                
                <div className={`max-w-[70%] space-y-1 ${isCurrentUser ? "items-end" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{message.sender.name}</span>
                    <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                  </div>
                  
                  <div className={`rounded-2xl px-4 py-2 text-sm ${
                    isCurrentUser ? "bg-blue-600 text-white" : "bg-white border"
                  }`}>
                    {message.content}
                  </div>

                  {/* Réactions */}
                  {message.reactions && message.reactions.length > 0 && (
                    <div className="flex items-center gap-1">
                      {message.reactions.map((reaction) => (
                        <button
                          key={reaction.emoji}
                          onClick={() => handleReaction(message.id, reaction.emoji)}
                          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${
                            reaction.reacted
                              ? "border-blue-600 bg-blue-50 text-blue-600"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          <span>{reaction.emoji}</span>
                          <span>{reaction.count}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className={`flex items-center gap-1 ${isCurrentUser ? "flex-row-reverse" : ""}`}>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleReaction(message.id, "👍")}>
                      <ThumbsUp className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Share className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Bookmark className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {isTyping && (
          <div className="flex items-center gap-2 pl-11">
            <div className="flex gap-1">
              <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "-0.3s" }} />
              <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "-0.15s" }} />
              <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
            </div>
            <span className="text-xs text-gray-500">{contactUser.name} écrit...</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t bg-white p-4">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Écrivez un message..."
              className="min-h-[60px] resize-none bg-gray-50"
              rows={2}
            />
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Image className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Smile className="h-4 w-4" />
            </Button>
            <Button onClick={handleSendMessage} disabled={!newMessage.trim()} size="icon" className="h-9 w-9">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Appuyez sur Entrée pour envoyer, Maj+Entrée pour un saut de ligne
        </p>
      </div>
    </div>
  )
}

export default LinkedInMessaging