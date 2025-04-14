import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { User } from "../domain/entities/User";

export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const API_BASE_URL = "/api/users";

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_BASE_URL);
            const data = await res.json();
            setUsers(data);
            toast.success("Users fetched successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to fetch users.");
            toast.error(err.message || "Failed to fetch users.");
        } finally {
            setLoading(false);
        }
    };

    const createUser = async (userData: any) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });
            const newUser = await res.json();
            setUsers((prev) => [...prev, newUser]);
            toast.success("User created successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to create user.");
            toast.error(err.message || "Failed to create user.");
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
            setUsers((prev) => prev.filter((user) => user.id !== id));
            toast.success("User deleted successfully!");
        } catch (err: any) {
            setError(err.message || "Failed to delete user.");
            toast.error(err.message || "Failed to delete user.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading, error, fetchUsers, createUser, deleteUser };
}
