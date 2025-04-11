"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { FileText, Upload, X, Download, Loader } from "lucide-react"; // Adicionado Loader
import CustomSelect from "@/src/components/custom-select";
import { useCategories } from "@/src/hooks/useCategories";
import { useInstruments } from "@/src/hooks/useInstruments";
import { useMusicSheets } from "@/src/hooks/useMusicSheets";
import { useSession } from "next-auth/react";

export interface MusicSheetFormProps {
  initialData?: any | null;
  versionData?: any | null;
  onClose: () => void;
}

export default function MusicSheetForm({ initialData, versionData, onClose }: MusicSheetFormProps) {
  const { categories, fetchCategories, loading: loadingCategories } = useCategories();
  const { instruments, fetchInstruments, loading: loadingInstruments } = useInstruments();
  const { createMusicSheet, updateMusicSheet } = useMusicSheets();
  const [user, setUser] = useState("");
  const [title, setTitle] = useState(initialData?.name || "");
  const [instrument, setInstrument] = useState(initialData?.instrument?.id || "");
  const [category, setCategory] = useState(initialData?.category?.id || "");
  const [file, setFile] = useState<string | undefined>(initialData?.file);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isViewingVersion, setIsViewingVersion] = useState(false);
  const { data: session } = useSession();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.name);
      setInstrument(initialData.instrument?.id || "");
      setCategory(initialData.category?.id || "");
      setFile(initialData.file);
      setFileName(undefined);
      setIsViewingVersion(false);
    } else if (versionData) {
      setTitle(versionData.name);
      setInstrument(versionData.instrument?.id || "");
      setCategory(versionData.category?.id || "");
      setFile(versionData.file);
      setFileName(undefined);
      setIsViewingVersion(true);
    } else {
      setTitle("");
      setInstrument("");
      setCategory("");
      setFile(undefined);
      setFileName(undefined);
      setSelectedFile(null);
      setIsViewingVersion(false);
    }
  }, [initialData, versionData]);

  useEffect(() => {
    if (session) {
      setUser(session.user?.id || "");
    }
  }, [session]);


  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = "O título é obrigatório";
    }

    if (!instrument) {
      newErrors.instrument = "O instrumento é obrigatório";
    }

    if (!category) {
      newErrors.category = "A categoria é obrigatória";
    }

    if (!file && !selectedFile) {
      newErrors.file = "O arquivo da partitura é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setFileName(file.name);
      setFile(undefined); // Limpa o arquivo existente ao selecionar um novo
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFile(undefined);
    setFileName(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isViewingVersion) {
      onClose();
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", title);
      formData.append("instrumentId", instrument);
      formData.append("categoryId", category);
      formData.append("userId", user);

      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      if (initialData) {
        await updateMusicSheet(initialData.id, formData);
      } else {
        await createMusicSheet(formData);
      }

      onClose();
    } catch (error: any) {
     
    }
  };

  const restoreVersion = () => {
    if (!versionData) return;

    console.log(`Restaurando para versão ${versionData.id}`);
    onClose();
  };

  const handleDownload = () => {
    if (file) {
      window.open(file, "_blank");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Título
        </Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título da partitura"
          className={errors.title ? "border-red-500" : ""}
          disabled={isViewingVersion}
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="instrument" className="text-sm font-medium">
            Instrumento
          </Label>
          {loadingInstruments ? (
            <div className="flex items-center gap-2">
              <Loader className="animate-spin h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-500">Carregando instrumentos...</span>
            </div>
          ) : (
            <CustomSelect
              id="instrument"
              value={instrument}
              onChange={setInstrument}
              options={instruments.map((inst) => ({ value: inst.id, label: inst.name }))}
              placeholder="Selecione o instrumento"
              error={errors.instrument}
              isDisabled={isViewingVersion}
            />
          )}
          {errors.instrument && <p className="text-red-500 text-xs mt-1">{errors.instrument}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm font-medium">
            Categoria
          </Label>
          {loadingCategories ? (
            <div className="flex items-center gap-2">
              <Loader className="animate-spin h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-500">Carregando categorias...</span>
            </div>
          ) : (
            <CustomSelect
              id="category"
              value={category}
              onChange={setCategory}
              options={categories.map((cat) => ({ value: cat.id, label: cat.name }))}
              placeholder="Selecione a categoria"
              error={errors.category}
              isDisabled={isViewingVersion}
            />
          )}
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="file" className="text-sm font-medium">
          Arquivo da Partitura
        </Label>

        {file ? (
          <div className="flex items-center p-2 border rounded-md bg-gray-50">
            <FileText className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm flex-1 truncate">{file.split("/").pop()}</span>
            <div className="flex gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4 text-blue-600" />
              </Button>
              {!isViewingVersion && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                  onClick={handleRemoveFile}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Input
              ref={fileInputRef}
              id="file"
              type="file"
              accept=".pdf,.xml,.musicxml"
              onChange={handleFileChange}
              className={`flex-1 ${errors.file ? "border-red-500" : ""}`}
              disabled={isViewingVersion}
            />
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => fileInputRef.current?.click()}
              disabled={isViewingVersion}
            >
              <Upload className="h-4 w-4" />
              Selecionar
            </Button>
          </div>
        )}
        {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
        <p className="text-xs text-gray-500 mt-1">Formatos aceitos: PDF, MusicXML (.xml, .musicxml)</p>
      </div>

      {versionData && (
        <div className="bg-blue-50 p-3 rounded-md mt-2">
          <p className="text-sm text-blue-700">
            Você está visualizando a versão {versionData.version} desta partitura, criada em{" "}
            {new Date(versionData.createdAt).toLocaleString()} por {versionData?.user.name}.
          </p>
        </div>
      )}

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          {isViewingVersion ? "Fechar" : "Cancelar"}
        </Button>

        {versionData && (
          <Button type="button" className="bg-blue-600 hover:bg-blue-700" onClick={restoreVersion}>
            Restaurar Esta Versão
          </Button>
        )}

        {!isViewingVersion && (
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            {initialData ? "Atualizar" : "Salvar"}
          </Button>
        )}
      </div>
    </form>
  );
}
