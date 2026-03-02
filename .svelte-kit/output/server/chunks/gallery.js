import { a as ensure_array_like, c as attr_class, e as escape_html, b as attr, f as bind_props, d as stringify } from "./index2.js";
function Gallery($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let tags, filtered;
    let items = $$props["items"];
    let activeTag = "Alle";
    tags = ["Alle", ...Array.from(new Set(items.map((i) => i.tag)))];
    filtered = items;
    $$renderer2.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let t = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class(`rounded-full border px-3 py-1 text-sm font-semibold transition ${stringify(activeTag === t ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50")}`)}>${escape_html(t)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
    const each_array_1 = ensure_array_like(filtered);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let it = each_array_1[$$index_1];
      $$renderer2.push(`<button type="button" class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><img${attr("src", it.thumb)}${attr("alt", it.alt)} class="h-56 w-full object-cover transition group-hover:scale-[1.02]" loading="lazy"/> <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100"></div> <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2"><span class="truncate rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">${escape_html(it.alt)}</span> <span class="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">${escape_html(it.tag)}</span></div></button>`);
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
  { src: "/images/augsburg-munchen-germany-1.webp", thumb: "/images/augsburg-munchen-germany-1-800.webp", alt: "Steinteppich-Treppe – Detail", tag: "Steinteppich" },
  { src: "/images/augsburg-munchen-germany-2.webp", thumb: "/images/augsburg-munchen-germany-2-800.webp", alt: "Dachreinigung – Vorher", tag: "Dach" },
  { src: "/images/augsburg-munchen-germany-3.webp", thumb: "/images/augsburg-munchen-germany-3-800.webp", alt: "Dach – Nachher", tag: "Dach" },
  { src: "/images/augsburg-munchen-germany-4.webp", thumb: "/images/augsburg-munchen-germany-4-800.webp", alt: "Treppe – Vorher", tag: "Vorher/Nachher" },
  { src: "/images/augsburg-munchen-germany-5.webp", thumb: "/images/augsburg-munchen-germany-5-800.webp", alt: "Treppe – Nachher (Steinteppich)", tag: "Steinteppich" },
  { src: "/images/augsburg-munchen-germany-6.webp", thumb: "/images/augsburg-munchen-germany-6-800.webp", alt: "Steinteppich – Fläche", tag: "Außenbereich" },
  { src: "/images/augsburg-munchen-germany-7.webp", thumb: "/images/augsburg-munchen-germany-7-800.webp", alt: "Steinteppich – Rampe / Eingang", tag: "Außenbereich" },
  { src: "/images/augsburg-munchen-germany-8.webp", thumb: "/images/augsburg-munchen-germany-8-800.webp", alt: "Pflaster reinigen – Vorher", tag: "Vorher/Nachher" },
  { src: "/images/augsburg-munchen-germany-9.webp", thumb: "/images/augsburg-munchen-germany-9-800.webp", alt: "Pflaster – Vorher (Gesamt)", tag: "Vorher/Nachher" },
  { src: "/images/augsburg-munchen-germany-10.webp", thumb: "/images/augsburg-munchen-germany-10-800.webp", alt: "Treppe – Vorbereitung", tag: "Steinteppich" },
  { src: "/images/augsburg-munchen-germany-11.webp", thumb: "/images/augsburg-munchen-germany-11-800.webp", alt: "Treppe – Steinteppich (Detail)", tag: "Steinteppich" },
  { src: "/images/augsburg-munchen-germany-12.webp", thumb: "/images/augsburg-munchen-germany-12-800.webp", alt: "Treppe – Steinteppich (Final)", tag: "Steinteppich" }
];
export {
  Gallery as G,
  gallery as g
};
