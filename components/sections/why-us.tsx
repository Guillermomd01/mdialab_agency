"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Enfoque en ROI medible",
    description:
      "Cada recomendación está respaldada por datos. No implementamos tecnología por implementarla: buscamos resultados que impacten tu cuenta de resultados.",
  },
  {
    icon: Users,
    title: "Equipo híbrido",
    description:
      "Combinamos marketers con años de experiencia e ingenieros especializados en IA. Entendemos tanto el negocio como la tecnología.",
  },
  {
    icon: ShieldCheck,
    title: "Transparencia total",
    description:
      "Sin letra pequeña ni cargos ocultos. Te explicamos cada decisión en lenguaje humano y compartimos el progreso en tiempo real.",
  },
  {
    icon: Gauge,
    title: "Velocidad de ejecución",
    description:
      "Metodologías ágiles y prototipado rápido para que no pierdas meses en reuniones. En semanas, no en años.",
  },
];

export function WhyUs() {
  return (
    <section id="por-que-nosotros" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Por qué las empresas{" "}
              <span className="text-primary">confían en mdialab</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No somos una agencia más. Somos el socio estratégico que te
              acompaña en la transformación digital, desde la estrategia hasta
              la implementación real.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 lg:p-12">
              <div className="space-y-8">
                <div className="rounded-xl bg-white p-6 shadow-sm border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                      A
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Automatización de soporte
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Cliente sector SaaS
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Redujimos el tiempo de respuesta en un 70% y liberamos a
                    nuestro equipo para tareas de mayor valor."
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-sm font-bold">
                      B
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Estrategia SEO + IA
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Cliente e-commerce
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Multiplicamos por 3 el tráfico orgánico en 6 meses con
                    contenido asistido por IA y optimización técnica."
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">
                      C
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Implementación de agentes IA
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Cliente consultoría
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "mdialab entendió nuestro negocio desde el primer día. Los
                    agentes de IA ahora gestionan el 40% de nuestros
                    workflows."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
