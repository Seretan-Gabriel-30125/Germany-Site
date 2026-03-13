import { a as ensure_array_like, c as attr_class, e as escape_html, b as attr, f as bind_props, d as stringify } from "./index2.js";
import { R as Reveal } from "./Section.js";
function Gallery($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let tags, filtered;
    let items = $$props["items"];
    let activeTag = "Alle";
    tags = ["Alle", ...Array.from(new Set(items.map((i) => i.tag)))];
    filtered = items;
    $$renderer2.push(`<div class="sticky top-[4.4rem] z-20 -mx-4 px-4 py-3 md:top-[5rem]"><div class="mx-auto flex max-w-7xl flex-wrap gap-2 rounded-[1.75rem] border border-sand-300 bg-white/88 p-3 shadow-[0_12px_34px_rgba(15,23,42,0.06)] backdrop-blur"><!--[-->`);
    const each_array = ensure_array_like(tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let t = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class(`rounded-full border px-4 py-2 text-sm font-semibold transition ${stringify(activeTag === t ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/10" : "border-sand-300 bg-sand-50 text-slate-700 hover:bg-white")}`)}>${escape_html(t)}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
    const each_array_1 = ensure_array_like(filtered);
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      let it = each_array_1[index];
      Reveal($$renderer2, {
        delay: index * 40,
        children: ($$renderer3) => {
          $$renderer3.push(`<button type="button" class="group overflow-hidden rounded-[2rem] border border-sand-300 bg-white text-left shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]"><div class="aspect-[4/4.4] overflow-hidden"><img${attr("src", it.thumb)}${attr("alt", it.alt)} class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy"/></div> <div class="space-y-3 p-4"><div class="inline-flex rounded-full bg-sand-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">${escape_html(it.tag)}</div> <div><div class="font-display text-2xl leading-tight text-slate-950">${escape_html(it.title)}</div> <div class="mt-1 text-sm text-slate-600">${escape_html(it.caption)}</div></div></div></button>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { items });
  });
}
const gallery = [
  {
    src: "/images/dachreinigung-vorher-1.jpg",
    thumb: "/images/dachreinigung-vorher-1.jpg",
    alt: "Dachsanierung – Dachfläche vor der Aufbereitung",
    title: "Dach vorher",
    caption: "Vor der Aufbereitung",
    tag: "Dachsanierung",
    service: "dachsanierung"
  },
  {
    src: "/images/dachreinigung-nachher-1.jpg",
    thumb: "/images/dachreinigung-nachher-1.jpg",
    alt: "Dachsanierung – Dachfläche nach der Aufbereitung",
    title: "Dach nachher",
    caption: "Frische, saubere Dachfläche",
    tag: "Dachsanierung",
    service: "dachsanierung"
  },
  {
    src: "/images/dachreinigung-vergleich-1.jpg",
    thumb: "/images/dachreinigung-vergleich-1.jpg",
    alt: "Dachsanierung – Vorher/Nachher im direkten Vergleich",
    title: "Direkter Vergleich",
    caption: "Vorher / Nachher",
    tag: "Vorher/Nachher",
    service: "dachsanierung"
  },
  {
    src: "/images/augsburg-munchen-germany-4.webp",
    thumb: "/images/augsburg-munchen-germany-4-800.webp",
    alt: "Steinteppich – Treppe im Zustand davor",
    title: "Treppe vorher",
    caption: "Vor der Ausführung",
    tag: "Vorher/Nachher",
    service: "steinteppich"
  },
  {
    src: "/images/augsburg-munchen-germany-5.webp",
    thumb: "/images/augsburg-munchen-germany-5-800.webp",
    alt: "Steinteppich – Treppe nach der Ausführung",
    title: "Treppe nachher",
    caption: "Mit Steinteppich",
    tag: "Vorher/Nachher",
    service: "steinteppich"
  },
  {
    src: "/images/augsburg-munchen-germany-10.webp",
    thumb: "/images/augsburg-munchen-germany-10-800.webp",
    alt: "Steinteppich – Vorbereitung der Treppe",
    title: "Vorbereitung",
    caption: "Untergrund und Aufbau",
    tag: "Steinteppich",
    service: "steinteppich"
  },
  {
    src: "/images/augsburg-munchen-germany-11.webp",
    thumb: "/images/augsburg-munchen-germany-11-800.webp",
    alt: "Steinteppich – Detailaufnahme der Oberfläche",
    title: "Oberfläche",
    caption: "Detailaufnahme",
    tag: "Steinteppich",
    service: "steinteppich"
  },
  {
    src: "/images/augsburg-munchen-germany-12.webp",
    thumb: "/images/augsburg-munchen-germany-12-800.webp",
    alt: "Steinteppich – fertige Treppe mit modernem Finish",
    title: "Fertige Treppe",
    caption: "Modernes Finish",
    tag: "Steinteppich",
    service: "steinteppich"
  },
  {
    src: "/images/augsburg-munchen-germany-1.webp",
    thumb: "/images/augsburg-munchen-germany-1-800.webp",
    alt: "Außenbereich – Vorher mit dunklem Pflaster und Belägen",
    title: "Außenbereich vorher",
    caption: "Vor der Aufwertung",
    tag: "Vorher/Nachher",
    service: "spezialverfugung"
  },
  {
    src: "/images/augsburg-munchen-germany-2.webp",
    thumb: "/images/augsburg-munchen-germany-2-800.webp",
    alt: "Außenbereich – Nachher mit sauberem, hellem Gesamtbild",
    title: "Außenbereich nachher",
    caption: "Nach der Aufwertung",
    tag: "Vorher/Nachher",
    service: "spezialverfugung"
  },
  {
    src: "/images/augsburg-munchen-germany-3.webp",
    thumb: "/images/augsburg-munchen-germany-3-800.webp",
    alt: "Dachsanierung – Referenz nach der sichtbaren Aufwertung",
    title: "Referenzdach",
    caption: "Nach der Aufwertung",
    tag: "Dachsanierung",
    service: "dachsanierung"
  },
  {
    src: "/images/augsburg-munchen-germany-6.webp",
    thumb: "/images/augsburg-munchen-germany-6-800.webp",
    alt: "Steinteppich – Außenfläche mit sauberem Abschluss",
    title: "Außenfläche",
    caption: "Mit sauberem Abschluss",
    tag: "Steinteppich",
    service: "steinteppich"
  },
  {
    src: "/images/augsburg-munchen-germany-7.webp",
    thumb: "/images/augsburg-munchen-germany-7-800.webp",
    alt: "Steinteppich – Rampe und Eingangsbereich",
    title: "Eingangsbereich",
    caption: "Rampe und Zugang",
    tag: "Steinteppich",
    service: "steinteppich"
  },
  {
    src: "/images/augsburg-munchen-germany-8.webp",
    thumb: "/images/augsburg-munchen-germany-8-800.webp",
    alt: "Spezialverfugung – Außenfläche vor der Aufwertung",
    title: "Außenfläche vorher",
    caption: "Vor der Aufwertung",
    tag: "Spezialverfugung",
    service: "spezialverfugung"
  },
  {
    src: "/images/augsburg-munchen-germany-9.webp",
    thumb: "/images/augsburg-munchen-germany-9-800.webp",
    alt: "Spezialverfugung – Außenbereich im Bestand",
    title: "Bestand außen",
    caption: "Referenz im Außenbereich",
    tag: "Spezialverfugung",
    service: "spezialverfugung"
  }
];
export {
  Gallery as G,
  gallery as g
};
