'use client';

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MusicSheet } from "../domain/entities/MusicSheet";

export function useMusicSheets() {
    const [musicSheets, setMusicSheets] = useState<MusicSheet[]>([]);
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

    useEffect(() => {
        fetchMusicSheets();
    }, []);

    return { musicSheets, loading, error, fetchMusicSheets, createMusicSheet, deleteMusicSheet, updateMusicSheet };
}
