"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { MusicSheet } from "../domain/entities/MusicSheet";
import { MusicSheetConversionService } from "../application/services/MusicSheetConversionService";

export function useMusicSheets() {
  const [musicSheets, setMusicSheets] = useState<MusicSheet[]>([]);
  const [musicSheet, setMusicSheet] = useState<MusicSheet | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const API_BASE_URL = "/api/musicsheets";

  const fetchMusicSheets = async (page = 1, limit = 10, query = "") => {
    setLoading(true);
    setError(null);
  
    try {
      const url = new URL("/api/musicsheets", window.location.origin);
      url.searchParams.set("page", String(page));
      url.searchParams.set("limit", String(limit));
      if (query.trim()) url.searchParams.set("q", query);
  
      const res = await fetch(url.toString());
      const data = await res.json();
  
      if (res.ok) {
        setMusicSheets(data.items || []);
        setTotalPages(data.totalPages || 1);
        setTotalCount(data.totalCount || 0);
        setCurrentPage(data.page || 1);
      } else {
        throw new Error(data.error || "Erro ao carregar partituras.");
      }
    } catch (err: any) {
      setError(err.message || "Erro ao buscar partituras.");
      toast.error(err.message || "Erro ao buscar partituras.");
    } finally {
      setLoading(false);
    }
  };
  
  const createMusicSheet = async (musicSheetData: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_BASE_URL, {
        method: "POST",
        body: musicSheetData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erro ao criar partitura.");
      }

      const newSheet = await res.json();
      setMusicSheets((prev) => [newSheet, ...prev]);
      toast.success("Partitura criada com sucesso!");
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
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
      toast.success("Partitura excluída com sucesso!");
    } catch (err: any) {
      setError(err.message || "Erro ao excluir partitura.");
      toast.error(err.message || "Erro ao excluir partitura.");
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
        body: updatedData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erro ao atualizar partitura.");
      }

      const updatedSheet = await res.json();

      setMusicSheets((prev) =>
        prev.map((sheet) => (sheet.id === id ? updatedSheet : sheet))
      );

      toast.success("Partitura atualizada com sucesso!");
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message || "Erro ao atualizar partitura.");
    } finally {
      setLoading(false);
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
        throw new Error("Erro ao converter PDF.");
      }

      return await response.blob();
    } catch (error: any) {
      toast.error(error.message || "Erro ao converter PDF.");
      throw error;
    }
  };

  const renderMusicSheet = async (id: string): Promise<string> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/render-music", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao renderizar partitura.");
      }

      const { mxlUrl } = await response.json();
      return mxlUrl;
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message || "Erro ao renderizar partitura.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchMusicSheet = async (id: string): Promise<any> => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/${id}`);
      if (!res.ok) throw new Error("Erro ao buscar a partitura.");
      const data = await res.json();
      setMusicSheet(data);
      return data;
    } catch (err: any) {
      toast.error(err.message || "Erro ao buscar a partitura.");
    } finally {
      setLoading(false);
    }
  };

  const convertMusicSheetToMXL = async (sheet: MusicSheet) => {
    const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY!;
    if (!sheet.file) throw new Error("Partitura sem arquivo PDF");

    await MusicSheetConversionService.convertPDFtoMXL(
      sheet.file,
      sheet.id,
      SECRET_KEY,
      fetchMusicSheetPdf,
      updateMusicSheet
    );
  };

  return {
    musicSheets,
    musicSheet,
    loading,
    error,
    currentPage,
    totalPages,
    totalCount,
    fetchMusicSheets,
    fetchMusicSheet,
    createMusicSheet,
    deleteMusicSheet,
    updateMusicSheet,
    fetchMusicSheetPdf,
    renderMusicSheet,
    convertMusicSheetToMXL,
  };
}
