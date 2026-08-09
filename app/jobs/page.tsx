"use client"

import { useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Search, MapPin, Briefcase, DollarSign, Clock, Filter, X,
  SlidersHorizontal, Building2, Users, GraduationCap, Bookmark,
  Bell, BellRing, Mail, Smartphone, Settings, Zap, Star,
  TrendingUp, Eye, Target, ArrowUp, ArrowDown, ExternalLink,
  Share2, MoreHorizontal, Compass, Grid, List, ArrowUpDown, Plus, Trash2,
} from "lucide-react"

interface Job {
  id: string
  title: string
  company: string
  companyLogo: string
  location: string
  type: string
  salary: string
  posted: string
  description: string
  skills: string[]
  applicants: number
  promoted?: boolean
  easyApply?: boolean
}

function JobCard({ job }: { job: Job }) {
  const [isSaved, setIsSaved] = useState(false)
  const [isApplied, setIsApplied] = useState(false)

  return (
    <Card className={`border-gray-200 shadow-sm hover:shadow-md transition-all ${job.promoted ? 'border-l-4 border-l-blue-600' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 border">
            <Image src={job.companyLogo} alt={job.company} fill className="object-cover p-1" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-base hover:text-blue-600 cursor-pointer truncate">{job.title}</h3>
                  {job.promoted && <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs"><Zap className="h-3 w-3 mr-1" />Promu</Badge>}
                  {job.easyApply && <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">Candidature simplifiée</Badge>}
                </div>
                <p className="text-sm text-gray-600 mt-0.5">{job.company}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem><Bookmark className="h-4 w-4 mr-2" />Sauvegarder</DropdownMenuItem>
                  <DropdownMenuItem><Share2 className="h-4 w-4 mr-2" />Partager</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
              <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{job.type}</span>
              <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{job.salary}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{job.posted}</span>
            </div>
            <p className="text-sm text-gray-600 mt-3 line-clamp-2">{job.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {job.skills.slice(0, 4).map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs bg-gray-50">{skill}</Badge>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t">
              <span className="text-xs text-gray-500 flex items-center gap-1"><Users className="h-3 w-3" />{job.applicants} candidats</span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsSaved(!isSaved)}>
                  <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-blue-600 text-blue-600' : 'text-gray-400'}`} />
                </Button>
                <Button size="sm" className={`rounded-full ${isApplied ? 'bg-green-600' : 'bg-blue-600'}`} onClick={() => setIsApplied(!isApplied)}>
                  {isApplied ? '✓ Envoyée' : 'Postuler'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function JobSearchFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showAdvanced, setShowAdvanced] = useState(false)
  const quickFilters = ["Télétravail", "Temps plein", "CDI", "Startup", "Grande entreprise"]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 space-y-3">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Titre du poste..." className="pl-10" />
        </div>
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Ville..." className="pl-10" />
        </div>
        <Button><Search className="h-4 w-4 mr-1" />Rechercher</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {quickFilters.map((f) => (
          <Badge key={f} variant="outline" className="cursor-pointer hover:bg-blue-50" onClick={() => setActiveFilters(activeFilters.includes(f) ? activeFilters.filter(x => x !== f) : [...activeFilters, f])}>
            {f} {activeFilters.includes(f) && <X className="h-3 w-3 ml-1" />}
          </Badge>
        ))}
      </div>
      <Button variant="ghost" size="sm" onClick={() => setShowAdvanced(!showAdvanced)}>
        <SlidersHorizontal className="h-4 w-4 mr-1" />Filtres avancés
      </Button>
      {showAdvanced && (
        <div className="grid grid-cols-2 gap-3 pt-3 border-t">
          <Select>
            <SelectTrigger><SelectValue placeholder="Type d'entreprise" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="startup">Startup</SelectItem>
              <SelectItem value="corp">Grande entreprise</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger><SelectValue placeholder="Salaire min" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30K€+</SelectItem>
              <SelectItem value="50">50K€+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  )
}

function JobAlertCard() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardContent className="p-4 flex items-start gap-3">
        <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center"><Bell className="h-5 w-5 text-white" /></div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Alertes emploi <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs"><Zap className="h-3 w-3 mr-1" />Recommandé</Badge></h3>
          <p className="text-xs text-gray-600 mt-0.5">Recevez des notifications pour les offres correspondant à votre profil</p>
          <div className="flex gap-2 mt-2">
            <Button size="sm"><Mail className="h-3 w-3 mr-1" />Email</Button>
            <Button size="sm" variant="outline"><Smartphone className="h-3 w-3 mr-1" />Push</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function JobStatsDashboard() {
  const stats = [
    { label: "Offres vues", value: "245", change: "+12%", icon: Eye, positive: true },
    { label: "Candidatures", value: "38", change: "+5%", icon: Briefcase, positive: true },
    { label: "Profil vu", value: "1,234", change: "+18%", icon: Users, positive: true },
    { label: "Réponses", value: "68%", change: "-2%", icon: Target, positive: false },
  ]
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {stats.map((s) => (
          <Card key={s.label} className="border-gray-200">
            <CardContent className="p-3">
              <div className="flex justify-between"><s.icon className="h-4 w-4 text-gray-400" />{s.positive ? <ArrowUp className="h-3 w-3 text-green-600" /> : <ArrowDown className="h-3 w-3 text-red-600" />}</div>
              <p className="text-lg font-bold mt-1">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
              <span className={`text-xs ${s.positive ? 'text-green-600' : 'text-red-600'}`}>{s.change}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-4">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mb-2" />
          <h3 className="font-semibold">Premium</h3>
          <p className="text-sm text-blue-100 mb-2">Soyez visible par les recruteurs</p>
          <Button size="sm" variant="secondary" className="w-full">Essayer Premium</Button>
        </CardContent>
      </Card>
    </div>
  )
}

function SavedJobsSidebar() {
  const savedJobs = [
    { id: 1, title: "Senior Frontend Developer", company: "TechCorp", location: "Paris", saved: "Il y a 2j" },
    { id: 2, title: "UX Designer Senior", company: "DesignStudio", location: "Lyon", saved: "Il y a 5j" },
  ]
  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm flex items-center gap-2"><Bookmark className="h-4 w-4 text-blue-600" />Sauvegardées</h3>
          <Badge variant="secondary" className="text-xs">{savedJobs.length}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] overflow-y-auto space-y-2">
          {savedJobs.map((job) => (
            <div key={job.id} className="flex items-start gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
              <Avatar className="h-10 w-10 rounded-md">
                <AvatarFallback>{job.company[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{job.title}</p>
                <p className="text-xs text-gray-500">{job.company}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function JobsPage() {
  const jobs: Job[] = [
    { id: "1", title: "Senior Frontend Developer", company: "TechCorp", companyLogo: "/companies/techcorp.jpg", location: "Paris", type: "CDI", salary: "55-75K€", posted: "Il y a 2h", description: "Recherche développeur frontend senior React/TypeScript.", skills: ["React", "TypeScript", "Next.js"], applicants: 45, easyApply: true },
    { id: "2", title: "UX Designer Senior", company: "DesignStudio", companyLogo: "/companies/designstudio.jpg", location: "Lyon", type: "CDI", salary: "45-60K€", posted: "Il y a 5h", description: "DesignStudio recherche UX Designer senior.", skills: ["Figma", "Design Systems"], applicants: 32, promoted: true },
    { id: "3", title: "Product Manager", company: "StartupXYZ", companyLogo: "/companies/startupxyz.jpg", location: "Remote", type: "CDI", salary: "50-70K€", posted: "Il y a 1j", description: "Startup recherche Product Manager.", skills: ["Product Strategy", "Agile"], applicants: 28 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2"><Briefcase className="h-5 w-5 text-blue-600" />Emplois</h1>
          <Button size="sm" className="rounded-full">Publier une offre</Button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <JobAlertCard />
        <div className="grid grid-cols-12 gap-6 mt-6">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 space-y-4"><JobStatsDashboard /></div>
          </aside>
          <div className="col-span-12 lg:col-span-6">
            <JobSearchFilters />
            <div className="space-y-4 mt-4">
              {jobs.map((job) => <JobCard key={job.id} job={job} />)}
            </div>
          </div>
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20"><SavedJobsSidebar /></div>
          </aside>
        </div>
      </main>
    </div>
  )
}