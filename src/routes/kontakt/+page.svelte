<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import Icon from '$lib/components/Icon.svelte';

  const brand = {
    name: 'Maler- & Reinigungsservice',
    phone: '+49 000 000000', // TODO
    whatsapp: '+49 000 000000', // TODO
    email: 'info@DEINE-DOMAIN.de', // TODO
    area: 'Augsburg / München & Umgebung'
  };

  // Static hosting: set your Formspree endpoint:
  // const formspreeEndpoint = 'https://formspree.io/f/DEIN_ID';
  const formspreeEndpoint: string | null = null;

  const canonical = 'https://DEINE-DOMAIN.de/kontakt'; // TODO
</script>

<svelte:head>
  <title>Kontakt – Kostenlose Anfrage</title>
  <meta name="description" content="Kontaktieren Sie uns schnell per Formular oder WhatsApp. Augsburg / München & Umgebung." />
  <link rel="canonical" href={canonical} />
</svelte:head>

<Section title="Kontakt" subtitle="Schnelle Antwort – am liebsten per WhatsApp, alternativ per Formular.">
  <div class="grid gap-6 lg:grid-cols-2">
    <ContactForm whatsapp={brand.whatsapp} {formspreeEndpoint} />

    <div class="space-y-4">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div class="text-sm font-semibold text-slate-900">Direktkontakt</div>

        <div class="mt-4 grid gap-3 text-sm text-slate-700">
          <a class="inline-flex items-center gap-2 hover:underline" href={"tel:" + brand.phone}>
            <Icon name="phone" className="h-4 w-4" /> {brand.phone}
          </a>
          <a class="inline-flex items-center gap-2 hover:underline" href={"https://wa.me/" + brand.whatsapp.replace(/\D/g, '')} target="_blank" rel="noopener">
            <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Chat
          </a>
          <a class="inline-flex items-center gap-2 hover:underline" href={"mailto:" + brand.email}>
            <Icon name="mail" className="h-4 w-4" /> {brand.email}
          </a>
          <div class="inline-flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4" /> {brand.area}
          </div>
        </div>

        <div class="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          Tipp: Für ein schnelles Angebot senden Sie bitte <b>2–3 Fotos</b> + kurze Maße / Adresse.
        </div>
      </div>

      <div id="impressum" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24">
        <div class="text-sm font-semibold text-slate-900">Impressum (Template)</div>
        <p class="mt-3 text-sm text-slate-600">
          Bitte hier die gesetzlichen Angaben eintragen (Name/Firma, Anschrift, Kontakt, USt-ID, etc.).
        </p>
      </div>

      <div id="datenschutz" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24">
        <div class="text-sm font-semibold text-slate-900">Datenschutz (Template)</div>
        <p class="mt-3 text-sm text-slate-600">
          Bitte Datenschutzerklärung ergänzen (Kontaktformular, Tracking, Hosting, Cookies).
        </p>
      </div>
    </div>
  </div>
</Section>
