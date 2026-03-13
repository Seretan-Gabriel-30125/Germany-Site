import { f as bind_props, b as attr, a as ensure_array_like, e as escape_html, ae as head, d as stringify } from "../../chunks/index2.js";
import { R as Reveal, S as Section } from "../../chunks/Section.js";
import { I as Icon } from "../../chunks/Icon.js";
import { G as Gallery, g as gallery } from "../../chunks/gallery.js";
import { s as services } from "../../chunks/services.js";
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let whatsapp = $$props["whatsapp"];
    const wa = "https://wa.me/" + whatsapp.replace(/\D/g, "");
    $$renderer2.push(`<section class="relative overflow-hidden px-4 pt-6 md:pt-10"><div class="mx-auto max-w-7xl"><div class="section-shell relative overflow-hidden px-5 py-8 md:px-10 md:py-12"><div class="hero-orb absolute -left-10 top-12 h-32 w-32 rounded-full bg-clay-200/60 blur-3xl"></div> <div class="hero-orb delay absolute right-0 top-0 h-40 w-40 rounded-full bg-pine-200/60 blur-3xl"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_42%)]"></div> <div class="relative grid items-center gap-10 lg:grid-cols-[1.02fr,0.98fr] lg:gap-12"><div class="space-y-7">`);
    Reveal($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700 soft-ring"><span class="h-2.5 w-2.5 rounded-full bg-clay-500"></span> AD Haussanierung · Der Profi rund ums Haus</div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Reveal($$renderer2, {
      delay: 70,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-5"><h1 class="font-display text-4xl leading-none tracking-tight text-slate-950 md:text-6xl">Moderne Haussanierung mit echtem Vorher/Nachher-Effekt.</h1> <p class="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">Dachsanierung, Steinteppich, Spezialverfugung und weitere Leistungen rund ums Haus. Mobil, schnell erreichbar und mit einem Auftritt, der auch auf dem Telefon stark wirkt.</p></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Reveal($$renderer2, {
      delay: 140,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex flex-col gap-3 sm:flex-row"><a href="/kontakt#anfrage" class="inline-flex items-center justify-center gap-2 rounded-[1.35rem] bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-900">Kostenlose Beratung starten `);
        Icon($$renderer3, { name: "arrow", className: "h-4 w-4" });
        $$renderer3.push(`<!----></a> <a${attr("href", wa)} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-[1.35rem] border border-sand-300 bg-white/90 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white">`);
        Icon($$renderer3, { name: "whatsapp", className: "h-4 w-4" });
        $$renderer3.push(`<!----> Direkt per WhatsApp</a></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Reveal($$renderer2, {
      delay: 210,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-3 sm:grid-cols-3"><div class="rounded-[1.6rem] border border-sand-300 bg-white/88 p-4"><div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Region</div> <div class="mt-2 text-sm font-semibold text-slate-900">Augsburg / München</div></div> <div class="rounded-[1.6rem] border border-sand-300 bg-white/88 p-4"><div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Kontakt</div> <div class="mt-2 text-sm font-semibold text-slate-900">Telefon &amp; WhatsApp</div></div> <div class="rounded-[1.6rem] border border-sand-300 bg-white/88 p-4"><div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Fokus</div> <div class="mt-2 text-sm font-semibold text-slate-900">Starke Außenwirkung</div></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> `);
    Reveal($$renderer2, {
      delay: 120,
      className: "relative",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="relative mx-auto max-w-xl"><div class="absolute -left-4 top-8 hidden rounded-[1.6rem] border border-white/60 bg-white/85 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur md:block"><div class="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Dokumentiert</div> <div class="mt-2 text-sm font-semibold text-slate-950">Echte Dach- und Steinteppich-Referenzen</div></div> <div class="relative grid gap-3 rounded-[2.2rem] border border-sand-300 bg-white/90 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)]"><img src="/images/dachreinigung-nachher-1.jpg" alt="Dachsanierung nach der Aufbereitung" class="aspect-[4/3] w-full rounded-[1.6rem] object-cover" loading="eager"/> <div class="grid grid-cols-2 gap-3"><img src="/images/augsburg-munchen-germany-12-800.webp" alt="Steinteppich Referenz" class="h-36 w-full rounded-[1.4rem] object-cover md:h-40" loading="lazy"/> <img src="/images/dachreinigung-vergleich-1.jpg" alt="Dach Vorher Nachher Vergleich" class="h-36 w-full rounded-[1.4rem] object-cover md:h-40" loading="lazy"/></div></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div></div></section>`);
    bind_props($$props, { whatsapp });
  });
}
function ServiceShowcase($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let services2 = $$props["services"];
    $$renderer2.push(`<section class="relative py-16 md:py-24"><div class="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.7fr,1.3fr] lg:gap-10">`);
    Reveal($$renderer2, {
      className: "lg:sticky lg:top-24 lg:self-start",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="section-shell p-6 md:p-7"><div class="space-y-5"><div class="inline-flex items-center gap-2 rounded-full bg-clay-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-clay-800">Leistungen</div> <h2 class="font-display text-3xl tracking-tight text-slate-950 md:text-5xl">Alles aus einer Hand.</h2> <p class="max-w-md text-sm leading-7 text-slate-600 md:text-base">Einfach nach unten scrollen und die Leistungen kurz erfassen.</p> <div class="grid gap-3"><div class="rounded-[1.5rem] bg-sand-100 px-4 py-4"><div class="text-2xl font-display font-semibold text-slate-950">${escape_html(services2.length)}</div> <div class="mt-1 text-sm text-slate-600">Leistungen</div></div> <a href="/kontakt#anfrage" class="inline-flex items-center justify-center rounded-[1.25rem] bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">Anfrage starten</a></div></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <div class="space-y-4"><!--[-->`);
    const each_array = ensure_array_like(services2);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let service = each_array[index];
      Reveal($$renderer2, {
        delay: index * 45,
        children: ($$renderer3) => {
          $$renderer3.push(`<article${attr("id", service.id)} class="section-shell flex items-start gap-4 p-5 md:p-6"><div class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">`);
          Icon($$renderer3, { name: service.icon, className: "h-5 w-5" });
          $$renderer3.push(`<!----></div> <div class="min-w-0"><div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-700">${escape_html(String(index + 1).padStart(2, "0"))}</div> <h3 class="mt-2 font-display text-2xl tracking-tight text-slate-950 md:text-3xl">${escape_html(service.title)}</h3> <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">${escape_html(service.short)}</p></div></article>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    bind_props($$props, { services: services2 });
  });
}
function _page($$renderer) {
  const brand = {
    name: "AD HAUSSANIERUNG",
    whatsapp: "+49 155 11501468"
  };
  const canonical = "https://DEINE-DOMAIN.de/";
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(brand.name)} – Dachsanierung, Fassade, Spezialverfugung &amp; Steinteppich</title>`);
    });
    $$renderer2.push(`<meta name="description" content="AD Haussanierung bietet Dachsanierung, Fassadenanstrich und Reinigung, Spezialverfugung, Holzanstriche, Mauertrockenlegung und Steinteppich in Augsburg / München &amp; Umgebung."/> <link rel="canonical"${attr("href", canonical)}/> <meta property="og:title"${attr("content", `${stringify(brand.name)} – Modernes Handwerk`)}/> <meta property="og:description" content="Dachsanierung, Fassadenanstrich, Spezialverfugung und Steinteppich. Kostenlose Anfrage per Formular oder WhatsApp."/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", canonical)}/> <meta property="og:image" content="https://DEINE-DOMAIN.de/images/augsburg-munchen-germany-12.webp"/> `);
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
  ServiceShowcase($$renderer, { services });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    eyebrow: "Referenzen",
    title: "Echte Projekte.",
    subtitle: "Klare Bilder, saubere Referenzen und echte Vorher/Nachher-Momente.",
    children: ($$renderer2) => {
      Gallery($$renderer2, { items: gallery });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <section class="py-16 md:py-20"><div class="mx-auto max-w-7xl px-4">`);
  Reveal($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="overflow-hidden rounded-[2.2rem] border border-slate-900/10 bg-slate-950 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]"><div class="grid items-stretch gap-0 lg:grid-cols-[0.95fr,1.05fr]"><div class="flex flex-col justify-center space-y-6 p-7 md:p-10"><div class="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">Kostenlose Anfrage</div> <div class="font-display text-3xl tracking-tight md:text-5xl">Fotos schicken. Angebot bekommen.</div> <p class="max-w-xl text-sm leading-7 text-white/78 md:text-base">Kurz per WhatsApp oder direkt per Formular. Schnell, unkompliziert und mobil perfekt nutzbar.</p> <div class="flex flex-col gap-3 sm:flex-row"><a href="/kontakt#anfrage" class="inline-flex items-center justify-center rounded-[1.25rem] bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">Anfrage starten</a> <a${attr("href", "https://wa.me/" + brand.whatsapp.replace(/\D/g, ""))} target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-[1.25rem] border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">WhatsApp öffnen</a></div></div> <div class="relative min-h-[320px]"><img src="/images/augsburg-munchen-germany-12.webp" alt="Steinteppich Referenz" class="absolute inset-0 h-full w-full object-cover"/> <div class="absolute inset-0 bg-gradient-to-r from-slate-950/18 via-slate-950/20 to-slate-950/70"></div> <div class="absolute bottom-5 left-5 right-5 grid gap-3 sm:max-w-sm"><div class="rounded-[1.4rem] bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur">WhatsApp und Formular direkt verfügbar</div> <div class="rounded-[1.4rem] bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur">Ideal mit 2 bis 3 Fotos vom Objekt</div></div></div></div></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
