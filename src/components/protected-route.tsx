"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import Loading from "./loading";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login"); // Redireciona para a página de login se não estiver autenticado
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading/>
  }

  if (!session?.user) {
    return null; // Evita renderizar o conteúdo enquanto redireciona
  }

  return <>{children}</>;
}
