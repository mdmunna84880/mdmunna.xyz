"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { FitMode } from "../components/types";

const ZOOM_STEP = 0.15;

export const usePdfViewer = (numPagesInit = 0) => {
  const [numPages, setNumPages] = useState(numPagesInit);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [fitMode, setFitMode] = useState<FitMode>("width");
  const [originalPageWidth, setOriginalPageWidth] = useState<number>(612);
  const [pageInput, setPageInput] = useState("1");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showZoomMenu, setShowZoomMenu] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const applyFitWidth = useCallback(() => {
    if (!mainRef.current) {
      console.warn('PDF Viewer: Main container ref not initialized when applying fit width');
      return;
    }
    const availableWidth = mainRef.current.clientWidth - 64;
    setScale(Math.max(0.4, availableWidth / originalPageWidth));
  }, [originalPageWidth]);

  const applyFitPage = useCallback(() => {
    if (!mainRef.current) {
      console.warn('PDF Viewer: Main container ref not initialized when applying fit page');
      return;
    }
    const availableWidth = mainRef.current.clientWidth - 64;
    const availableHeight = mainRef.current.clientHeight - 64;
    const scaleW = availableWidth / originalPageWidth;
    const scaleH = availableHeight / (originalPageWidth * 1.414);
    setScale(Math.min(scaleW, scaleH));
  }, [originalPageWidth]);

  const toggleFullscreen = useCallback(() => {
    if (!viewerRef.current) return;
    if (!document.fullscreenElement) {
      viewerRef.current.requestFullscreen().catch(() => { });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => { });
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    if (fitMode === "width") applyFitWidth();
    else if (fitMode === "page") applyFitPage();
  }, [fitMode, applyFitWidth, applyFitPage]);

  const pauseResizeRef = useRef(false);
  const lastSidebarRef = useRef(sidebarOpen);

  useEffect(() => {
    if (sidebarOpen !== lastSidebarRef.current) {
      lastSidebarRef.current = sidebarOpen;
      pauseResizeRef.current = true;
      setTimeout(() => {
        pauseResizeRef.current = false;
      }, 400);
    }
  }, [sidebarOpen, applyFitWidth, applyFitPage]);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    const observer = new ResizeObserver(() => {
      if (pauseResizeRef.current) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (fitMode === "width") applyFitWidth();
        else if (fitMode === "page") applyFitPage();
      }, 100);
    });
    if (mainRef.current) observer.observe(mainRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(resizeTimer);
    };
  }, [fitMode, applyFitWidth, applyFitPage]);

  useEffect(() => {
    const isEditableElement = (el: HTMLElement): boolean => {
      return el.tagName === 'INPUT' || 
             el.tagName === 'TEXTAREA' || 
             el.contentEditable === 'true';
    };

    const onKey = (e: globalThis.KeyboardEvent) => {
      if (isEditableElement(e.target as HTMLElement)) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown")
        setPageNumber((p) => Math.min(numPages, p + 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp")
        setPageNumber((p) => Math.max(1, p - 1));
      if (e.key === "=" || e.key === "+")
        setScale((s) => Math.min(2.5, parseFloat((s + ZOOM_STEP).toFixed(2))));
      if (e.key === "-")
        setScale((s) => Math.max(0.4, parseFloat((s - ZOOM_STEP).toFixed(2))));
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [numPages, toggleFullscreen]);

  useEffect(() => {
    thumbnailRefs.current[pageNumber - 1]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setPageInput(String(pageNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const goTo = useCallback((page: number) => {
    setPageNumber(Math.max(1, Math.min(numPages, page)));
  }, [numPages]);

  const setFit = useCallback((mode: FitMode) => {
    setFitMode(mode);
    if (mode === "width") applyFitWidth();
    else if (mode === "page") applyFitPage();
    else setScale(1.0);
  }, [applyFitWidth, applyFitPage]);

  return {
    numPages, setNumPages,
    pageNumber, setPageNumber,
    scale, setScale,
    rotation, setRotation,
    sidebarOpen, setSidebarOpen,
    isLoading, setIsLoading,
    loadError, setLoadError,
    fitMode, setFitMode,
    originalPageWidth, setOriginalPageWidth,
    pageInput, setPageInput,
    isFullscreen,
    showZoomMenu, setShowZoomMenu,
    mainRef, viewerRef, thumbnailRefs,
    applyFitWidth, applyFitPage, toggleFullscreen,
    goTo, setFit,
    zoomIn: () => {
      setFitMode("custom");
      setScale((s) => Math.min(2.5, parseFloat((s + ZOOM_STEP).toFixed(2))));
    },
    zoomOut: () => {
      setFitMode("custom");
      setScale((s) => Math.max(0.4, parseFloat((s - ZOOM_STEP).toFixed(2))));
    },
    setZoomPreset: (val: number) => {
      setFitMode("custom");
      setScale(val);
    }
  };
};
