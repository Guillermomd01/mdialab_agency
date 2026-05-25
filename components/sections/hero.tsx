"use client";

import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current || !glowRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(212,201,122,0.15), transparent 40%)`;
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.background = "transparent";
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#58521D] pt-32 pb-20 lg:pt-44 lg:pb-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[80px] lg:blur-[100px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-[#D4C97A]/[0.08] blur-[80px] lg:blur-[100px]" />
        <div
          ref={glowRef}
          className="absolute inset-0 opacity-0 sm:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="hero-title text-white">
            La IA que tu empresa necesita,{" "}
            <span className="text-[#D4C97A]">implementada por expertos</span>{" "}
            en los que puedes confiar
          </h1>

          <p className="hero-subtitle">
            En mdialab combinamos estrategia de marketing e ingeniería de IA para
            automatizar procesos, optimizar tu presencia digital y multiplicar tus
            resultados.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-medium bg-[#D4C97A] text-[#2D2A1B] hover:bg-[#58521D] hover:text-white hover:border hover:border-[#D4C97A] transition-all duration-300"
            >
              Consultoría gratuita
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white text-[#2D2A1B] hover:bg-white/90 transition-colors"
            >
              Descubre cómo podemos ayudarte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
