"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  SendIcon,
  ImageIcon,
  PaperclipIcon,
  SmileIcon,
  MoreHorizontalIcon,
  ThumbsUpIcon,
  MessageCircleIcon,
  ShareIcon,
  BookmarkIcon,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

// Types pour les messages
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

// Données de démonstration
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
    content: "Bonjour Sophie ! J'ai vu votre profil et votre expérience chez DesignStudio m'a beaucoup impressionné. Nous recherchons justement un Senior Product Designer pour rejoindre notre équipe.",
    sender: contactUser,
    timestamp: new Date(Date.now() - 3600000 * 2),
    reactions: [
      { emoji: "👍", count: 1, reacted: false },
    ],
  },
  {
    id: "2",
    content: "Bonjour Thomas ! Merci pour votre message. Je suis effectivement ouverte à de nouvelles opportunités. Pouvez-vous m'en dire plus sur le poste et l'équipe ?",
    sender: currentUser,
    timestamp: new Date(Date.now() - 3600000),
    isRead: true,
  },
  {
    id: "3",
    content: "Bien sûr ! Il s'agit d'un poste en CDI dans notre bureau de Paris. L'équipe design compte actuellement 8 personnes et nous travaillons sur des projets innovants dans la fintech. Le package comprend un salaire compétitif entre 65-80k€ selon expérience, des stock options, et une mutuelle premium.",
    sender: contactUser,
    timestamp: new Date(Date.now() - 1800000),
    reactions: [
      { emoji: "❤️", count: 1, reacted: true },
    ],
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

    // Simuler une réponse
    setIsTyping(true)
    setTimeout(() => {
      const reply: MessageType = {
        id: (Date.now() + 1).toString(),
        content: "Excellent ! Je vous envoie la fiche de poste détaillée par email. Seriez-vous disponible pour un premier appel cette semaine ?",
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
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    
    if (minutes < 1) return "À l'instant"
    if (minutes < 60) return `Il y a ${minutes} min`
    
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `Il y a ${hours}h`
    
    return date.toLocaleDateString("fr-FR", {
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* En-tête de la conversation */}
      <div className="border-b bg-card px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={contactUser.avatar} />
            <AvatarFallback>{contactUser.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="font-semibold text-foreground">{contactUser.name}</h2>
            <p className="text-xs text-muted-foreground">{contactUser.headline}</p>
          </div>
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MessageCircleIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Appel vidéo</p>
              </TooltipContent>
            </Tooltip>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                <DropdownMenuItem>Marquer comme non lu</DropdownMenuItem>
                <DropdownMenuItem>Mettre en sourdine</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Bloquer
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Zone des messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
        {messages.map((message) => {
          const isCurrentUser = message.sender.id === currentUser.id
          
          return (
            <div key={message.id} className="space-y-1">
              {/* Groupe de date */}
              {message.id === messages[0].id && (
                <div className="flex items-center gap-3 mb-4">
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted-foreground font-medium">
                    {message.timestamp.toLocaleDateString("fr-FR", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Separator className="flex-1" />
                </div>
              )}
              
              <Message
                className={cn(
                  "gap-3",
                  isCurrentUser && "flex-row-reverse"
                )}
              >
                <MessageAvatar className="mt-1">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={message.sender.avatar} />
                    <AvatarFallback className="text-xs">
                      {message.sender.initials}
                    </AvatarFallback>
                  </Avatar>
                </MessageAvatar>
                
                <MessageContent className={cn(
                  "max-w-[70%] space-y-2",
                  isCurrentUser && "items-end"
                )}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      {message.sender.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  
                  <Bubble
                    variant={isCurrentUser ? "sent" : "received"}
                  >
                    <BubbleContent className="text-sm">
                      {message.content}
                    </BubbleContent>
                  </Bubble>

                  {/* Réactions */}
                  {message.reactions && message.reactions.length > 0 && (
                    <div className="flex items-center gap-1">
                      {message.reactions.map((reaction) => (
                        <button
                          key={reaction.emoji}
                          onClick={() => handleReaction(message.id, reaction.emoji)}
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs transition-colors hover:bg-accent",
                            reaction.reacted
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-foreground"
                          )}
                        >
                          <span>{reaction.emoji}</span>
                          <span className="font-medium">{reaction.count}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Actions sur le message */}
                  <div className={cn(
                    "flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
                    isCurrentUser && "flex-row-reverse"
                  )}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => handleReaction(message.id, "👍")}
                        >
                          <ThumbsUpIcon className="h-3.5 w-3.5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>J'aime</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => {
                            navigator.clipboard.writeText(message.content)
                          }}
                        >
                          <ShareIcon className="h-3.5 w-3.5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copier</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <BookmarkIcon className="h-3.5 w-3.5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enregistrer</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </MessageContent>
              </Message>
            </div>
          )
        })}

        {/* Indicateur de frappe */}
        {isTyping && (
          <div className="flex items-center gap-2 pl-11">
            <div className="flex gap-1">
              <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:-0.3s]" />
              <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:-0.15s]" />
              <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40" />
            </div>
            <span className="text-xs text-muted-foreground">
              {contactUser.name} écrit...
            </span>
          </div>
        )}
      </div>

      {/* Zone de saisie */}
      <div className="border-t bg-card p-4">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Écrivez un message..."
              className="min-h-[60px] resize-none bg-muted/50"
              rows={2}
            />
          </div>
          
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <PaperclipIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Joindre un fichier</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Envoyer une image</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <SmileIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Émojis</p>
              </TooltipContent>
            </Tooltip>
            
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              size="icon"
              className="h-9 w-9"
            >
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <p className="mt-2 text-xs text-muted-foreground">
          Appuyez sur Entrée pour envoyer, Maj+Entrée pour un saut de ligne
        </p>
      </div>
    </div>
  )
}