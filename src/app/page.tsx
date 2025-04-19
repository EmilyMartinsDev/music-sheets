"use client";

import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Search, Plus, Trash2, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
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
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function Home() {
  const router = useRouter();
  const {
    musicSheets,
    loading,
    error,
    fetchMusicSheets,
    deleteMusicSheet,
    convertMusicSheetToMXL,
    totalPages,
    currentPage,
  } = useMusicSheets();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSheet, setSelectedSheet] = useState<MusicSheet | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<MusicSheetVersion | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [sheetToDelete, setSheetToDelete] = useState<string | null>(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [sheetToDownload, setSheetToDownload] = useState<MusicSheet | null>(null);
  const [isConvertingMxl, setIsConvertingMxl] = useState(false);


  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMusicSheets(page, PAGE_SIZE);
  }, [page]);
  

  const handleRowClick = (sheet: MusicSheet) => {
    setSelectedSheet(sheet);
    setSelectedVersion(null);
    setIsFormOpen(true);
  };

  const handleViewClick = (sheetId: string) => {
    router.push(`/view-music-sheet/${sheetId}`);
  };

  const handleDelete = async () => {
    if (sheetToDelete) {
      await deleteMusicSheet(sheetToDelete);
      setSheetToDelete(null);
      setIsConfirmOpen(false);
      fetchMusicSheets(page, PAGE_SIZE); // reload current page
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchMusicSheets(page, PAGE_SIZE, searchQuery);
  };

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
          <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); handleRowClick(sheet); }}>
            Editar
          </Button>
          <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); handleViewClick(sheet.id); }}>
            Visualizar
          </Button>
          <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); setSheetToDownload(sheet); setIsDownloadOpen(true); }}>
            Download
          </Button>
          <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); setSheetToDelete(sheet.id); setIsConfirmOpen(true); }}>
            <Trash2 className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      ),
      sortable: false,
    },
  ];

  if (loading) return <Loading />;
  if (error) {
    toast.error(error);
    return <p className="text-red-500">Erro: {error}</p>;
  }

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

      {/* Paginação */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </Button>
        <span className="text-sm">
          Página {page} de {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Próxima
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

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

      <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Download de Partitura</DialogTitle>
          </DialogHeader>

          {sheetToDownload && (
            <div className="flex flex-col gap-4">
              <Button
                onClick={() => {
                  if (sheetToDownload.file) {
                    window.open(sheetToDownload.file, "_blank");
                  } else {
                    toast.warn("PDF não disponível.");
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Baixar PDF
              </Button>

              {sheetToDownload.fileXML ? (
                <Button
                  onClick={() => {
                    window.open(sheetToDownload.fileXML!, "_blank");
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Baixar MXL
                </Button>
              ) : (
                <Button
                  disabled={isConvertingMxl}
                  onClick={async () => {
                    try {
                      if (!sheetToDownload) return;
                      setIsConvertingMxl(true);
                      await convertMusicSheetToMXL(sheetToDownload);
                      toast.success("Partitura convertida com sucesso!");
                      setIsDownloadOpen(false);
                    } catch (err: any) {
                      toast.error("Erro na conversão.");
                    } finally {
                      setIsConvertingMxl(false);
                    }
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center gap-2"
                >
                  {isConvertingMxl && <Loader2 className="h-4 w-4 animate-spin" />}
                  {isConvertingMxl ? "Convertendo..." : "Converter para MXL"}
                </Button>
              )}
            </div>
          )}
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
