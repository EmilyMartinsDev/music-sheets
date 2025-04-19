"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { FileText, Upload, X, Download, Loader } from "lucide-react";
import CustomSelect from "@/src/components/custom-select";
import { useCategories } from "@/src/hooks/useCategories";
import { useInstruments } from "@/src/hooks/useInstruments";
import { useMusicSheets } from "@/src/hooks/useMusicSheets";
import { useSession } from "next-auth/react";
import clsx from "clsx";

export interface MusicSheetFormProps {
  initialData?: any | null;
  versionData?: any | null;
  onClose: () => void;
}

export default function MusicSheetForm({ initialData, versionData, onClose }: MusicSheetFormProps) {
  const { categories, fetchCategories, loading: loadingCategories } = useCategories();
  const { instruments, fetchInstruments, loading: loadingInstruments } = useInstruments();
  const { createMusicSheet, updateMusicSheet, fetchMusicSheets } = useMusicSheets();
  const { data: session } = useSession();

  const [user, setUser] = useState("");
  const [title, setTitle] = useState(initialData?.name || "");
  const [instrument, setInstrument] = useState(initialData?.instrument?.id || "");
  const [category, setCategory] = useState(initialData?.category?.id || "");
  const [filePDF, setFilePDF] = useState<string | undefined>(initialData?.file);
  const [fileXML, setFileXML] = useState<string | undefined>(initialData?.fileXML);
  const [fileNamePDF, setFileNamePDF] = useState<string | undefined>();
  const [fileNameXML, setFileNameXML] = useState<string | undefined>();
  const [selectedFilePDF, setSelectedFilePDF] = useState<File | null>(null);
  const [selectedFileXML, setSelectedFileXML] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isViewingVersion, setIsViewingVersion] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filePDFInputRef = useRef<HTMLInputElement>(null);
  const fileXMLInputRef = useRef<HTMLInputElement>(null);

  const isLoading = loadingCategories || loadingInstruments;

  useEffect(() => {
    if (session) {
      setUser(session.user?.id || "");
    }
  }, [session]);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchInstruments(), fetchCategories()]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.name);
      setInstrument(initialData.instrument?.id || "");
      setCategory(initialData.category?.id || "");
      setFilePDF(initialData.file);
      setFileXML(initialData.fileXML);
      setFileNamePDF(undefined);
      setFileNameXML(undefined);
      setIsViewingVersion(false);
    } else if (versionData) {
      setTitle(versionData.name);
      setInstrument(versionData.instrument?.id || "");
      setCategory(versionData.category?.id || "");
      setFilePDF(versionData.file);
      setFileXML(versionData.fileXML);
      setFileNamePDF(undefined);
      setFileNameXML(undefined);
      setIsViewingVersion(true);
    } else {
      setTitle("");
      setInstrument("");
      setCategory("");
      setFilePDF(undefined);
      setFileXML(undefined);
      setFileNamePDF(undefined);
      setFileNameXML(undefined);
      setSelectedFilePDF(null);
      setSelectedFileXML(null);
      setIsViewingVersion(false);
    }
  }, [initialData, versionData]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) newErrors.title = "O título é obrigatório";
    if (!instrument) newErrors.instrument = "O instrumento é obrigatório";
    if (!category) newErrors.category = "A categoria é obrigatória";
    if (!filePDF && !selectedFilePDF) newErrors.filePDF = "O PDF da partitura é obrigatório";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFilePDFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFilePDF(file);
      setFileNamePDF(file.name);
      setFilePDF(undefined);
    }
  };

  const handleRemoveFilePDF = () => {
    setSelectedFilePDF(null);
    setFilePDF(undefined);
    setFileNamePDF(undefined);
    if (filePDFInputRef.current) filePDFInputRef.current.value = "";
  };

  const handleDownload = (url: string) => {
    if (url) window.open(url, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isViewingVersion) return onClose();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", title);
      formData.append("instrumentId", instrument);
      formData.append("categoryId", category);
      formData.append("userId", user);
      if (selectedFilePDF) formData.append("file", selectedFilePDF);
      if (selectedFileXML) formData.append("fileXML", selectedFileXML);

      if (initialData) {
        await updateMusicSheet(initialData.id, formData);
      } else {
        await createMusicSheet(formData);
      }

      await fetchMusicSheets(); 
      onClose();
      setIsSubmitting(false);

    } catch (err) {
      console.error(err);
      setErrors({ form: "Erro ao salvar a partitura. Tente novamente." });
      setIsSubmitting(false);
      onClose()
    }
  };

  const restoreVersion = () => {
    if (!versionData) return;
    console.log(`Restaurando versão ${versionData.id}`);
    onClose();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader className="h-6 w-6 animate-spin text-gray-600" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título da partitura"
          className={clsx(errors.title && "border-red-500")}
          disabled={isViewingVersion}
        />
        {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="instrument">Instrumento</Label>
          <CustomSelect
            id="instrument"
            value={instrument}
            onChange={setInstrument}
            options={instruments.map((inst) => ({ value: inst.id, label: inst.name }))}
            placeholder="Selecione o instrumento"
            error={errors.instrument}
            isDisabled={isViewingVersion}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Categoria</Label>
          <CustomSelect
            id="category"
            value={category}
            onChange={setCategory}
            options={categories.map((cat) => ({ value: cat.id, label: cat.name }))}
            placeholder="Selecione a categoria"
            error={errors.category}
            isDisabled={isViewingVersion}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Partitura (PDF)</Label>
        {filePDF ? (
          <div className="flex items-center p-2 border rounded-md bg-gray-50">
            <FileText className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm flex-1 truncate">{filePDF.split("/").pop()}</span>
            <div className="flex gap-1">
              <Button type="button" variant="ghost" size="sm" onClick={() => handleDownload(filePDF)}>
                <Download className="h-4 w-4 text-blue-600" />
              </Button>
              {!isViewingVersion && (
                <Button type="button" variant="ghost" size="sm" onClick={handleRemoveFilePDF}>
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Input
              ref={filePDFInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFilePDFChange}
              className={`flex-1 ${errors.filePDF ? "border-red-500" : ""}`}
              disabled={isViewingVersion}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => filePDFInputRef.current?.click()}
              disabled={isViewingVersion}
            >
              <Upload className="h-4 w-4" />
              PDF
            </Button>
          </div>
        )}
        {errors.filePDF && <p className="text-red-500 text-xs">{errors.filePDF}</p>}
      </div>

      {versionData && (
        <div className="bg-blue-50 p-3 rounded-md mt-2">
          <p className="text-sm text-blue-700">
            Você está visualizando a versão {versionData.version}, criada em{" "}
            {new Date(versionData.createdAt).toLocaleString()} por {versionData.user?.name}.
          </p>
        </div>
      )}

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
          {isViewingVersion ? "Fechar" : "Cancelar"}
        </Button>
        {versionData && (
          <Button type="button" className="bg-blue-600 hover:bg-blue-700" onClick={restoreVersion}>
            Restaurar Esta Versão
          </Button>
        )}
        {!isViewingVersion && (
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting && <Loader className="h-4 w-4 animate-spin mr-2" />}
            {isSubmitting ? "Salvando..." : "Salvar"}
          </Button>
        )}
      </div>
    </form>
  );
}
