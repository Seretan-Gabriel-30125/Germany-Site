import { af as fallback, ah as element, f as bind_props, h as slot, b as attr, c as attr_class, ai as attr_style, e as escape_html } from "./index2.js";
function Reveal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let as = fallback($$props["as"], "div");
    let id = fallback($$props["id"], void 0);
    let className = fallback($$props["className"], "");
    let delay = fallback($$props["delay"], 0);
    let threshold = fallback($$props["threshold"], 0.18);
    element(
      $$renderer2,
      as,
      () => {
        $$renderer2.push(`${attr("id", id)}${attr_class(`reveal ${""} ${className}`)}${attr_style(`transition-delay:${delay}ms;`)}`);
      },
      () => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      }
    );
    bind_props($$props, { as, id, className, delay, threshold });
  });
}
function Section($$renderer, $$props) {
  let title = $$props["title"];
  let subtitle = fallback($$props["subtitle"], void 0);
  let id = fallback($$props["id"], void 0);
  let eyebrow = fallback($$props["eyebrow"], void 0);
  $$renderer.push(`<section${attr("id", id)} class="py-14 md:py-20"><div class="mx-auto max-w-7xl px-4">`);
  Reveal($$renderer, {
    className: "max-w-3xl",
    children: ($$renderer2) => {
      if (eyebrow) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mb-3 inline-flex rounded-full bg-clay-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-clay-800">${escape_html(eyebrow)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <h2 class="font-display text-3xl tracking-tight text-slate-950 md:text-5xl">${escape_html(title)}</h2> `);
      if (subtitle) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="mt-4 text-base leading-8 text-slate-600 md:text-lg">${escape_html(subtitle)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <div class="mt-10"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div></div></section>`);
  bind_props($$props, { title, subtitle, id, eyebrow });
}
export {
  Reveal as R,
  Section as S
};
