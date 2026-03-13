<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Section from '$lib/components/Section.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Reveal from '$lib/components/Reveal.svelte';
  import ServiceShowcase from '$lib/components/ServiceShowcase.svelte';

  import { services } from '$lib/data/services';
  import { gallery } from '$lib/data/gallery';

  const brand = {
    name: 'AD HAUSSANIERUNG',
    phone: '+49 155 11501468', // TODO
    whatsapp: '+49 155 11501468', // TODO
    area: 'Augsburg / München & Umgebung'
  };

  const canonical = 'https://DEINE-DOMAIN.de/'; // TODO
</script>

<svelte:head>
  <title>{brand.name} – Dachsanierung, Fassade, Spezialverfugung & Steinteppich</title>
  <meta name="description" content="AD Haussanierung bietet Dachsanierung, Fassadenanstrich und Reinigung, Spezialverfugung, Holzanstriche, Mauertrockenlegung und Steinteppich in Augsburg / München & Umgebung." />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content="{brand.name} – Modernes Handwerk" />
  <meta property="og:description" content="Dachsanierung, Fassadenanstrich, Spezialverfugung und Steinteppich. Kostenlose Anfrage per Formular oder WhatsApp." />
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

<ServiceShowcase {services} />

<Section eyebrow="Referenzen" title="Echte Projekte." subtitle="Klare Bilder, saubere Referenzen und echte Vorher/Nachher-Momente.">
  <Gallery items={gallery} />
</Section>

<section class="py-16 md:py-20">
  <div class="mx-auto max-w-7xl px-4">
    <Reveal>
      <div class="overflow-hidden rounded-[2.2rem] border border-slate-900/10 bg-slate-950 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
        <div class="grid items-stretch gap-0 lg:grid-cols-[0.95fr,1.05fr]">
          <div class="flex flex-col justify-center space-y-6 p-7 md:p-10">
            <div class="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Kostenlose Anfrage
            </div>
            <div class="font-display text-3xl tracking-tight md:text-5xl">Fotos schicken. Angebot bekommen.</div>
            <p class="max-w-xl text-sm leading-7 text-white/78 md:text-base">
              Kurz per WhatsApp oder direkt per Formular. Schnell, unkompliziert und mobil perfekt nutzbar.
            </p>

            <div class="flex flex-col gap-3 sm:flex-row">
              <a href="/kontakt#anfrage" class="inline-flex items-center justify-center rounded-[1.25rem] bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
                Anfrage starten
              </a>
              <a href={"https://wa.me/" + brand.whatsapp.replace(/\D/g, '')} target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-[1.25rem] border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                WhatsApp öffnen
              </a>
            </div>
          </div>

          <div class="relative min-h-[320px]">
            <img src="/images/augsburg-munchen-germany-12.webp" alt="Steinteppich Referenz" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-slate-950/18 via-slate-950/20 to-slate-950/70"></div>
            <div class="absolute bottom-5 left-5 right-5 grid gap-3 sm:max-w-sm">
              <div class="rounded-[1.4rem] bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
                WhatsApp und Formular direkt verfügbar
              </div>
              <div class="rounded-[1.4rem] bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
                Ideal mit 2 bis 3 Fotos vom Objekt
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</section>
