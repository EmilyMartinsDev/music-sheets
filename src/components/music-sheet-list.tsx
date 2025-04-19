"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { getMusicSheets, type MusicSheet } from "@/lib/music-sheet-data"

export default function MusicSheetList() {
  const [musicSheets, setMusicSheets] = useState<MusicSheet[]>([])

  useEffect(() => {
    // Get initial data
    setMusicSheets(getMusicSheets())

    // Subscribe to changes
    const intervalId = setInterval(() => {
      setMusicSheets(getMusicSheets())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Partituras Cadastradas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {musicSheets.length === 0 ? (
            <EmptyState />
          ) : (
            musicSheets.map((sheet) => <MusicSheetItem key={sheet.id} sheet={sheet} />)
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Custom Empty State component
function EmptyState() {
  return (
    <div className="text-center py-8">
      <p className="text-muted-foreground">Nenhuma partitura cadastrada ainda.</p>
      <p className="text-sm text-muted-foreground mt-2">
        Preencha o formulário ao lado para adicionar uma nova partitura.
      </p>
    </div>
  )
}

// Custom Music Sheet Item component
function MusicSheetItem({ sheet }: { sheet: MusicSheet }) {
  return (
    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{sheet.title}</h3>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            {sheet.instrument}
          </Badge>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            {sheet.category}
          </Badge>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-2">{sheet.description}</p>
      <div className="text-xs text-muted-foreground mt-3">
        Adicionado em: {new Date(sheet.createdAt).toLocaleDateString("pt-BR")}
      </div>
    </div>
  )
}
