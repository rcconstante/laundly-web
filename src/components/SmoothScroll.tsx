"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;

    function sync() {
      lenis?.destroy();
      lenis = preference.matches ? undefined : new Lenis({ autoRaf: true, anchors: true });
    }

    sync();
    preference.addEventListener("change", sync);
    return () => {
      preference.removeEventListener("change", sync);
      lenis?.destroy();
    };
  }, []);

  return null;
}
