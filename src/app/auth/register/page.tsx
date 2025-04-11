"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useUsers } from "@/src/hooks/useUsers";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const { createUser } = useUsers();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const router = useRouter();

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!email.trim()) newErrors.email = "O email é obrigatório.";
        if (!password.trim() || password.length < 6) newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
        if (!name.trim()) newErrors.name = "O nome é obrigatório.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await createUser({ email, password, name });
            router.push("/auth/login");
        } catch (error: any) {
            console.error("Failed to register:", error.message);
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">Music Sheet Registration</h1>
                <h2 className="text-lg font-medium text-center text-gray-600 mb-4">Crie sua conta</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                            Nome
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome"
                            className={`rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 ${
                                errors.name ? "border-red-500 focus:ring-red-500" : ""
                            }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                            Email
                        </Label>
                        <Input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            className={`rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 ${
                                errors.email ? "border-red-500 focus:ring-red-500" : ""
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-700 font-medium">
                            Senha
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                            className={`rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 ${
                                errors.password ? "border-red-500 focus:ring-red-500" : ""
                            }`}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <Button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Cadastrar
                    </Button>
                </form>
                <p className="text-sm text-center mt-6 text-gray-600">
                    Já tem uma conta?{" "}
                    <a href="/auth/login" className="text-blue-600 font-medium hover:underline">
                        Faça login
                    </a>
                </p>
            </div>
        </main>
    );
}
