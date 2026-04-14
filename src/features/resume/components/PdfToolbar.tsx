"use client";

import React from "react";
import { 
  LuPanelLeft, 
  LuDownload, 
} from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import { FitMode } from "./types";
import { ToolbarBtn } from "./toolbar/ToolbarBtn";
import { PageControls } from "./toolbar/PageControls";
import { ZoomControls } from "./toolbar/ZoomControls";
import { ActionControls } from "./toolbar/ActionControls";

interface PdfToolbarProps {
  fileName: string;
  pdfPath: string;
  numPages: number;
  pageNumber: number;
  scale: number;
  fitMode: FitMode;
  pageInput: string;
  showZoomMenu: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowZoomMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setPageInput: (val: string) => void;
  goTo: (page: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  setFit: (mode: FitMode) => void;
  setZoomPreset: (val: number) => void;
  rotateLeft: () => void;
  rotateRight: () => void;
  handlePrint: () => void;
  toggleFullscreen: () => void;
}

export const PdfToolbar = ({
  fileName,
  pdfPath,
  numPages,
  pageNumber,
  scale,
  fitMode,
  pageInput,
  showZoomMenu,
  setSidebarOpen,
  setShowZoomMenu,
  setPageInput,
  goTo,
  zoomIn,
  zoomOut,
  setFit,
  setZoomPreset,
  rotateLeft,
  rotateRight,
  handlePrint,
  toggleFullscreen,
}: PdfToolbarProps) => {
  return (
    <div className="flex items-center gap-1 px-3 py-2 bg-[#2d2d2d] border-b border-white/[0.08] flex-shrink-0 z-10">
      <ToolbarBtn onClick={() => setSidebarOpen((o) => !o)} title="Toggle thumbnails panel">
        <LuPanelLeft />
      </ToolbarBtn>

      <div className="w-px h-5 bg-white/10 mx-1" />

      <div className="flex items-center gap-1.5 min-w-0 mr-2">
        <FaFilePdf className="text-[#e22b26] text-lg flex-shrink-0" />
        <span className="text-[#c0c0c0] text-sm font-semibold truncate max-w-[140px]">{fileName}</span>
      </div>

      <div className="w-px h-5 bg-white/10 mx-1" />

      <PageControls 
        pageNumber={pageNumber}
        numPages={numPages}
        pageInput={pageInput}
        setPageInput={setPageInput}
        goTo={goTo}
      />

      <div className="w-px h-5 bg-white/10 mx-1" />

      <ZoomControls 
        scale={scale}
        fitMode={fitMode}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        setFit={setFit}
        setZoomPreset={setZoomPreset}
        showZoomMenu={showZoomMenu}
        setShowZoomMenu={setShowZoomMenu}
      />

      <div className="w-px h-5 bg-white/10 mx-1" />

      <ActionControls 
        rotateLeft={rotateLeft}
        rotateRight={rotateRight}
        handlePrint={handlePrint}
        toggleFullscreen={toggleFullscreen}
      />

      <div className="flex-1" />

      <a
        href={pdfPath}
        download={fileName}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#e22b26] hover:bg-[#c9201b] text-white text-xs font-semibold transition-all ml-1"
        title="Download PDF"
      >
        <LuDownload className="text-sm" />
        <span>Download</span>
      </a>
    </div>
  );
};
