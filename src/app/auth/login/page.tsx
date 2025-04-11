"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const router = useRouter();

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!email.trim()) newErrors.email = "O email é obrigatório.";
        if (!password.trim()) newErrors.password = "A senha é obrigatória.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            setErrors({ form: "Credenciais inválidas." });
        } else {
            router.push("/");
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">Music Sheet Login</h1>
                <h2 className="text-lg font-medium text-center text-gray-600 mb-4">Entre na sua conta</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}
                    <Button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Entrar
                    </Button>
                </form>
                <p className="text-sm text-center mt-6 text-gray-600">
                    Não tem uma conta?{" "}
                    <a href="/auth/register" className="text-blue-600 font-medium hover:underline">
                        Cadastre-se
                    </a>
                </p>
            </div>
        </main>
    );
}
