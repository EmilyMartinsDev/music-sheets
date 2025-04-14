import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MusicSheetCategory } from "../domain/entities/MusicSheetCategory";

export function useCategories() {
    const [categories, setCategories] = useState<MusicSheetCategory[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const API_BASE_URL = "/api/categories";

    const fetchCategories = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_BASE_URL);
            const data = await res.json();
            setCategories(data);
        } catch (err: any) {
            setError(err.message || "Failed to fetch categories.");
            toast.error(err.message || "Failed to fetch categories.");
        } finally {
            setLoading(false);
        }
    };

    const createCategory = async (categoryData: { name: string }) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(categoryData),
            });
            const newCategory = await res.json();
            setCategories((prev) => [...prev, newCategory]);
            toast.success("Category created successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to create category.");
            toast.error(err.message || "Failed to create category.");
        } finally {
            setLoading(false);
        }
    };

    const deleteCategory = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
            setCategories((prev) => prev.filter((category) => category.id !== id));
            toast.success("Category deleted successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to delete category.");
            toast.error(err.message || "Failed to delete category.");
        } finally {
            setLoading(false);
        }
    };
    const updateCategory = async (id: string, updatedData: { name: string }) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_BASE_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });
            const updatedCategory = await res.json();
            setCategories((prev) =>
                prev.map((category) =>
                    category.id === id ? updatedCategory : category
                )
            );
            toast.success("Category updated successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to update category.");
            toast.error(err.message || "Failed to update category.");
        } finally {
            setLoading(false);
        }
    };

    return { categories, loading, error, fetchCategories, createCategory, deleteCategory, updateCategory };
}
