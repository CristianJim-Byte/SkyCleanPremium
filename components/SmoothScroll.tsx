"use client";
import { useEffect } from "react";
import Lenis from "lenis";

/** Płynne przewijanie (Lenis). Wyłączone, gdy ktoś ma w systemie ograniczone animacje. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -88 } });
    return () => lenis.destroy();
  }, []);
  return null;
}
