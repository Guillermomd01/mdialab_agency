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
    <section className="py-16 bg-[#F5F3EB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-stone-200 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58521D]/10 text-[#58521D] mb-4">
                <metric.icon className="h-6 w-6" />
              </div>
              <dt className="text-3xl font-bold tracking-tight text-[#2D2A1B]">
                {metric.value}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[#2D2A1B]">
                {metric.label}
              </dd>
              <p className="mt-1 text-xs text-stone-500">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
