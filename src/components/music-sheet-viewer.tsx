"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface MusicSheetViewerProps {
  musicSheetId: string;
}

export function MusicSheetViewer({ musicSheetId }: MusicSheetViewerProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfUrl = async () => {
      try {
        const response = await fetch(`/api/music-sheets/${musicSheetId}`);
        if (!response.ok) {
          throw new Error("Failed to load music sheet PDF");
        }
        
        const { musicSheet } = await response.json();
        setPdfUrl(musicSheet.file);
      } catch (error: any) {
        toast.error(error.message || "Erro ao carregar partitura");
        console.error("Erro no MusicSheetViewer:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfUrl();
  }, [musicSheetId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="text-center py-8 text-gray-500">
        Nenhuma visualização disponível
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <iframe 
        src={`${pdfUrl}#view=fitH`}
        className="w-full h-[500px] border border-gray-200 rounded-lg"
        title="Visualização da Partitura"
      />
      <div className="mt-2 text-sm text-gray-500">
        <a 
          href={pdfUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Abrir PDF em nova janela
        </a>
      </div>
    </div>
  );
}