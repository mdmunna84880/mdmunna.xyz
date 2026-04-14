import { Metadata } from 'next';
import Link from 'next/link';
import { siteMetadata } from '../../data/metadata';
import { ResumeViewerClient } from '../../features/resume';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Professional resume of ${siteMetadata.name} — Full Stack Software Engineer.`,
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  return (
    <div className="flex flex-col bg-[#111] h-[calc(100vh-64px)]">

      {/* Slim breadcrumb / back-navigation strip */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border-b border-white/[0.06] flex-shrink-0">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[#888] hover:text-white text-xs transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L4.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to Portfolio
        </Link>
        <span className="text-[#444] text-xs">|</span>
        <span className="text-[#555] text-xs">{siteMetadata.name} — Resume</span>
      </div>

      {/* PDF Viewer fills remaining height */}
      <div className="flex-1 overflow-hidden p-3">
        <ResumeViewerClient
          pdfPath="/Md_Munna_Resume.pdf"
          fileName="Md_Munna_Resume.pdf"
        />
      </div>
    </div>
  );
}
