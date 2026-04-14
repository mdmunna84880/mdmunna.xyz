"use client";

import React, { KeyboardEvent } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { ToolbarBtn } from "./ToolbarBtn";

interface PageControlsProps {
  pageNumber: number;
  numPages: number;
  pageInput: string;
  setPageInput: (val: string) => void;
  goTo: (page: number) => void;
}

export const PageControls = ({
  pageNumber,
  numPages,
  pageInput,
  setPageInput,
  goTo,
}: PageControlsProps) => {
  const handlePageInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = parseInt(pageInput);
      if (!isNaN(val)) goTo(val);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <ToolbarBtn onClick={() => goTo(pageNumber - 1)} disabled={pageNumber <= 1} title="Previous page (←)">
        <LuChevronLeft />
      </ToolbarBtn>

      <div className="flex items-center gap-1 bg-[#3a3a3a] rounded px-2 py-1">
        <input
          type="text"
          value={pageInput}
          onChange={(e) => {
            // Only allow numeric input or empty string
            const val = e.target.value;
            if (val === '' || /^\d+$/.test(val)) {
              setPageInput(val);
            }
          }}
          onKeyDown={handlePageInputKeyDown}
          onBlur={() => {
            const val = parseInt(pageInput);
            if (!isNaN(val)) goTo(val);
            else setPageInput(String(pageNumber));
          }}
          className="w-8 bg-transparent text-white text-xs text-center outline-none font-mono"
          title="Jump to page"
        />
        <span className="text-[#666] text-xs">/</span>
        <span className="text-[#888] text-xs font-mono w-6 text-center">
          {numPages || "–"}
        </span>
      </div>

      <ToolbarBtn onClick={() => goTo(pageNumber + 1)} disabled={pageNumber >= numPages} title="Next page (→)">
        <LuChevronRight />
      </ToolbarBtn>
    </div>
  );
};
