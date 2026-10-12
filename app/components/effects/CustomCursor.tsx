"use client";
import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);
  const [cursorSrc, setCursorSrc] = useState("/webElements/arrow.cur");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      // Move cursor
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top = e.clientY + "px";

      // Get element under cursor
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (!target) return;

      const interactiveElement = target.closest<HTMLElement>(
        "button, input, select, textarea, a"
      );

      let newCursor = "/webElements/arrow.cur"; // default

      if (interactiveElement) {
        if ((interactiveElement instanceof HTMLButtonElement || interactiveElement instanceof HTMLInputElement) && interactiveElement.disabled) newCursor = "/webElements/no.cur";
        else if (
          interactiveElement.tagName === "INPUT" ||
          interactiveElement.tagName === "TEXTAREA"
        )
          newCursor = "/webElements/beam.cur";
        else if (
          interactiveElement.tagName === "BUTTON" ||
          interactiveElement.tagName === "SELECT" ||
          interactiveElement.tagName === "A"
        )
          newCursor = "/webElements/link.cur";
      }

      setCursorSrc(newCursor);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Determine transform based on file name
  const transformStyle = cursorSrc.includes("arrow") || cursorSrc.includes("link") ? "translate(0, 0)" : "translate(-50%, -50%)";
  const sizeCursor = cursorSrc.includes("arrow") ? "32px" : "45px";

  return (
    <img
      ref={cursorRef}
      src={cursorSrc}
      alt="cursor"
      className="opacity-0 lg:opacity-100"
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: sizeCursor,
        height: sizeCursor,
        zIndex: 9999,
        transform: transformStyle,
      }}
    />
  );
}

export default CustomCursor;
