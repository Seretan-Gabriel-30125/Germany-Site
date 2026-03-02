import { g as getContext, s as store_get, e as escape_html, a as ensure_array_like, b as attr, c as attr_class, d as stringify, u as unsubscribe_stores, f as bind_props, h as slot } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function SiteHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let path;
    let brand = $$props["brand"];
    const nav = [
      { href: "/", label: "Start" },
      { href: "/leistungen", label: "Leistungen" },
      { href: "/projekte", label: "Projekte" },
      { href: "/kontakt", label: "Kontakt" }
    ];
    let open = false;
    path = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    $$renderer2.push(`<header class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur"><div class="mx-auto max-w-6xl px-4"><div class="flex h-16 items-center justify-between gap-4"><a href="/" class="flex items-center gap-2 font-semibold tracking-tight"><span class="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">DE</span> <span class="hidden sm:block">${escape_html(brand.name)}</span> <span class="sm:hidden">Service</span></a> <nav class="hidden md:flex items-center gap-1"><!--[-->`);
    const each_array = ensure_array_like(nav);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.href)}${attr_class(`rounded-xl px-3 py-2 text-sm font-medium transition ${stringify(path === item.href ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100")}`)}>${escape_html(item.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <div class="hidden md:flex items-center gap-2"><a${attr("href", "tel:" + brand.phone)} class="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">`);
    Icon($$renderer2, { name: "phone", className: "h-4 w-4" });
    $$renderer2.push(`<!----> ${escape_html(brand.phone)}</a> <a${attr("href", "https://wa.me/" + brand.whatsapp.replace(/\D/g, ""))} target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">`);
    Icon($$renderer2, { name: "whatsapp", className: "h-4 w-4" });
    $$renderer2.push(`<!----> WhatsApp</a></div> <button class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200" aria-label="Menü"${attr("aria-expanded", open)}><span class="text-xl">${escape_html("☰")}</span></button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { brand });
  });
}
function SiteFooter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let brand = $$props["brand"];
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="border-t border-slate-200 bg-white"><div class="mx-auto max-w-6xl px-4 py-10"><div class="grid gap-8 md:grid-cols-3"><div class="space-y-3"><div class="text-lg font-semibold">${escape_html(brand.name)}</div> <p class="text-sm text-slate-600">Fassaden • Dach • Pflaster • Holz • Steinteppich — sauber, modern, langlebig.</p></div> <div class="space-y-3"><div class="text-sm font-semibold text-slate-900">Kontakt</div> <div class="grid gap-2 text-sm text-slate-700"><a class="inline-flex items-center gap-2 hover:underline"${attr("href", "tel:" + brand.phone)}>`);
    Icon($$renderer2, { name: "phone", className: "h-4 w-4" });
    $$renderer2.push(`<!----> ${escape_html(brand.phone)}</a> <a class="inline-flex items-center gap-2 hover:underline"${attr("href", "https://wa.me/" + brand.whatsapp.replace(/\D/g, ""))} target="_blank" rel="noopener">`);
    Icon($$renderer2, { name: "whatsapp", className: "h-4 w-4" });
    $$renderer2.push(`<!----> WhatsApp Chat</a> <a class="inline-flex items-center gap-2 hover:underline" href="/kontakt">`);
    Icon($$renderer2, { name: "pin", className: "h-4 w-4" });
    $$renderer2.push(`<!----> Augsburg / München &amp; Umgebung</a></div></div> <div class="space-y-3"><div class="text-sm font-semibold text-slate-900">Rechtliches</div> <div class="grid gap-2 text-sm text-slate-700"><a class="hover:underline" href="/kontakt#impressum">Impressum</a> <a class="hover:underline" href="/kontakt#datenschutz">Datenschutz</a></div></div></div> <div class="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between"><div>© ${escape_html(year)} ${escape_html(brand.name)}. Alle Rechte vorbehalten.</div> <div class="opacity-80">Made with SvelteKit.</div></div></div></footer>`);
    bind_props($$props, { brand });
  });
}
function WhatsAppFab($$renderer, $$props) {
  let phone = $$props["phone"];
  const clean = (v) => v.replace(/\D/g, "");
  $$renderer.push(`<a${attr("href", "https://wa.me/" + clean(phone))} target="_blank" rel="noopener" class="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 active:scale-[0.99]" aria-label="WhatsApp">`);
  Icon($$renderer, { name: "whatsapp", className: "h-5 w-5" });
  $$renderer.push(`<!----> <span class="hidden sm:block">WhatsApp</span></a>`);
  bind_props($$props, { phone });
}
function _layout($$renderer, $$props) {
  const brand = {
    name: "Maler- & Reinigungsservice",
    phone: "+49 000 000000",
    // TODO
    whatsapp: "+49 000 000000"
    // TODO
  };
  $$renderer.push(`<div class="min-h-screen flex flex-col">`);
  SiteHeader($$renderer, { brand });
  $$renderer.push(`<!----> <main class="flex-1"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  SiteFooter($$renderer, { brand });
  $$renderer.push(`<!----> `);
  WhatsAppFab($$renderer, { phone: brand.whatsapp });
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
