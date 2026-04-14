"use client";

import React from "react";
import { LuZoomIn, LuZoomOut } from "react-icons/lu";
import { ToolbarBtn } from "./ToolbarBtn";
import { FitMode } from "../types";

const ZOOM_PRESETS = [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.5];

interface ZoomControlsProps {
  scale: number;
  fitMode: FitMode;
  zoomIn: () => void;
  zoomOut: () => void;
  setFit: (mode: FitMode) => void;
  setZoomPreset: (val: number) => void;
  showZoomMenu: boolean;
  setShowZoomMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ZoomControls = ({
  scale,
  fitMode,
  zoomIn,
  zoomOut,
  setFit,
  setZoomPreset,
  showZoomMenu,
  setShowZoomMenu,
}: ZoomControlsProps) => {
  const zoomLabel =
    fitMode === "width"
      ? "Fit Width"
      : fitMode === "page"
      ? "Fit Page"
      : `${Math.round(scale * 100)}%`;

  return (
    <div className="flex items-center gap-1">
      <ToolbarBtn onClick={zoomOut} disabled={scale <= 0.4} title="Zoom out (-)">
        <LuZoomOut />
      </ToolbarBtn>

      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowZoomMenu((v) => !v);
          }}
          className="bg-[#3a3a3a] hover:bg-[#484848] rounded px-2.5 py-1.5 text-[#d4d4d4] text-[13px] font-mono w-24 text-center transition-all flex items-center justify-between"
          title="Zoom options"
        >
          <span>{zoomLabel}</span>
          <span className="text-[10px]">▼</span>
        </button>
        {showZoomMenu && (
          <div className="absolute top-full mt-1 left-0 z-50 bg-[#2d2d2d] border border-white/10 rounded-lg shadow-2xl overflow-hidden w-40 py-1">
            <div className="px-3 py-1.5 text-[#666] text-[10px] uppercase tracking-widest font-bold">Fit</div>
            {[
              { label: "Fit Width", mode: "width" as FitMode },
              { label: "Fit Page", mode: "page" as FitMode },
            ].map(({ label, mode }) => (
              <button
                key={mode}
                onClick={() => { setFit(mode); setShowZoomMenu(false); }}
                className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-white/10 transition-colors ${fitMode === mode ? "text-[#e22b26]" : "text-[#c0c0c0]"}`}
              >
                {label}
              </button>
            ))}
            <div className="h-px bg-white/10 my-1" />
            <div className="px-3 py-1.5 text-[#666] text-[10px] uppercase tracking-widest font-bold">Zoom</div>
            {ZOOM_PRESETS.map((z) => (
              <button
                key={z}
                onClick={() => { setZoomPreset(z); setShowZoomMenu(false); }}
                className={`w-full text-left px-3 py-1.5 text-xs font-mono font-medium hover:bg-white/10 transition-colors ${fitMode === "custom" && Math.round(scale * 100) === Math.round(z * 100) ? "text-[#e22b26]" : "text-[#c0c0c0]"}`}
              >
                {Math.round(z * 100)}%
              </button>
            ))}
          </div>
        )}
      </div>

      <ToolbarBtn onClick={zoomIn} disabled={scale >= 2.5} title="Zoom in (+)">
        <LuZoomIn />
      </ToolbarBtn>
    </div>
  );
};
