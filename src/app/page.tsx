"use client";

import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Search, Plus, Trash2, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import CustomTable from "@/src/components/custom-table";
import CategoryBadge from "@/src/components/category-badge";
import Loading from "@/src/components/loading";
import { toast } from "react-toastify";
import MusicSheetForm from "../components/music-sheet-form";
import { useMusicSheets } from "@/src/hooks/useMusicSheets";
import { MusicSheet } from "../domain/entities/MusicSheet";
import { MusicSheetVersion } from "../domain/entities/MusicSheetVersion";
import ConfirmationDialog from "@/src/components/confirmation-dialog";

export default function Home() {
  const { 
    musicSheets, 
    loading, 
    error, 
    fetchMusicSheets, 
    createMusicSheet, 
    deleteMusicSheet 
  } = useMusicSheets();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSheet, setSelectedSheet] = useState<MusicSheet | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<MusicSheetVersion | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [sheetToDelete, setSheetToDelete] = useState<string | null>(null);

  const handleRowClick = (sheet: MusicSheet) => {
    setSelectedSheet(sheet);
    setSelectedVersion(null);
    setIsFormOpen(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Search functionality is not implemented yet.");
  };

  const handleVersionClick = (version: MusicSheetVersion) => {
    setSelectedVersion(version);
    setSelectedSheet(null);
    setIsFormOpen(true);
  };

  const handleDelete = async () => {
    if (sheetToDelete) {
      await deleteMusicSheet(sheetToDelete);
      setSheetToDelete(null);
      setIsConfirmOpen(false);
    }
  };

  if (loading) return <Loading />;
  if (error) {
    toast.error(error);
    return <p>Error: {error}</p>;
  }

  const columns = [
    {
      id: "name",
      header: "Título",
      accessor: (sheet: MusicSheet) => sheet.name,
      sortable: true,
    },
    {
      id: "instrument",
      header: "Instrumento",
      accessor: (sheet: MusicSheet) => sheet.instrument?.name || "-",
      sortable: true,
    },
    {
      id: "category",
      header: "Categoria",
      accessor: (sheet: MusicSheet) => <CategoryBadge category={sheet.category?.name || "-"} />,
      sortable: true,
    },
    {
      id: "file",
      header: "Arquivo",
      accessor: (sheet: MusicSheet) => (
        <div className="flex items-center">
          {sheet.file ? (
            <>
              <FileText className="h-4 w-4 text-blue-600 mr-2" />
              <span
                className="text-sm text-blue-600 hover:underline cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Evita abrir o modal de edição ao clicar no arquivo
                  window.open(sheet.file, "_blank"); // Abre a URL do arquivo em uma nova aba
                }}
              >
                Baixar arquivo
              </span>
            </>
          ) : (
            <span className="text-sm text-gray-500">Sem arquivo</span>
          )}
        </div>
      ),
      sortable: false,
    },
    {
      id: "createdAt",
      header: "Data de Criação",
      accessor: (sheet: MusicSheet) => new Date(sheet.createdAt).toLocaleDateString("pt-BR"),
      sortable: true,
    },
    {
      id: "actions",
      header: "Ações",
      accessor: (sheet: MusicSheet) => (
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleRowClick(sheet);
            }}
          >
            Editar
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              setSheetToDelete(sheet.id);
              setIsConfirmOpen(true);
            }}
          >
            <Trash2 className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      ),
      sortable: false,
    },
  ];

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Partituras</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <Button
          className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto flex items-center gap-2"
          onClick={() => {
            setSelectedSheet(null);
            setIsFormOpen(true);
          }}
        >
          <Plus className="h-4 w-4" />
          Nova Partitura
        </Button>

        <form onSubmit={handleSearch} className="relative w-full md:w-96 flex">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Pesquise"
            className="pl-10 border-gray-300 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" className="ml-2 bg-blue-600 hover:bg-blue-700">
            Buscar
          </Button>
        </form>
      </div>

      <CustomTable
        data={musicSheets}
        columns={columns}
        onRowClick={handleRowClick}
        keyField="id"
        sortable
        striped
        hoverable
      />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedSheet ? "Editar Partitura" : "Nova Partitura"}</DialogTitle>
          </DialogHeader>
          <MusicSheetForm
            initialData={selectedSheet}
            versionData={selectedVersion}
            onClose={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <ConfirmationDialog
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Excluir Partitura"
        message="Tem certeza que deseja excluir esta partitura? Esta ação não pode ser desfeita."
      />
    </main>
  );
}
