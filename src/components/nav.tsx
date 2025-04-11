"use client";

import Link from "next/link";
import { MusicIcon, BookmarkIcon, PianoIcon } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Nav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // Exibe nada enquanto a sessão está carregando
  }

  if (!session?.user) {
    return null; // Exibe nada se o usuário não estiver logado
  }

  return (
    <nav className="w-64 bg-gray-900 text-white p-4">
      <div className="text-xl font-bold mb-8 mt-4 flex items-center">
        <MusicIcon className="mr-2" />
        <span>Sistema de Partituras</span>
      </div>
      <ul className="space-y-2">
        <li>
          <Link
            href="/"
            className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors"
          >
            <MusicIcon className="mr-2 h-5 w-5" />
            <span>Partituras</span>
          </Link>
        </li>
        <li>
          <Link
            href="/categorias"
            className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors"
          >
            <BookmarkIcon className="mr-2 h-5 w-5" />
            <span>Categorias</span>
          </Link>
        </li>
        <li>
          <Link
            href="/instrumentos"
            className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors"
          >
            <PianoIcon className="mr-2 h-5 w-5" />
            <span>Instrumentos</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
