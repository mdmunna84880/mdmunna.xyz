"use client";

import dynamic from "next/dynamic";

/** PdfViewer uses browser Canvas APIs — must be client-only */
const PdfViewer = dynamic(
  () => import("./components/PdfViewer").then((m) => m.PdfViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center h-full gap-3 bg-[#1e1e1e] rounded-xl">
        <div className="w-8 h-8 border-2 border-white/20 border-t-[#e22b26] rounded-full animate-spin" />
        <p className="text-[#888] text-sm">Loading viewer…</p>
      </div>
    ),
  }
);

interface ResumeViewerClientProps {
  pdfPath: string;
  fileName: string;
}

export function ResumeViewerClient({ pdfPath, fileName }: ResumeViewerClientProps) {
  return <PdfViewer pdfPath={pdfPath} fileName={fileName} />;
}
