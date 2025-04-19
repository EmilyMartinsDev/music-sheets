// src/services/MusicSheetConversionService.ts
export class MusicSheetConversionService {
    static async convertPDFtoMXL(
      pdfUrl: string,
      sheetId: string,
      SECRET_KEY: string,
      fetchPdfFn: (url: string) => Promise<Blob>,
      updateFn: (id: string, form: FormData) => Promise<void>
    ) {
      const blob = await fetchPdfFn(pdfUrl);
      const file = new File([blob], "file.pdf", { type: blob.type });
  
      const uploadForm = new FormData();
      uploadForm.append("file", file);
  
      const bufferResponse = await fetch("http://localhost:4000/", {
        method: "POST",
        body: uploadForm,
        headers: {
          Authorization: `Bearer ${SECRET_KEY}`,
        },
      });
  
      const mxlBlob = await bufferResponse.blob();
      const mxlFile = new File([mxlBlob], "converted.mxl", {
        type: "application/vnd.recordare.musicxml",
      });
  
      const updateForm = new FormData();
      updateForm.append("fileXML", mxlFile);
      await updateFn(sheetId, updateForm);
    }
  }
  