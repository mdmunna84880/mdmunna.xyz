"use client";

import React, { memo } from "react";
import { Document, Page } from "react-pdf";

interface PdfDocumentCanvasProps {
  pdfPath: string;
  fileName: string;
  numPages: number;
  pageNumber: number;
  scale: number;
  rotation: number;
  isLoading: boolean;
  loadError: string | null;
  originalPageWidth: number;
  mainRef: React.RefObject<HTMLDivElement | null>;
  setShowZoomMenu: React.Dispatch<React.SetStateAction<boolean>>;
  onLoadSuccess: (data: { numPages: number }) => void;
  onLoadError: (error: Error) => void;
  onPageLoadSuccess: (data: { originalWidth: number }) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemoizedPage = memo(({
  pageIndex,
  pageNumber,
  scale,
  rotation,
  originalPageWidth,
  onPageLoadSuccess,
  setIsLoading
}: {
  pageIndex: number;
  pageNumber: number;
  scale: number;
  rotation: number;
  originalPageWidth: number;
  onPageLoadSuccess?: (data: { originalWidth: number }) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
  <div
    id={`pdf-page-${pageIndex + 1}`}
    className={`relative flex-shrink-0 shadow-2xl transition-all duration-200 bg-white
      ${pageNumber === pageIndex + 1 ? "ring-2 ring-[#e22b26]/60" : ""}`}
    style={{
      width: originalPageWidth * scale,
      minHeight: originalPageWidth * scale * 1.414,
    }}
  >
    <Page
      pageNumber={pageIndex + 1}
      scale={scale}
      rotate={rotation}
      onLoadSuccess={pageIndex === 0 ? onPageLoadSuccess : undefined}
      renderTextLayer={true}
      renderAnnotationLayer={true}
      onRenderSuccess={() => {
        if (pageIndex === 0) setIsLoading(false);
      }}
      loading={null}
    />
  </div>
  );
});
MemoizedPage.displayName = "MemoizedPage";

export const PdfDocumentCanvas = ({
  pdfPath,
  fileName,
  numPages,
  pageNumber,
  scale,
  rotation,
  loadError,
  originalPageWidth,
  mainRef,
  setShowZoomMenu,
  onLoadSuccess,
  onLoadError,
  onPageLoadSuccess,
  setIsLoading,
}: PdfDocumentCanvasProps) => {
  return (
    <div
      ref={mainRef}
      className="flex-1 overflow-auto bg-[#404040] flex flex-col items-center py-8 gap-4"
      onClick={() => setShowZoomMenu(false)}
    >
      {loadError ? (
        <div className="flex flex-col items-center gap-4 mt-20">
          <div className="text-[#e22b26] text-5xl">⚠</div>
          <p className="text-red-400 font-semibold">Could not load PDF</p>
          <p className="text-[#999] text-sm text-center max-w-xs">{loadError}</p>
          <a href={pdfPath} download={fileName} className="px-4 py-2 bg-[#e22b26] hover:bg-[#c9201b] text-white rounded-lg text-sm font-semibold transition-all">
            Download Instead
          </a>
        </div>
      ) : (
        <Document
          file={pdfPath}
          onLoadSuccess={onLoadSuccess}
          onLoadError={onLoadError}
          loading={
            <div className="flex flex-col items-center justify-center w-full h-[600px] gap-3">
              <div className="w-8 h-8 border-2 border-white/20 border-t-[#e22b26] rounded-full animate-spin" />
              <p className="text-[#888] text-sm font-medium">Opening Document…</p>
            </div>
          }
        >
          {Array.from({ length: numPages }, (_, i) => (
            <MemoizedPage
              key={i}
              pageIndex={i}
              pageNumber={pageNumber}
              scale={scale}
              rotation={rotation}
              originalPageWidth={originalPageWidth}
              onPageLoadSuccess={onPageLoadSuccess}
              setIsLoading={setIsLoading}
            />
          ))}
        </Document>
      )}
    </div>
  );
};
