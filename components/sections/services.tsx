"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Search,
  Workflow,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Brain,
    title: "Consultoría Estratégica de IA",
    description:
      "Analizamos tu negocio y diseñamos una hoja de ruta personalizada para integrar la inteligencia artificial donde realmente aporte valor.",
    features: [
      "Auditoría de procesos",
      "Roadmap de implementación",
      "Selección de tecnología",
    ],
    featured: true,
  },
  {
    icon: Rocket,
    title: "Implementación de IA",
    description:
      "Pasamos de la estrategia a la acción. Desplegamos modelos de IA, integraciones y soluciones a medida en tu infraestructura.",
    features: [
      "Integración de APIs de IA",
      "Desarrollo de agentes inteligentes",
      "Fine-tuning de modelos",
    ],
    featured: false,
  },
  {
    icon: Workflow,
    title: "Automatización Inteligente",
    description:
      "Eliminamos tareas repetitivas mediante flujos de trabajo automatizados con IA, liberando tiempo para lo que realmente importa.",
    features: [
      "Automatización de marketing",
      "Chatbots avanzados",
      "Procesamiento de documentos",
    ],
    featured: false,
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Creamos experiencias digitales rápidas, accesibles y diseñadas para convertir visitantes en clientes.",
    features: [
      "Webs corporativas",
      "Landing pages de alto rendimiento",
      "E-commerce",
    ],
    featured: false,
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Optimizamos tu presencia en Google con estrategias técnicas y de contenido que generan tráfico cualificado de forma sostenible.",
    features: [
      "SEO técnico",
      "Estrategia de contenidos",
      "Core Web Vitals",
    ],
    featured: false,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Servicios diseñados para{" "}
            <span className="text-primary">impulsar tu negocio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            No vendemos herramientas, vendemos resultados medibles. Cada servicio
            está pensado para generar impacto real en tu empresa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col rounded-2xl border p-8 transition-all hover:shadow-lg ${
                service.featured
                  ? "border-primary/20 bg-primary/5 lg:col-span-1 md:col-span-2 lg:col-span-1"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Servicio estrella
                </span>
              )}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl mb-6 ${
                  service.featured
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 flex-1">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center justify-start text-sm font-medium text-primary hover:text-primary/80 transition-colors group/btn"
              >
                Saber más
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
