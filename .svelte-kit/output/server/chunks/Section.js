import { af as fallback, b as attr, e as escape_html, h as slot, f as bind_props } from "./index2.js";
function Section($$renderer, $$props) {
  let title = $$props["title"];
  let subtitle = fallback($$props["subtitle"], void 0);
  let id = fallback($$props["id"], void 0);
  $$renderer.push(`<section${attr("id", id)} class="py-14 md:py-20"><div class="mx-auto max-w-6xl px-4"><div class="max-w-3xl"><h2 class="text-2xl font-semibold tracking-tight md:text-3xl">${escape_html(title)}</h2> `);
  if (subtitle) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">${escape_html(subtitle)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div> <div class="mt-10"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div></div></section>`);
  bind_props($$props, { title, subtitle, id });
}
export {
  Section as S
};
