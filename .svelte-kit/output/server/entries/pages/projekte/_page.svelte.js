import { ae as head, b as attr } from "../../../chunks/index2.js";
import { S as Section, R as Reveal } from "../../../chunks/Section.js";
import { G as Gallery, g as gallery } from "../../../chunks/gallery.js";
function _page($$renderer) {
  const canonical = "https://DEINE-DOMAIN.de/projekte";
  head("cv8cip", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Projekte – Vorher/Nachher Galerie</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Galerie mit echten Vorher/Nachher Projekten aus Dachsanierung, Steinteppich und Spezialverfugung."/> <link rel="canonical"${attr("href", canonical)}/>`);
  });
  Section($$renderer, {
    eyebrow: "Projekte",
    title: "Vorher, Nachher und echte Ausführung.",
    subtitle: "Die Referenzen sind jetzt klarer geordnet: Dachsanierung, Steinteppich, Spezialverfugung und echte Vorher/Nachher-Motive.",
    children: ($$renderer2) => {
      Reveal($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="section-shell mb-8 grid gap-4 p-5 text-sm text-slate-600 md:grid-cols-3 md:p-6"><div><div class="font-semibold text-slate-950">Dachsanierung</div> <p class="mt-2 leading-7">Mit den neuen Dachbildern und den bestehenden Referenzen als sichtbar belegter Bereich.</p></div> <div><div class="font-semibold text-slate-950">Steinteppich</div> <p class="mt-2 leading-7">Treppen, Flächen und Details mit der stärksten visuellen Präsenz im Projektbestand.</p></div> <div><div class="font-semibold text-slate-950">Spezialverfugung</div> <p class="mt-2 leading-7">Außenflächen wurden vorsichtig dieser Leistung zugeordnet, weil sie am besten zur Bildsprache passen.</p></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Gallery($$renderer2, { items: gallery });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
