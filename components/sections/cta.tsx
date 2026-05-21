"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-[#58521D] px-6 py-16 sm:px-12 sm:py-20 lg:px-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] rounded-full bg-[#D4C97A]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Empieza tu transformación hoy
            </h2>
            <p className="mt-4 text-lg text-white/70">
              La primera consultoría es gratuita y sin compromiso. Hablemos de
              cómo la IA puede impulsar tu negocio.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@mdialab.com"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 bg-[#D4C97A] text-[#2D2A1B] hover:bg-[#C4B96B] gap-2 inline-flex border-0"
                )}
              >
                <Mail className="h-4 w-4" />
                Escríbenos
              </a>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:text-white gap-2 inline-flex"
                )}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Respuesta en menos de 24 horas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
