'use client';

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MusicSheet } from "../domain/entities/MusicSheet";

export function useMusicSheets() {
    const [musicSheets, setMusicSheets] = useState<MusicSheet[]>([]);
    const [musicSheet, setMusicSheet] = useState<MusicSheet | null>(null);  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const API_BASE_URL = "/api/musicsheets";

    const fetchMusicSheets = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_BASE_URL);
            const data = await res.json();
            setMusicSheets(data || []);
        } catch (err: any) {
            setError(err.message || "Failed to fetch music sheets.");
            toast.error(err.message || "Failed to fetch music sheets.");
        } finally {
            setLoading(false);
        }
    };

    const createMusicSheet = async (musicSheetData: FormData) => {
        setLoading(true);
        setError(null);
        try {
            console.log("Dados enviados para a API:", musicSheetData);

            const res = await fetch(API_BASE_URL, {
                method: "POST",
                body: musicSheetData,
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to create music sheet.");
            }

            const newSheet = await res.json();
            console.log("Resposta da API:", newSheet);

            setMusicSheets((prev) => [...prev, newSheet]);
            toast.success("Music sheet created successfully!");
        } catch (err: any) {
            console.error("Erro ao criar partitura:", err.message);
            setError(err.message || "Failed to create music sheet.");
            toast.error(err.message || "Failed to create music sheet.");
        } finally {
            setLoading(false);
        }
    };

    const deleteMusicSheet = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
            setMusicSheets((prev) => prev.filter((sheet) => sheet.id !== id));
            toast.success("Music sheet deleted successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to delete music sheet.");
            toast.error(err.message || "Failed to delete music sheet.");
        } finally {
            setLoading(false);
        }
    };

    const updateMusicSheet = async (id: string, updatedData: FormData) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_BASE_URL}/${id}`, {
                method: "PUT",
                body: updatedData, // Envia o FormData diretamente
            });
            const updatedSheet = await res.json();
            setMusicSheets((prev) =>
                prev.map((sheet) => (sheet.id === id ? updatedSheet : sheet))
            );
            toast.success("Music sheet updated successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to update music sheet.");
            toast.error(err.message || "Failed to update music sheet.");
        } finally {
            setLoading(false);
        }
    };

    const convertMusicSheetToMXL = async (sheetUrl: string): Promise<string> => {
        try {
            const response = await fetch("/api/musicsheets/convert", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sheetUrl }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to convert music sheet.");
            }

            const { mxlUrl } = await response.json();
            return mxlUrl;
        } catch (error: any) {
            toast.error(error.message || "Erro ao converter a partitura.");
            throw error;
        }
    };

    const fetchMusicSheetPdf = async (pdfUrl: string): Promise<Blob> => {
        try {
            const response = await fetch("/api/musicsheets/pdf", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pdfUrl }),
            });

            if (!response.ok) {
                throw new Error("Failed to convert MXL to PDF.");
            }

            return await response.blob();
        } catch (error: any) {
            toast.error(error.message || "Erro ao converter a partitura para PDF.");
            throw error;
        }
    };

    const renderMusicSheet = async (id: string): Promise<string> => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch('/api/render-music', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to render music sheet');
          }
      
          const { mxlUrl } = await response.json();
          return mxlUrl;
        } catch (err: any) {
          setError(err.message);
          toast.error(err.message || 'Failed to render music sheet');
          throw err;
        } finally {
          setLoading(false);
        }
      };
      
    const fetchMusicSheet = async (id:string) => {
        try {
            const response = await fetch(`/api/musicsheets/${id}`);
            if (!response.ok) {
                throw new Error("Erro ao buscar a partitura.");
            }

            const data = await response.json();
             setMusicSheet(data);   
        } catch (error) {
            toast.error("Erro ao buscar a partitura.");
        } finally {
            setLoading(false);
        }
    };

    return { 
        musicSheets, 
        loading, 
        error, 
        musicSheet,  
        fetchMusicSheets,
        fetchMusicSheet,
        createMusicSheet,
        deleteMusicSheet,
        updateMusicSheet,
        convertMusicSheetToMXL,
        fetchMusicSheetPdf,
        renderMusicSheet
    };
}
