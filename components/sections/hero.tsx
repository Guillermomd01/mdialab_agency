"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#58521D] pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-[#D4C97A]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
          >
            La IA que tu empresa necesita,{" "}
            <span className="text-[#D4C97A]">implementada por expertos</span>{" "}
            en los que puedes confiar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto text-balance"
          >
            En mdialab combinamos estrategia de marketing e ingeniería de IA para
            automatizar procesos, optimizar tu presencia digital y multiplicar tus
            resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contacto"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-8 gap-2 inline-flex bg-[#D4C97A] text-[#2D2A1B] hover:bg-[#C4B96B] border-0"
              )}
            >
              Consultoría gratuita
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full px-8 inline-flex bg-white text-[#2D2A1B] border-white hover:bg-white/90 hover:text-[#2D2A1B]"
              )}
            >
              Descubre cómo podemos ayudarte
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
