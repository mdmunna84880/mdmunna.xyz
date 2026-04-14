export type FitMode = "custom" | "width" | "page";

export interface PdfViewerProps {
  pdfPath: string;
  fileName: string;
}

export interface PdfState {
  numPages: number;
  pageNumber: number;
  scale: number;
  rotation: number;
  sidebarOpen: boolean;
  isLoading: boolean;
  loadError: string | null;
  fitMode: FitMode;
}
