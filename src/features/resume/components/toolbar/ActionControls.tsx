"use client";

import React from "react";
import { LuRotateCcw, LuRotateCw, LuPrinter, LuMaximize } from "react-icons/lu";
import { ToolbarBtn } from "./ToolbarBtn";

interface ActionControlsProps {
  rotateLeft: () => void;
  rotateRight: () => void;
  handlePrint: () => void;
  toggleFullscreen: () => void;
}

export const ActionControls = ({
  rotateLeft,
  rotateRight,
  handlePrint,
  toggleFullscreen,
}: ActionControlsProps) => {
  return (
    <div className="flex items-center gap-1">
      <ToolbarBtn onClick={rotateLeft} title="Rotate counter-clockwise">
        <LuRotateCcw />
      </ToolbarBtn>
      <ToolbarBtn onClick={rotateRight} title="Rotate clockwise">
        <LuRotateCw />
      </ToolbarBtn>

      <div className="w-px h-5 bg-white/10 mx-1" />

      <ToolbarBtn onClick={handlePrint} title="Print">
        <LuPrinter />
      </ToolbarBtn>

      <ToolbarBtn onClick={toggleFullscreen} title="Fullscreen (F)">
        <LuMaximize />
      </ToolbarBtn>
    </div>
  );
};
