"use client";

import { useCallback } from "react";
import { pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { PdfViewerProps } from "./types";
import { PdfToolbar } from "./PdfToolbar";
import { PdfThumbnailSidebar } from "./PdfThumbnailSidebar";
import { PdfDocumentCanvas } from "./PdfDocumentCanvas";
import { usePdfViewer } from "../hooks/usePdfViewer";

// Setup worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const PdfViewer = ({ pdfPath, fileName }: PdfViewerProps) => {
  const {
    numPages, setNumPages,
    pageNumber,
    scale,
    rotation, setRotation,
    sidebarOpen, setSidebarOpen,
    isLoading, setIsLoading,
    loadError, setLoadError,
    fitMode,
    originalPageWidth, setOriginalPageWidth,
    pageInput, setPageInput,
    showZoomMenu, setShowZoomMenu,
    mainRef, viewerRef, thumbnailRefs,
    toggleFullscreen,
    goTo, setFit, zoomIn, zoomOut, setZoomPreset
  } = usePdfViewer();

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, [setNumPages, setIsLoading]);

  const onPageLoadSuccess = useCallback(({ originalWidth }: { originalWidth: number }) => {
    if (originalWidth && originalWidth !== originalPageWidth) {
      setOriginalPageWidth(originalWidth);
    }
  }, [originalPageWidth, setOriginalPageWidth]);

  const handlePrint = useCallback(() => window.print(), []);

  return (
    <div
      ref={viewerRef}
      className="flex flex-col w-full h-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/[0.08] select-none"
      style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
    >
      <PdfToolbar
        fileName={fileName}
        pdfPath={pdfPath}
        numPages={numPages}
        pageNumber={pageNumber}
        scale={scale}
        fitMode={fitMode}
        pageInput={pageInput}
        showZoomMenu={showZoomMenu}
        setSidebarOpen={setSidebarOpen}
        setShowZoomMenu={setShowZoomMenu}
        setPageInput={setPageInput}
        goTo={goTo}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        setFit={setFit}
        setZoomPreset={setZoomPreset}
        rotateLeft={() => setRotation((r) => (r - 90 + 360) % 360)}
        rotateRight={() => setRotation((r) => (r + 90) % 360)}
        handlePrint={handlePrint}
        toggleFullscreen={toggleFullscreen}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <div
          className={`bg-[#252525] border-r border-white/[0.08] transition-[min-width,max-width,width] duration-300 ease-in-out overflow-hidden flex-shrink-0 ${
            sidebarOpen ? "w-[140px] min-w-[140px]" : "w-0 min-w-0 border-r-0"
          }`}
        >
          <PdfThumbnailSidebar
            pdfPath={pdfPath}
            numPages={numPages}
            pageNumber={pageNumber}
            thumbnailRefs={thumbnailRefs}
            goTo={goTo}
          />
        </div>
        <PdfDocumentCanvas
          pdfPath={pdfPath}
          fileName={fileName}
          numPages={numPages}
          pageNumber={pageNumber}
          scale={scale}
          rotation={rotation}
          isLoading={isLoading}
          loadError={loadError}
          originalPageWidth={originalPageWidth}
          mainRef={mainRef}
          onLoadSuccess={onLoadSuccess}
          onLoadError={(e) => { setLoadError(e.message); setIsLoading(false); }}
          onPageLoadSuccess={onPageLoadSuccess}
          setIsLoading={setIsLoading}
          setShowZoomMenu={setShowZoomMenu}
        />
      </div>

      <div className="flex items-center justify-between px-4 py-1.5 bg-[#2d2d2d] border-t border-white/[0.08] flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-[#666] text-[11px] font-medium">
            {isLoading ? "Loading…" : `Page ${pageNumber} of ${numPages}`}
          </span>
          {rotation !== 0 && <span className="text-[#888] text-[11px]">· Rotated {rotation}°</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#666] text-[11px] font-medium">
            ← → ↑ ↓ navigate &nbsp;|&nbsp; + − zoom &nbsp;|&nbsp; F fullscreen
          </span>
          <span className="text-[#888] text-[11px] font-mono">
            {fitMode === "width" ? "Fit Width" : fitMode === "page" ? "Fit Page" : `${Math.round(scale * 100)}%`}
          </span>
        </div>
      </div>
    </div>
  );
};
