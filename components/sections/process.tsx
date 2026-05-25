import { Search, Map, Wrench, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tu situación actual, identificamos oportunidades de mejora y definimos objetivos claros y medibles.",
  },
  {
    icon: Map,
    number: "02",
    title: "Estrategia personalizada",
    description:
      "Diseñamos un plan de acción a medida, seleccionando las herramientas y tecnologías que mejor se adaptan a tus necesidades.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Implementación ágil",
    description:
      "Desarrollamos e integramos las soluciones en iteraciones cortas, para que empieces a ver resultados desde el primer día.",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Optimización continua",
    description:
      "Monitorizamos el rendimiento, ajustamos estrategias y escalamos lo que funciona para maximizar tu retorno de inversión.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-[#F5F3EB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-[#2D2A1B] sm:text-4xl">
            Un proceso <span className="text-[#58521D]">transparente</span> y
            sin sorpresas
          </h2>
          <p className="animate-fade-in-up delay-100 mt-4 text-lg text-stone-600">
            Cuatro pasos claros desde el primer contacto hasta los resultados
            medibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-stone-300" />
              )}

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58521D] text-white mb-6 relative">
                  <step.icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#D4C97A] text-[10px] font-bold text-[#2D2A1B]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#2D2A1B] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
