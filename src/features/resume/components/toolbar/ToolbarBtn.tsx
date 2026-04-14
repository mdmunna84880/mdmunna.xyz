"use client";

import React from "react";

interface ToolbarBtnProps {
  onClick?: () => void;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
  variant?: "ghost" | "accent";
}

export const ToolbarBtn = ({
  onClick,
  disabled,
  title,
  children,
  variant = "ghost",
}: ToolbarBtnProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`flex items-center justify-center gap-1.5 rounded px-2 py-1.5 text-base font-medium transition-all duration-150
      disabled:opacity-30 disabled:cursor-not-allowed
      ${
        variant === "accent"
          ? "bg-[#e22b26] hover:bg-[#c9201b] text-white"
          : "text-[#c0c0c0] hover:bg-white/10 hover:text-white"
      }`}
  >
    {children}
  </button>
);
