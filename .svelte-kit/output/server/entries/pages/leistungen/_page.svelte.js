import { ae as head, b as attr, a as ensure_array_like, e as escape_html } from "../../../chunks/index2.js";
import { S as Section } from "../../../chunks/Section.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { s as services } from "../../../chunks/services.js";
function _page($$renderer) {
  const canonical = "https://DEINE-DOMAIN.de/leistungen";
  head("1786dw5", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Leistungen – Fassade, Dach, Pflaster, Holz &amp; Steinteppich</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Übersicht unserer Leistungen: Fassaden streichen, Dachreinigung, Pflaster reinigen, Holz streichen und Steinteppich."/> <link rel="canonical"${attr("href", canonical)}/>`);
  });
  Section($$renderer, {
    title: "Leistungen",
    subtitle: "Transparent, sauber und modern – hier finden Sie alle Leistungen im Detail.",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-6"><!--[-->`);
      const each_array = ensure_array_like(services);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let s = each_array[$$index_1];
        $$renderer2.push(`<article${attr("id", s.id)} class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24"><div class="flex items-start gap-3"><div class="rounded-2xl bg-slate-900 p-2 text-white">`);
        Icon($$renderer2, { name: s.icon, className: "h-5 w-5" });
        $$renderer2.push(`<!----></div> <div class="min-w-0"><h2 class="text-xl font-semibold tracking-tight">${escape_html(s.title)}</h2> <p class="mt-2 text-sm leading-relaxed text-slate-600">${escape_html(s.short)}</p></div></div> <div class="mt-4 grid gap-3 md:grid-cols-2"><ul class="space-y-2 text-sm text-slate-700"><!--[-->`);
        const each_array_1 = ensure_array_like(s.bullets);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let b = each_array_1[$$index];
          $$renderer2.push(`<li class="flex items-start gap-2"><span class="mt-0.5 text-emerald-600">`);
          Icon($$renderer2, { name: "check", className: "h-4 w-4" });
          $$renderer2.push(`<!----></span> <span>${escape_html(b)}</span></li>`);
        }
        $$renderer2.push(`<!--]--></ul> <div class="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700"><div class="font-semibold">Typischer Ablauf</div> <ol class="mt-2 list-decimal pl-5 space-y-1"><li>Kurze Anfrage (Fotos reichen)</li> <li>Besichtigung / Aufmaß</li> <li>Festes Angebot</li> <li>Ausführung &amp; Übergabe</li></ol></div></div> <div class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"><a href="/kontakt#anfrage" class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Angebot anfragen</a> <a href="/projekte" class="text-sm font-semibold text-slate-700 hover:underline">Beispiele ansehen →</a></div></article>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
