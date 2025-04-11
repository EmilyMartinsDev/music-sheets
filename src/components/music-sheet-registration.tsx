"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { addMusicSheet } from "@/lib/music-sheet-data"

export default function MusicSheetRegistration() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [instrument, setInstrument] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !description || !instrument || !category) {
      return
    }

    addMusicSheet({
      id: Date.now().toString(),
      title,
      description,
      instrument,
      category,
      createdAt: new Date().toISOString(),
    })

    // Reset form
    setTitle("")
    setDescription("")
    setInstrument("")
    setCategory("")
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Nova Partitura</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título da partitura"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva detalhes sobre a partitura"
              required
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instrument">Instrumento</Label>
            <CustomSelect
              value={instrument}
              onValueChange={setInstrument}
              placeholder="Selecione o instrumento"
              options={["Piano", "Violão", "Violino", "Flauta", "Saxofone", "Bateria", "Baixo", "Trompete"]}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <CustomSelect
              value={category}
              onValueChange={setCategory}
              placeholder="Selecione a categoria"
              options={["Clássica", "Jazz", "Rock", "Pop", "MPB", "Samba", "Bossa Nova", "Instrumental"]}
            />
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}

// Custom Select component
function CustomSelect({
  value,
  onValueChange,
  placeholder,
  options,
}: {
  value: string
  onValueChange: (value: string) => void
  placeholder: string
  options: string[]
}) {
  return (
    <Select value={value} onValueChange={onValueChange} required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

// Custom Submit Button component
function SubmitButton() {
  return (
    <Button type="submit" className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 transition-colors">
      Cadastrar Partitura
    </Button>
  )
}
