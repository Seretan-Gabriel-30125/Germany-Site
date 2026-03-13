import { a as ensure_array_like, b as attr, e as escape_html, f as bind_props, ae as head } from "../../../chunks/index2.js";
import { R as Reveal, S as Section } from "../../../chunks/Section.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { s as services } from "../../../chunks/services.js";
function ServiceGrid($$renderer, $$props) {
  let services2 = $$props["services"];
  $$renderer.push(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
  const each_array = ensure_array_like(services2);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let s = each_array[index];
    Reveal($$renderer, {
      delay: index * 60,
      children: ($$renderer2) => {
        $$renderer2.push(`<a${attr("id", s.id)}${attr("href", "/leistungen#" + s.id)} class="group section-shell scroll-mt-28 flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]"><div class="flex items-start gap-3"><div class="rounded-2xl bg-slate-950 p-3 text-white">`);
        Icon($$renderer2, { name: s.icon, className: "h-5 w-5" });
        $$renderer2.push(`<!----></div> <div class="min-w-0"><div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-700">${escape_html(s.highlight)}</div> <div class="mt-2 font-display text-xl tracking-tight text-slate-950">${escape_html(s.title)}</div> <p class="mt-3 text-sm leading-7 text-slate-600">${escape_html(s.short)}</p></div></div> <ul class="mt-5 grid gap-2 text-sm text-slate-700"><!--[-->`);
        const each_array_1 = ensure_array_like(s.bullets);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let b = each_array_1[$$index];
          $$renderer2.push(`<li class="flex items-start gap-2 rounded-2xl bg-sand-50 px-3 py-2"><span class="mt-0.5 text-clay-600">`);
          Icon($$renderer2, { name: "check", className: "h-4 w-4" });
          $$renderer2.push(`<!----></span> <span>${escape_html(b)}</span></li>`);
        }
        $$renderer2.push(`<!--]--></ul> <div class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">Mehr erfahren `);
        Icon($$renderer2, {
          name: "arrow",
          className: "h-4 w-4 transition group-hover:translate-x-0.5"
        });
        $$renderer2.push(`<!----></div></a>`);
      },
      $$slots: { default: true }
    });
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { services: services2 });
}
function _page($$renderer) {
  const canonical = "https://DEINE-DOMAIN.de/leistungen";
  head("1786dw5", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Leistungen – Dachsanierung, Fassade, Spezialverfugung &amp; Steinteppich</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Übersicht der Leistungen: kostenlose Beratung, Dachsanierung, Flachdachsanierung, Fassadenanstrich und Reinigung, Mauertrockenlegung, Holzanstriche, Spezialverfugung und Steinteppich."/> <link rel="canonical"${attr("href", canonical)}/>`);
  });
  Section($$renderer, {
    eyebrow: "Leistungen",
    title: "Das bietet AD Haussanierung.",
    subtitle: "Klar gegliedert, schnell erfassbar und mit Referenzen dort, wo echte Bilder vorhanden sind.",
    children: ($$renderer2) => {
      ServiceGrid($$renderer2, { services });
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
