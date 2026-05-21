"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Brain, Rocket, Workflow, Code2, Search } from "lucide-react";

const navLinks = [
  { href: "#proceso", label: "Proceso" },
  { href: "#por-que-nosotros", label: "Por qué mdialab" },
  { href: "#faq", label: "FAQ" },
];

const servicesMenu = [
  {
    icon: Brain,
    title: "Consultoría Estratégica de IA",
    description: "Auditoría, roadmap y selección de tecnología",
    href: "#servicios",
  },
  {
    icon: Rocket,
    title: "Implementación de IA",
    description: "APIs, agentes inteligentes y fine-tuning",
    href: "#servicios",
  },
  {
    icon: Workflow,
    title: "Automatización Inteligente",
    description: "Flujos de trabajo, chatbots y documentos",
    href: "#servicios",
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Webs corporativas, landing pages y e-commerce",
    href: "#servicios",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "SEO técnico, contenidos y Core Web Vitals",
    href: "#servicios",
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#58521D] shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-white">
              mdia<span className="text-[#D4C97A]">lab</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {/* Services mega-menu trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Servicios
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-3">
                        {servicesMenu.map((service) => (
                          <a
                            key={service.title}
                            href={service.href}
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors group"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#58521D]/10 text-[#58521D] group-hover:bg-[#58521D] group-hover:text-white transition-colors">
                              <service.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-stone-900 group-hover:text-[#58521D]">
                                {service.title}
                              </p>
                              <p className="text-xs text-stone-500 mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Contactar
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[#D4C97A] px-5 py-2 text-sm font-semibold text-[#2D2A1B] hover:bg-[#C4B96B] transition-colors"
            >
              Consultoría gratuita
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#4A4518] border-t border-white/10"
          >
            <div className="space-y-1 px-4 pb-6 pt-3">
              {/* Mobile Services Accordion */}
              <button
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/10"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Servicios
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-1 pl-4 pb-2">
                      {servicesMenu.map((service) => (
                        <a
                          key={service.title}
                          href={service.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          <service.icon className="h-4 w-4 shrink-0" />
                          {service.title}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 space-y-2">
                <a
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 w-full"
                >
                  Contactar
                </a>
                <a
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-full bg-[#D4C97A] px-5 py-2.5 text-sm font-semibold text-[#2D2A1B] hover:bg-[#C4B96B] w-full"
                >
                  Consultoría gratuita
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
