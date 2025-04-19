"use client";

import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useInstruments } from "@/src/hooks/useInstruments";

interface InstrumentFormProps {
  initialData?: any | null;
  onClose: () => void;
}

export default function InstrumentForm({ initialData, onClose }: InstrumentFormProps) {
  const { createInstrument, updateInstrument, fetchInstruments } = useInstruments();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
    } else {
      setName("");
    }
  }, [initialData]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = "O nome é obrigatório";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (initialData) {
        // Atualizar instrumento existente
        await updateInstrument(initialData.id, { name });
      } else {
        // Criar novo instrumento
        await createInstrument({ name });
      }
      await fetchInstruments(); // Atualiza a lista de instrumentos
      onClose();
    } catch (error: any) {
      console.error("Failed to submit form:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Nome
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome do instrumento"
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          {initialData ? "Atualizar" : "Salvar"}
        </Button>
      </div>
    </form>
  );
}
