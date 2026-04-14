"use client";

import React, { MutableRefObject } from "react";
import { Document, Page } from "react-pdf";

interface PdfThumbnailSidebarProps {
  pdfPath: string;
  numPages: number;
  pageNumber: number;
  thumbnailRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  goTo: (page: number) => void;
}

export const PdfThumbnailSidebar = ({
  pdfPath,
  numPages,
  pageNumber,
  thumbnailRefs,
  goTo
}: PdfThumbnailSidebarProps) => {
  return (
    <div className="w-[140px] flex-shrink-0 bg-[#252525] border-r border-white/[0.08] overflow-y-auto flex flex-col gap-2 p-2">
      <Document file={pdfPath} loading={null}>
        {Array.from({ length: numPages }, (_, i) => (
          <div
            key={i}
            ref={(el) => { thumbnailRefs.current[i] = el; }}
            onClick={() => goTo(i + 1)}
            className={`cursor-pointer rounded-md overflow-hidden transition-all duration-150 border-2
              ${pageNumber === i + 1
                ? "border-[#e22b26] shadow-[0_0_12px_rgba(226,43,38,0.35)]"
                : "border-transparent hover:border-white/20"}`}
          >
            <Page
              pageNumber={i + 1}
              width={116}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={
                <div className="w-full h-[160px] bg-[#1e1e1e] animate-pulse rounded" />
              }
            />
            <div className="text-center py-1 text-[10px] text-[#888] font-semibold">
              {i + 1}
            </div>
          </div>
        ))}
      </Document>
    </div>
  );
};
