"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Globe } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "50+",
    label: "Empresas asesoradas",
    description: "Desde startups hasta corporaciones",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "Mejora promedio",
    description: "En productividad tras implementación",
  },
  {
    icon: Zap,
    value: "40%",
    label: "Reducción de costes",
    description: "En procesos automatizados",
  },
  {
    icon: Globe,
    value: "98%",
    label: "Satisfacción cliente",
    description: "Basado en encuestas post-proyecto",
  },
];

export function Metrics() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <metric.icon className="h-6 w-6" />
              </div>
              <dt className="text-3xl font-bold tracking-tight text-foreground">
                {metric.value}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">
                {metric.label}
              </dd>
              <p className="mt-1 text-xs text-muted-foreground">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
