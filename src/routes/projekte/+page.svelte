<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Reveal from '$lib/components/Reveal.svelte';
  import { gallery } from '$lib/data/gallery';

  const canonical = 'https://DEINE-DOMAIN.de/projekte'; // TODO
</script>

<svelte:head>
  <title>Projekte – Vorher/Nachher Galerie</title>
  <meta name="description" content="Galerie mit echten Vorher/Nachher Projekten aus Dachsanierung, Steinteppich und Spezialverfugung." />
  <link rel="canonical" href={canonical} />
</svelte:head>

<Section eyebrow="Projekte" title="Vorher, Nachher und echte Ausführung." subtitle="Die Referenzen sind jetzt klarer geordnet: Dachsanierung, Steinteppich, Spezialverfugung und echte Vorher/Nachher-Motive.">
  <Reveal>
    <div class="section-shell mb-8 grid gap-4 p-5 text-sm text-slate-600 md:grid-cols-3 md:p-6">
      <div>
        <div class="font-semibold text-slate-950">Dachsanierung</div>
        <p class="mt-2 leading-7">Mit den neuen Dachbildern und den bestehenden Referenzen als sichtbar belegter Bereich.</p>
      </div>
      <div>
        <div class="font-semibold text-slate-950">Steinteppich</div>
        <p class="mt-2 leading-7">Treppen, Flächen und Details mit der stärksten visuellen Präsenz im Projektbestand.</p>
      </div>
      <div>
        <div class="font-semibold text-slate-950">Spezialverfugung</div>
        <p class="mt-2 leading-7">Außenflächen wurden vorsichtig dieser Leistung zugeordnet, weil sie am besten zur Bildsprache passen.</p>
      </div>
    </div>
  </Reveal>
  <Gallery items={gallery} />
</Section>
