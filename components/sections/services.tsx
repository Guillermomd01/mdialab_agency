import {
  Brain,
  Code2,
  Search,
  Workflow,
  Rocket,
  ArrowRight,
} from "lucide-react";

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
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-[#2D2A1B] sm:text-4xl">
            Servicios diseñados para{" "}
            <span className="text-[#58521D]">impulsar tu negocio</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mt-4 text-lg text-stone-600">
            No vendemos herramientas, vendemos resultados medibles. Cada servicio
            está pensado para generar impacto real en tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-2xl border p-8 transition-all hover:shadow-lg ${
                service.featured
                  ? "border-[#58521D]/20 bg-[#58521D]/5 md:col-span-2 lg:col-span-1"
                  : "border-stone-200 bg-white hover:border-[#58521D]/20"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-[#58521D] px-3 py-1 text-xs font-medium text-white">
                  Servicio estrella
                </span>
              )}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl mb-6 ${
                  service.featured
                    ? "bg-[#58521D] text-white"
                    : "bg-[#58521D]/10 text-[#58521D]"
                }`}
              >
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold text-[#2D2A1B] mb-3">
                {service.title}
              </h3>

              <p className="text-stone-600 mb-6 flex-1">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-stone-600"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#D4C97A]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center justify-start text-sm font-medium text-[#58521D] hover:text-[#4A4518] transition-colors group/btn"
              >
                Saber más
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
