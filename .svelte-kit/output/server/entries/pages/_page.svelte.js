import { b as attr, f as bind_props, a as ensure_array_like, e as escape_html, ae as head, d as stringify } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
import { S as Section } from "../../chunks/Section.js";
import { G as Gallery, g as gallery } from "../../chunks/gallery.js";
import { s as services } from "../../chunks/services.js";
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let whatsapp = $$props["whatsapp"];
    const wa = "https://wa.me/" + whatsapp.replace(/\D/g, "");
    $$renderer2.push(`<section class="relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white"></div> <div class="relative mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20 md:pb-16"><div class="grid items-center gap-10 md:grid-cols-2"><div class="space-y-6"><div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"><span class="h-2 w-2 rounded-full bg-emerald-500"></span> Schnell • Sauber • Zuverlässig</div> <h1 class="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Außen wie neu — <span class="text-slate-500">Fassade, Dach, Pflaster</span> &amp; Steinteppich.</h1> <p class="text-base leading-relaxed text-slate-600 md:text-lg">Moderne Handwerksleistung in Augsburg / München &amp; Umgebung. Von der Dach- und Pflasterreinigung bis zum
          Fassaden- und Holzschutz — inklusive Steinteppich für Treppen und Eingänge.</p> <div class="flex flex-col gap-3 sm:flex-row"><a href="/kontakt#anfrage" class="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">Kostenlose Anfrage `);
    Icon($$renderer2, { name: "arrow", className: "h-4 w-4" });
    $$renderer2.push(`<!----></a> <a${attr("href", wa)} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">`);
    Icon($$renderer2, { name: "whatsapp", className: "h-4 w-4" });
    $$renderer2.push(`<!----> WhatsApp</a></div> <div class="grid gap-3 sm:grid-cols-3"><div class="rounded-2xl border border-slate-200 bg-white p-4"><div class="text-sm font-semibold">Sauber</div> <div class="mt-1 text-xs text-slate-600">Schutzfolien &amp; ordentliche Baustelle</div></div> <div class="rounded-2xl border border-slate-200 bg-white p-4"><div class="text-sm font-semibold">Schnell</div> <div class="mt-1 text-xs text-slate-600">Termintreu, klare Abläufe</div></div> <div class="rounded-2xl border border-slate-200 bg-white p-4"><div class="text-sm font-semibold">Modern</div> <div class="mt-1 text-xs text-slate-600">Zeitgemäße Materialien &amp; Optik</div></div></div></div> <div class="relative"><div class="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-100 via-white to-emerald-100 blur-2xl opacity-80"></div> <div class="relative grid gap-3 rounded-[2.5rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5"><img src="/images/augsburg-munchen-germany-9-800.webp" alt="Steinteppich Treppe" class="aspect-[4/3] w-full rounded-3xl object-cover" loading="eager"/> <div class="grid grid-cols-2 gap-3"><img src="/images/augsburg-munchen-germany-12-800.webp" alt="Treppe vorher" class="h-32 w-full rounded-3xl object-cover" loading="lazy"/> <img src="/images/augsburg-munchen-germany-5-800.webp" alt="Treppe nachher" class="h-32 w-full rounded-3xl object-cover" loading="lazy"/></div></div></div></div></div></section>`);
    bind_props($$props, { whatsapp });
  });
}
function ServiceGrid($$renderer, $$props) {
  let services2 = $$props["services"];
  $$renderer.push(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
  const each_array = ensure_array_like(services2);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let s = each_array[$$index_1];
    $$renderer.push(`<a${attr("href", "/leistungen#" + s.id)} class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:shadow-slate-900/5 transition"><div class="flex items-start gap-3"><div class="rounded-2xl bg-slate-900 p-2 text-white">`);
    Icon($$renderer, { name: s.icon, className: "h-5 w-5" });
    $$renderer.push(`<!----></div> <div class="min-w-0"><div class="text-lg font-semibold tracking-tight">${escape_html(s.title)}</div> <p class="mt-2 text-sm leading-relaxed text-slate-600">${escape_html(s.short)}</p></div></div> <ul class="mt-4 space-y-2 text-sm text-slate-700"><!--[-->`);
    const each_array_1 = ensure_array_like(s.bullets);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let b = each_array_1[$$index];
      $$renderer.push(`<li class="flex items-start gap-2"><span class="mt-0.5 text-emerald-600">`);
      Icon($$renderer, { name: "check", className: "h-4 w-4" });
      $$renderer.push(`<!----></span> <span>${escape_html(b)}</span></li>`);
    }
    $$renderer.push(`<!--]--></ul> <div class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">Mehr erfahren `);
    Icon($$renderer, {
      name: "arrow",
      className: "h-4 w-4 transition group-hover:translate-x-0.5"
    });
    $$renderer.push(`<!----></div></a>`);
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { services: services2 });
}
function _page($$renderer) {
  const brand = {
    name: "Maler- & Reinigungsservice",
    whatsapp: "+49 000 000000"
  };
  const canonical = "https://DEINE-DOMAIN.de/";
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(brand.name)} – Fassade, Dach, Pflaster, Holz &amp; Steinteppich</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Fassaden streichen, Dachreinigung, Pflaster reinigen, Holz streichen und Steinteppich – modern, sauber, zuverlässig in Augsburg / München &amp; Umgebung."/> <link rel="canonical"${attr("href", canonical)}/> <meta property="og:title"${attr("content", `${stringify(brand.name)} – Modernes Handwerk`)}/> <meta property="og:description" content="Fassade, Dach, Pflaster, Holz &amp; Steinteppich. Kostenlose Anfrage per Formular oder WhatsApp."/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", canonical)}/> <meta property="og:image" content="https://DEINE-DOMAIN.de/images/augsburg-munchen-germany-12.webp"/> `);
    $$renderer2.push(`<script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: brand.name,
      areaServed: brand.area,
      telephone: brand.phone,
      url: canonical,
      image: 'https://DEINE-DOMAIN.de/images/augsburg-munchen-germany-12.webp',
      priceRange: '€€',
      sameAs: ['https://wa.me/' + brand.whatsapp.replace(/\\D/g, '')]
    })}
  <\/script>`);
  });
  Hero($$renderer, { whatsapp: brand.whatsapp });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    title: "Leistungen",
    subtitle: "Alles aus einer Hand – klare Abläufe, saubere Ergebnisse.",
    children: ($$renderer2) => {
      ServiceGrid($$renderer2, { services });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    title: "Vorher / Nachher",
    subtitle: "Ein Blick auf echte Ergebnisse aus unseren Projekten.",
    children: ($$renderer2) => {
      Gallery($$renderer2, { items: gallery });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <section class="py-16 md:py-20"><div class="mx-auto max-w-6xl px-4"><div class="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white md:p-10"><div class="grid items-center gap-6 md:grid-cols-2"><div class="space-y-3"><div class="text-2xl font-semibold tracking-tight">Kostenlose Besichtigung &amp; Angebot</div> <p class="text-white/80">Schicken Sie uns kurz Fotos oder eine Beschreibung – wir melden uns schnell und transparent.</p></div> <div class="flex flex-col gap-3 sm:flex-row md:justify-end"><a href="/kontakt#anfrage" class="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">Anfrage starten</a> <a${attr("href", "https://wa.me/" + brand.whatsapp.replace(/\D/g, ""))} target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15">WhatsApp</a></div></div></div></div></section>`);
}
export {
  _page as default
};
