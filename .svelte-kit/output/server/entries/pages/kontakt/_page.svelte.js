import { af as fallback, b as attr, e as escape_html, f as bind_props, ae as head } from "../../../chunks/index2.js";
import { S as Section } from "../../../chunks/Section.js";
import { I as Icon } from "../../../chunks/Icon.js";
function ContactForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let whatsapp = $$props["whatsapp"];
    let formspreeEndpoint = fallback($$props["formspreeEndpoint"], null);
    let apiEndpoint = fallback($$props["apiEndpoint"], "/api/anfrage");
    let status = "idle";
    const clean = (v) => v.replace(/\D/g, "");
    const wa = "https://wa.me/" + clean(whatsapp);
    $$renderer2.push(`<form class="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" id="anfrage"><div class="grid gap-4 md:grid-cols-2"><label class="grid gap-1"><span class="text-sm font-semibold">Name</span> <input name="name" required="" class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"/></label> <label class="grid gap-1"><span class="text-sm font-semibold">Telefon</span> <input name="phone" required="" class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"/></label> <label class="grid gap-1 md:col-span-2"><span class="text-sm font-semibold">E‑Mail (optional)</span> <input name="email" type="email" class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"/></label> <label class="grid gap-1 md:col-span-2"><span class="text-sm font-semibold">Leistung</span> <select name="service" required="" class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400">`);
    $$renderer2.option({ value: "" }, ($$renderer3) => {
      $$renderer3.push(`Bitte wählen…`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Fassaden streichen`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Dachreinigung`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Pflaster reinigen`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Holz streichen`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Steinteppich`);
    });
    $$renderer2.push(`</select></label> <label class="grid gap-1 md:col-span-2"><span class="text-sm font-semibold">Nachricht</span> <textarea name="message" rows="5" required="" class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"></textarea></label></div> <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"${attr("disabled", status === "sending", true)}>${escape_html("Anfrage senden")}</button> <a${attr("href", wa)} target="_blank" rel="noopener" class="text-sm font-semibold text-emerald-700 hover:underline">oder direkt per WhatsApp schreiben →</a></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <p class="text-xs text-slate-500">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Beantwortung der Anfrage zu.</p></form>`);
    bind_props($$props, { whatsapp, formspreeEndpoint, apiEndpoint });
  });
}
function _page($$renderer) {
  const brand = {
    phone: "+49 155 11501468",
    // TODO
    whatsapp: "+49 155 11501468",
    // TODO
    email: "info@DEINE-DOMAIN.de",
    // TODO
    area: "Augsburg / München & Umgebung"
  };
  const formspreeEndpoint = null;
  const canonical = "https://DEINE-DOMAIN.de/kontakt";
  head("wkxllv", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Kontakt – Kostenlose Anfrage</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Kontaktieren Sie uns schnell per Formular oder WhatsApp. Augsburg / München &amp; Umgebung."/> <link rel="canonical"${attr("href", canonical)}/>`);
  });
  Section($$renderer, {
    title: "Kontakt",
    subtitle: "Schnelle Antwort – am liebsten per WhatsApp, alternativ per Formular.",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-6 lg:grid-cols-2">`);
      ContactForm($$renderer2, { whatsapp: brand.whatsapp, formspreeEndpoint });
      $$renderer2.push(`<!----> <div class="space-y-4"><div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="text-sm font-semibold text-slate-900">Direktkontakt</div> <div class="mt-4 grid gap-3 text-sm text-slate-700"><a class="inline-flex items-center gap-2 hover:underline"${attr("href", "tel:" + brand.phone)}>`);
      Icon($$renderer2, { name: "phone", className: "h-4 w-4" });
      $$renderer2.push(`<!----> ${escape_html(brand.phone)}</a> <a class="inline-flex items-center gap-2 hover:underline"${attr("href", "https://wa.me/" + brand.whatsapp.replace(/\D/g, ""))} target="_blank" rel="noopener">`);
      Icon($$renderer2, { name: "whatsapp", className: "h-4 w-4" });
      $$renderer2.push(`<!----> WhatsApp Chat</a> <a class="inline-flex items-center gap-2 hover:underline"${attr("href", "mailto:" + brand.email)}>`);
      Icon($$renderer2, { name: "mail", className: "h-4 w-4" });
      $$renderer2.push(`<!----> ${escape_html(brand.email)}</a> <div class="inline-flex items-center gap-2">`);
      Icon($$renderer2, { name: "pin", className: "h-4 w-4" });
      $$renderer2.push(`<!----> ${escape_html(brand.area)}</div></div> <div class="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">Tipp: Für ein schnelles Angebot senden Sie bitte <b>2–3 Fotos</b> + kurze Maße / Adresse.</div></div> <div id="impressum" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24"><div class="text-sm font-semibold text-slate-900">Impressum (Template)</div> <p class="mt-3 text-sm text-slate-600">Bitte hier die gesetzlichen Angaben eintragen (Name/Firma, Anschrift, Kontakt, USt-ID, etc.).</p></div> <div id="datenschutz" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24"><div class="text-sm font-semibold text-slate-900">Datenschutz (Template)</div> <p class="mt-3 text-sm text-slate-600">Bitte Datenschutzerklärung ergänzen (Kontaktformular, Tracking, Hosting, Cookies).</p></div></div></div>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
