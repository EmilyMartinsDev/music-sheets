import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "@/src/components/nav";
import { AppProviders } from "./AppProvider";
import ProtectedRoute from "@/src/components/protected-route";
import NavWrapper from "../components/nav-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de Partituras",
  description: "Sistema para cadastro e gerenciamento de partituras musicais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
 
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppProviders>
          <div className="flex min-h-screen">
          <NavWrapper />
            <div className="flex-1 bg-gray-50">
           <ProtectedRoute>{children}</ProtectedRoute>
            </div>
          </div>
          <ToastContainer />
        </AppProviders>
      </body>
    </html>
  );
}
