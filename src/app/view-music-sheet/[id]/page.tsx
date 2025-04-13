"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function ViewMusicSheetOMR() {
  const [notes, setNotes] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      toast.error("Por favor, selecione um arquivo PDF.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/omr", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao processar o arquivo.");
      }

      const data = await response.json();
      setNotes(data.notes);
      toast.success("Reconhecimento concluído com sucesso!");
    } catch (error: any) {
      toast.error(error.message || "Erro ao processar o arquivo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Reconhecimento Óptico de Música (OMR)</h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {loading && <p>Processando...</p>}
      {notes && (
        <div>
          <h2 className="text-xl font-bold mt-4">Notas Reconhecidas:</h2>
          <pre className="bg-gray-100 p-4 rounded">{notes}</pre>
        </div>
      )}
    </main>
  );
}
