"use client";

import { useRef, useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;

    // Validación de campos obligatorios
    const mndFields = ["First Name", "Last Name", "Email", "Description"];
    const fldLabels = ["Nombre", "Apellidos", "Correo electrónico", "Mensaje"];

    for (let i = 0; i < mndFields.length; i++) {
      const field = form.elements.namedItem(mndFields[i]) as HTMLInputElement | HTMLTextAreaElement;
      if (field && field.value.replace(/^\s+|\s+$/g, "").length === 0) {
        alert(fldLabels[i] + " no puede estar vacío.");
        field.focus();
        return;
      }
    }

    // Validación de email
    const emailFld = form.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailFld) {
      const emailVal = emailFld.value.replace(/^\s+|\s+$/g, "");
      if (emailVal.length !== 0) {
        const atpos = emailVal.indexOf("@");
        const dotpos = emailVal.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert("Introduzca una dirección de correo electrónico válida.");
          emailFld.focus();
          return;
        }
      }
    }

    setSubmitting(true);

    const formData = new FormData(form);

    try {
      await fetch("https://crm.zoho.eu/crm/WebToLeadForm", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contacto-form" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#F5F3EB] border border-stone-200 p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#58521D] mb-6">
              <Send className="h-7 w-7 text-[#D4C97A]" />
            </div>
            <h3 className="text-2xl font-bold text-[#2D2A1B] mb-3">
              ¡Mensaje enviado!
            </h3>
            <p className="text-stone-600 mb-8">
              Gracias por contactar con nosotros. Te responderemos en menos de 24 horas.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-[#58521D] text-white hover:bg-[#4A4518] transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto-form" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#2D2A1B] sm:text-4xl">
            Hablemos de tu{" "}
            <span className="text-[#58521D]">proyecto</span>
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor solución.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          acceptCharset="UTF-8"
          className="rounded-2xl bg-[#F5F3EB] border border-stone-200 p-8 sm:p-10"
        >
          {/* Campos ocultos de Zoho */}
          <input type="text" style={{ display: "none" }} name="xnQsjsdp" value="f63cd61f4e7269a852d564f6e5e4a78177d2adff34557ec14a7351e86d1b06ca" readOnly />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input type="text" style={{ display: "none" }} name="xmIwtLD" value="df8d4969099d4280558609071b9cf594b09d200faa34c2b4005cbd3f3f58e40715f5e95839dfa9b4c2af0c20b0e174ab" readOnly />
          <input type="text" style={{ display: "none" }} name="actionType" value="TGVhZHM=" readOnly />
          <input type="text" style={{ display: "none" }} name="returnURL" value="null" readOnly />
          <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" value="" readOnly />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
              <label htmlFor="First_Name" className="block text-sm font-semibold text-[#2D2A1B] mb-2">
                Nombre <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input
                  type="text"
                  id="First_Name"
                  name="First Name"
                  required
                  maxLength={40}
                  aria-required="true"
                  aria-label="First Name"
                  className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-10 pr-4 text-sm text-[#2D2A1B] placeholder-stone-400 focus:border-[#58521D] focus:outline-none focus:ring-1 focus:ring-[#58521D] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
            </div>

            {/* Apellidos */}
            <div>
              <label htmlFor="Last_Name" className="block text-sm font-semibold text-[#2D2A1B] mb-2">
                Apellidos <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input
                  type="text"
                  id="Last_Name"
                  name="Last Name"
                  required
                  maxLength={80}
                  aria-required="true"
                  aria-label="Last Name"
                  className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-10 pr-4 text-sm text-[#2D2A1B] placeholder-stone-400 focus:border-[#58521D] focus:outline-none focus:ring-1 focus:ring-[#58521D] transition-colors"
                  placeholder="Tus apellidos"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="Email" className="block text-sm font-semibold text-[#2D2A1B] mb-2">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  required
                  maxLength={100}
                  aria-required="true"
                  aria-label="Email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-10 pr-4 text-sm text-[#2D2A1B] placeholder-stone-400 focus:border-[#58521D] focus:outline-none focus:ring-1 focus:ring-[#58521D] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="Mobile" className="block text-sm font-semibold text-[#2D2A1B] mb-2">
                Teléfono
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input
                  type="tel"
                  id="Mobile"
                  name="Mobile"
                  maxLength={30}
                  aria-required="false"
                  aria-label="Mobile"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-10 pr-4 text-sm text-[#2D2A1B] placeholder-stone-400 focus:border-[#58521D] focus:outline-none focus:ring-1 focus:ring-[#58521D] transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
          </div>

          {/* Mensaje */}
          <div className="mt-6">
            <label htmlFor="Description" className="block text-sm font-semibold text-[#2D2A1B] mb-2">
              Mensaje <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
              <textarea
                id="Description"
                name="Description"
                required
                aria-required="true"
                aria-label="Description"
                rows={5}
                className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-10 pr-4 text-sm text-[#2D2A1B] placeholder-stone-400 focus:border-[#58521D] focus:outline-none focus:ring-1 focus:ring-[#58521D] transition-colors resize-y"
                placeholder="Cuéntanos sobre tu proyecto, necesidades o cualquier duda que tengas..."
              />
            </div>
          </div>

          {/* Botón enviar */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold bg-[#58521D] text-white hover:bg-[#4A4518] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {submitting ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensaje
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-stone-500">
            Los campos marcados con <span className="text-red-500">*</span> son obligatorios.
          </p>
        </form>
      </div>
    </section>
  );
}
