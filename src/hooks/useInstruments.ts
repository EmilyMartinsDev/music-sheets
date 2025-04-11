import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MusicSheetInstrument } from "../domain/entities/MusicSheetInstrument";

export function useInstruments() {
    const [instruments, setInstruments] = useState<MusicSheetInstrument[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const API_BASE_URL = "/api/instruments";

    const fetchInstruments = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_BASE_URL);
            const data = await res.json();
            setInstruments(data);
        } catch (err: any) {
            setError(err.message || "Failed to fetch instruments.");
            toast.error(err.message || "Failed to fetch instruments.");
        } finally {
            setLoading(false);
        }
    };

    const createInstrument = async (instrumentData: { name: string }) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(instrumentData),
            });
            const newInstrument = await res.json();
            setInstruments((prev) => [...prev, newInstrument]);
            toast.success("Instrument created successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to create instrument.");
            toast.error(err.message || "Failed to create instrument.");
        } finally {
            setLoading(false);
        }
    };

    const deleteInstrument = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
            setInstruments((prev) => prev.filter((instrument) => instrument.id !== id));
            toast.success("Instrument deleted successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to delete instrument.");
            toast.error(err.message || "Failed to delete instrument.");
        } finally {
            setLoading(false);
        }
    };
    const updateInstrument = async (id: string, updatedData: { name: string }) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_BASE_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });
            const updatedInstrument = await res.json();
            setInstruments((prev) =>
                prev.map((instrument) =>
                    instrument.id === id ? updatedInstrument : instrument
                )
            );
            toast.success("Instrument updated successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to update instrument.");
            toast.error(err.message || "Failed to update instrument.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchInstruments();
    }, []);

    return { instruments, loading, error, fetchInstruments, createInstrument, deleteInstrument, updateInstrument };
}
