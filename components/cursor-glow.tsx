"use client";

import { useRef, useEffect } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    let raf: number;
    const animate = () => {
      const ease = 0.12;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 80}px, ${pos.current.y - 80}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot pequeño que sigue el cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D4C97A] pointer-events-none z-[9999] mix-blend-difference hidden sm:block"
        style={{ willChange: "transform" }}
      />
      {/* Glow grande con delay */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[160px] h-[160px] rounded-full pointer-events-none z-[9998] hidden sm:block"
        style={{
          background: "radial-gradient(circle, rgba(212,201,122,0.18) 0%, transparent 70%)",
          filter: "blur(20px)",
          willChange: "transform",
        }}
      />
    </>
  );
}
