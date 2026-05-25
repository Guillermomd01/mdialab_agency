"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Es caro implementar IA en mi empresa?",
    answer:
      "No necesariamente. Empezamos con un diagnóstico gratuito para identificar las oportunidades de mayor impacto y menor coste. Muchas soluciones de IA son accesibles y escalables. Nuestro objetivo es que veas retorno de inversión en el primer trimestre.",
  },
  {
    question: "¿La IA va a sustituir a mi equipo?",
    answer:
      "No, la IA que implementamos está diseñada para potenciar a tu equipo, no para sustituirlo. Eliminamos tareas repetitivas y de bajo valor para que las personas se centren en la creatividad, la estrategia y las relaciones humanas.",
  },
  {
    question: "¿Cuánto tiempo tarda ver resultados?",
    answer:
      "Depende del proyecto, pero en la mayoría de los casos los primeros resultados son visibles en 2-4 semanas. Las automatizaciones simples pueden estar operativas en días, mientras que las implementaciones más complejas siguen un roadmap definido desde el inicio.",
  },
  {
    question: "¿Necesito tener conocimientos técnicos?",
    answer:
      "En absoluto. Nosotros nos encargamos de toda la parte técnica. Te explicamos todo en lenguaje claro y te formamos para que puedas gestionar las herramientas con autonomía. Nuestro valor está en hacer la IA accesible.",
  },
  {
    question: "¿Trabajáis con empresas de cualquier tamaño?",
    answer:
      "Sí. Desde startups que quieren automatizar desde cero hasta empresas consolidadas que buscan optimizar procesos existentes. Adaptamos el alcance y la inversión a tus necesidades reales y a tu presupuesto.",
  },
  {
    question: "¿Qué diferencia a mdialab de otras agencias?",
    answer:
      "La combinación de marketing estratégico e ingeniería de IA en un solo equipo. No somos solo técnicos ni solo marketers: entendemos el negocio y sabemos cómo aplicar la tecnología para que genere resultados reales. Además, trabajamos con total transparencia.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#F5F3EB]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-[#2D2A1B] sm:text-4xl">
            Preguntas <span className="text-[#58521D]">frecuentes</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mt-4 text-lg text-stone-600">
            Resolvemos las dudas más comunes sobre la implementación de IA en
            empresas.
          </p>
        </div>

        <div className="animate-fade-in-up delay-200 rounded-2xl bg-white border border-stone-200 px-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-stone-200 last:border-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#2D2A1B] pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-stone-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`faq-content ${isOpen ? "open" : ""}`}
                >
                  <div>
                    <p className="pb-6 text-stone-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
