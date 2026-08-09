"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, UserPlus } from "lucide-react"

export default function MyNetworkPage() {
  const connections = [
    { id: 1, name: "Sophie Martin", title: "Product Designer", connections: 500 },
    { id: 2, name: "Thomas Dubois", title: "CTO", connections: 300 },
    { id: 3, name: "Marie Lefevre", title: "Marketing Manager", connections: 250 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Users className="h-5 w-5" />Mon Réseau
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Card className="mb-4">
          <CardContent className="p-4">
            <Tabs defaultValue="connections">
              <TabsList>
                <TabsTrigger value="connections">Connexions</TabsTrigger>
                <TabsTrigger value="pending">En attente</TabsTrigger>
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {connections.map((person) => (
            <Card key={person.id}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{person.name}</h3>
                  <p className="text-sm text-gray-600">{person.title}</p>
                  <p className="text-xs text-gray-400">{person.connections} relations</p>
                </div>
                <Button variant="outline" size="sm">
                  <UserPlus className="h-4 w-4 mr-1" />Message
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
