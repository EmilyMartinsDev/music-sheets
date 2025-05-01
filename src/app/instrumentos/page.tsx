"use client";

import { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Search, Plus, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import InstrumentForm from "@/src/components/instrument-form";
import CustomTable from "@/src/components/custom-table";
import { useInstruments } from "@/src/hooks/useInstruments";
import Loading from "@/src/components/loading";
import { toast } from "react-toastify";
import ConfirmationDialog from "@/src/components/confirmation-dialog";

export default function InstrumentsPage() {
  const { instruments, loading, error, fetchInstruments, deleteInstrument } = useInstruments();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [instrumentToDelete, setInstrumentToDelete] = useState<string | null>(null);

  const handleRowClick = (instrument: any) => {
    setSelectedInstrument(instrument);
    setIsFormOpen(true);
  };

  useEffect(() => {
    fetchInstruments(); // Carrega os instrumentos ao montar o componente
  }
    , []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchInstruments(); // Atualiza a lista com base na pesquisa
  };

  const handleDelete = async () => {
    if (instrumentToDelete) {
      await deleteInstrument(instrumentToDelete);
      setInstrumentToDelete(null);
      setIsConfirmOpen(false);
      await fetchInstruments(); // Atualiza a lista após exclusão
    }
  };

  const columns = [
    {
      id: "name",
      header: "Nome",
      accessor: (instrument: any) => instrument.name,
      sortable: true,
    },
    {
      id: "createdAt",
      header: "Data de Criação",
      accessor: (instrument: any) => new Date(instrument.createdAt).toLocaleDateString("pt-BR"),
      sortable: true,
    },
    {
      id: "actions",
      header: "Ações",
      accessor: (instrument: any) => (
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="bg-red-600 hover:bg-red-700 text-white border-none h-9"
            onClick={(e) => {
              e.stopPropagation();
              setInstrumentToDelete(instrument.id);
              setIsConfirmOpen(true);
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
      sortable: false,
    },
  ];

  if (loading) return <Loading />;
  if (error) {
    toast.error(error);
    return <p>Error: {error}</p>;
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Cadastro de Instrumentos</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <Button
          className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto flex items-center gap-2"
          onClick={() => {
            setSelectedInstrument(null);
            setIsFormOpen(true);
          }}
        >
          <Plus className="h-4 w-4" />
          Novo Instrumento
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
        data={instruments}
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
            <DialogTitle>{selectedInstrument ? "Editar Instrumento" : "Novo Instrumento"}</DialogTitle>
          </DialogHeader>
          <InstrumentForm
            initialData={selectedInstrument}
            onClose={async () => {
              setIsFormOpen(false);
              await fetchInstruments(); // Atualiza a lista após criação ou edição
            }}
          />
        </DialogContent>
      </Dialog>

      <ConfirmationDialog
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Excluir Instrumento"
        message="Tem certeza que deseja excluir este instrumento? Esta ação não pode ser desfeita."
      />
    </main>
  );
}
