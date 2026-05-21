import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { WhyUs } from "@/components/sections/why-us";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "mdialab",
            url: "https://mdialab.com",
            logo: "https://mdialab.com/logo.png",
            description:
              "Agencia especializada en marketing e inteligencia artificial. Consultoría estratégica de IA, automatización, desarrollo web y SEO.",
            email: "hello@mdialab.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "ES",
            },
            sameAs: [],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de mdialab",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Consultoría Estratégica de IA",
                    description:
                      "Análisis de negocio y diseño de hoja de ruta para integrar inteligencia artificial.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Implementación de IA",
                    description:
                      "Despliegue de modelos de IA, integraciones y soluciones a medida.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Automatización Inteligente",
                    description:
                      "Flujos de trabajo automatizados con IA para eliminar tareas repetitivas.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Desarrollo Web",
                    description:
                      "Experiencias digitales rápidas, accesibles y diseñadas para convertir.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO y Performance",
                    description:
                      "Optimización de presencia en Google con estrategias técnicas y de contenido.",
                  },
                },
              ],
            },
          }),
        }}
      />

      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Es caro implementar IA en mi empresa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No necesariamente. Empezamos con un diagnóstico gratuito para identificar las oportunidades de mayor impacto y menor coste. Muchas soluciones de IA son accesibles y escalables.",
                },
              },
              {
                "@type": "Question",
                name: "¿La IA va a sustituir a mi equipo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, la IA que implementamos está diseñada para potenciar a tu equipo, no para sustituirlo. Eliminamos tareas repetitivas para que las personas se centren en la creatividad y la estrategia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo tarda ver resultados?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En la mayoría de los casos los primeros resultados son visibles en 2-4 semanas. Las automatizaciones simples pueden estar operativas en días.",
                },
              },
            ],
          }),
        }}
      />

      <Navigation />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <Services />
        <Process />
        <WhyUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
