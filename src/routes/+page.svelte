<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Section from '$lib/components/Section.svelte';
  import ServiceGrid from '$lib/components/ServiceGrid.svelte';
  import Gallery from '$lib/components/Gallery.svelte';

  import { services } from '$lib/data/services';
  import { gallery } from '$lib/data/gallery';

  const brand = {
    name: 'Maler- & Reinigungsservice',
    phone: '+49 000 000000', // TODO
    whatsapp: '+49 000 000000', // TODO
    area: 'Augsburg / München & Umgebung'
  };

  const canonical = 'https://DEINE-DOMAIN.de/'; // TODO
</script>

<svelte:head>
  <title>{brand.name} – Fassade, Dach, Pflaster, Holz & Steinteppich</title>
  <meta name="description" content="Fassaden streichen, Dachreinigung, Pflaster reinigen, Holz streichen und Steinteppich – modern, sauber, zuverlässig in Augsburg / München & Umgebung." />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content="{brand.name} – Modernes Handwerk" />
  <meta property="og:description" content="Fassade, Dach, Pflaster, Holz & Steinteppich. Kostenlose Anfrage per Formular oder WhatsApp." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content="https://DEINE-DOMAIN.de/images/augsburg-munchen-germany-12.webp" />

  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: brand.name,
      areaServed: brand.area,
      telephone: brand.phone,
      url: canonical,
      image: 'https://DEINE-DOMAIN.de/images/augsburg-munchen-germany-12.webp',
      priceRange: '€€',
      sameAs: ['https://wa.me/' + brand.whatsapp.replace(/\D/g, '')]
    })}
  </script>
</svelte:head>

<Hero whatsapp={brand.whatsapp} />

<Section title="Leistungen" subtitle="Alles aus einer Hand – klare Abläufe, saubere Ergebnisse.">
  <ServiceGrid {services} />
</Section>

<Section title="Vorher / Nachher" subtitle="Ein Blick auf echte Ergebnisse aus unseren Projekten.">
  <Gallery items={gallery} />
</Section>

<section class="py-16 md:py-20">
  <div class="mx-auto max-w-6xl px-4">
    <div class="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white md:p-10">
      <div class="grid items-center gap-6 md:grid-cols-2">
        <div class="space-y-3">
          <div class="text-2xl font-semibold tracking-tight">Kostenlose Besichtigung & Angebot</div>
          <p class="text-white/80">
            Schicken Sie uns kurz Fotos oder eine Beschreibung – wir melden uns schnell und transparent.
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row md:justify-end">
          <a href="/kontakt#anfrage" class="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">
            Anfrage starten
          </a>
          <a href={"https://wa.me/" + brand.whatsapp.replace(/\D/g, '')} target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
