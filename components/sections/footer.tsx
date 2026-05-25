import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Consultoría de IA", href: "#servicios" },
    { label: "Implementación de IA", href: "#servicios" },
    { label: "Automatización", href: "#servicios" },
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "SEO", href: "#servicios" },
  ],
  empresa: [
    { label: "Proceso de trabajo", href: "#proceso" },
    { label: "Por qué mdialab", href: "#por-que-nosotros" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Aviso legal", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de cookies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#F5F3EB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-[#2D2A1B]">
                mdia<span className="text-[#58521D]">lab</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              Agencia especializada en marketing e inteligencia artificial.
              Transformamos negocios con tecnología y estrategia.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@mdialab.com"
                className="flex items-center gap-2 text-sm text-stone-600 hover:text-[#58521D] transition-colors"
              >
                <Mail className="h-4 w-4" />
                contacto@mdialab.com
              </a>
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <MapPin className="h-4 w-4" />
                España
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#2D2A1B] mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-[#58521D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#2D2A1B] mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-[#58521D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <img
              src="/logo.png"
              alt="mdialab logo"
              className="h-28 w-auto lg:h-36"
              width="144"
              height="144"
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-600">
            © {new Date().getFullYear()} mdialab. Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-stone-600">
            Hecho con{" "}
            <span className="text-[#58521D]" aria-label="amor">
              ♥
            </span>{" "}
            en España
          </p>
        </div>
      </div>
    </footer>
  );
}
