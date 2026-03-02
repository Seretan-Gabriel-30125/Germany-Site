import { ae as head, b as attr } from "../../../chunks/index2.js";
import { S as Section } from "../../../chunks/Section.js";
import { G as Gallery, g as gallery } from "../../../chunks/gallery.js";
function _page($$renderer) {
  const canonical = "https://DEINE-DOMAIN.de/projekte";
  head("cv8cip", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Projekte – Vorher/Nachher Galerie</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Galerie mit echten Vorher/Nachher Projekten: Dachreinigung, Pflasterreinigung und Steinteppich."/> <link rel="canonical"${attr("href", canonical)}/>`);
  });
  Section($$renderer, {
    title: "Projekte",
    subtitle: "Echte Fotos – echte Ergebnisse. Filtern Sie nach Kategorie.",
    children: ($$renderer2) => {
      Gallery($$renderer2, { items: gallery });
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
