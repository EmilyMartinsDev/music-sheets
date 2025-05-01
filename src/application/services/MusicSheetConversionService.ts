// src/services/MusicSheetConversionService.ts
export class MusicSheetConversionService {
  static async convertPDFtoMXL(
    pdfUrl: string,
    sheetId: string,
    SECRET_KEY: string,
    fetchPdfFn: (url: string) => Promise<Blob>,
    updateFn: (id: string, form: FormData) => Promise<void>
  ) {
    const blob = await this.fetchPDF(pdfUrl, fetchPdfFn);
    const file = this.createFile(blob, "file.pdf", blob.type);

    const uploadForm = this.createFormData("file", file);

    const apiUrl = process.env.NEXT_PUBLIC_API_SHEETS_CONVERSOR;
    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_SHEETS_CONVERSOR is not defined");
    }

    const mxlFile = await this.uploadAndConvert(apiUrl, uploadForm, SECRET_KEY);

    const updateForm = this.createFormData("fileXML", mxlFile);
    await updateFn(sheetId, updateForm);
  }

  private static async fetchPDF(
    pdfUrl: string,
    fetchPdfFn: (url: string) => Promise<Blob>
  ): Promise<Blob> {
    return await fetchPdfFn(pdfUrl);
  }

  private static createFile(blob: Blob, fileName: string, type: string): File {
    return new File([blob], fileName, { type });
  }

  private static createFormData(fieldName: string, file: File): FormData {
    const formData = new FormData();
    formData.append(fieldName, file);
    return formData;
  }

  private static async uploadAndConvert(
    apiUrl: string,
    formData: FormData,
    secretKey: string
  ): Promise<File> {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    });

    if (!response) {
      throw new Error("No response from the server");
    }

    const mxlBlob = await response.blob();
    return new File([mxlBlob], "converted.mxl", {
      type: "application/vnd.recordare.musicxml",
    });
  }
}