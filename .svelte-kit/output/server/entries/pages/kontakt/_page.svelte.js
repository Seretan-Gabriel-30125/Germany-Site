import { af as fallback, b as attr, e as escape_html, f as bind_props, ae as head } from "../../../chunks/index2.js";
import { S as Section, R as Reveal } from "../../../chunks/Section.js";
import { I as Icon } from "../../../chunks/Icon.js";
function ContactForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let whatsapp = $$props["whatsapp"];
    let formspreeEndpoint = fallback($$props["formspreeEndpoint"], null);
    let apiEndpoint = fallback($$props["apiEndpoint"], "/api/anfrage");
    let status = "idle";
    const clean = (v) => v.replace(/\D/g, "");
    const wa = "https://wa.me/" + clean(whatsapp);
    $$renderer2.push(`<form class="section-shell grid gap-4 p-6 md:p-7" id="anfrage"><div class="grid gap-4 md:grid-cols-2"><label class="grid gap-1"><span class="text-sm font-semibold">Name</span> <input name="name" required="" class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500"/></label> <label class="grid gap-1"><span class="text-sm font-semibold">Telefon</span> <input name="phone" required="" class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500"/></label> <label class="grid gap-1 md:col-span-2"><span class="text-sm font-semibold">E‑Mail (optional)</span> <input name="email" type="email" class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500"/></label> <label class="grid gap-1 md:col-span-2"><span class="text-sm font-semibold">Leistung</span> <select name="service" required="" class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500">`);
    $$renderer2.option({ value: "" }, ($$renderer3) => {
      $$renderer3.push(`Bitte wählen…`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Kostenlose Beratung`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Dachsanierung`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Flachdachsanierung`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Fassadenanstrich und Reinigung`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Mauertrockenlegung`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Holzanstriche`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Spezialverfugung`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Steinteppich`);
    });
    $$renderer2.push(`</select></label> <label class="grid gap-1 md:col-span-2"><span class="text-sm font-semibold">Nachricht</span> <textarea name="message" rows="5" required="" class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500"></textarea></label></div> <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:opacity-60"${attr("disabled", status === "sending", true)}>${escape_html("Anfrage senden")}</button> <a${attr("href", wa)} target="_blank" rel="noopener" class="text-sm font-semibold text-pine-700 hover:underline">oder direkt per WhatsApp schreiben →</a></div> `);
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
    eyebrow: "Kontakt",
    title: "Schnelle Anfrage ohne Umwege.",
    subtitle: "Am besten per WhatsApp mit 2 bis 3 Fotos. Alternativ können Interessenten direkt hier die passende Leistung auswählen und eine Anfrage senden.",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-6 lg:grid-cols-2">`);
      ContactForm($$renderer2, { whatsapp: brand.whatsapp, formspreeEndpoint });
      $$renderer2.push(`<!----> <div class="space-y-4">`);
      Reveal($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="section-shell p-6"><div class="text-sm font-semibold text-slate-900">Direktkontakt</div> <div class="mt-4 grid gap-3 text-sm text-slate-700"><a class="inline-flex items-center gap-2 hover:underline"${attr("href", "tel:" + brand.phone)}>`);
          Icon($$renderer3, { name: "phone", className: "h-4 w-4" });
          $$renderer3.push(`<!----> ${escape_html(brand.phone)}</a> <a class="inline-flex items-center gap-2 hover:underline"${attr("href", "https://wa.me/" + brand.whatsapp.replace(/\D/g, ""))} target="_blank" rel="noopener">`);
          Icon($$renderer3, { name: "whatsapp", className: "h-4 w-4" });
          $$renderer3.push(`<!----> WhatsApp Chat</a> <a class="inline-flex items-center gap-2 hover:underline"${attr("href", "mailto:" + brand.email)}>`);
          Icon($$renderer3, { name: "mail", className: "h-4 w-4" });
          $$renderer3.push(`<!----> ${escape_html(brand.email)}</a> <div class="inline-flex items-center gap-2">`);
          Icon($$renderer3, { name: "pin", className: "h-4 w-4" });
          $$renderer3.push(`<!----> ${escape_html(brand.area)}</div></div> <div class="mt-6 rounded-2xl bg-sand-50 p-4 text-sm text-slate-700">Tipp: Für ein schnelles Angebot senden Sie bitte <b>2–3 Fotos</b> + kurze Maße / Adresse.</div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Reveal($$renderer2, {
        id: "impressum",
        className: "section-shell scroll-mt-24 p-6",
        as: "div",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="text-sm font-semibold text-slate-900">Impressum (Template)</div> <p class="mt-3 text-sm text-slate-600">Bitte hier die gesetzlichen Angaben eintragen (Name/Firma, Anschrift, Kontakt, USt-ID, etc.).</p>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Reveal($$renderer2, {
        id: "datenschutz",
        className: "section-shell scroll-mt-24 p-6",
        as: "div",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="text-sm font-semibold text-slate-900">Datenschutz (Template)</div> <p class="mt-3 text-sm text-slate-600">Bitte Datenschutzerklärung ergänzen (Kontaktformular, Tracking, Hosting, Cookies).</p>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
