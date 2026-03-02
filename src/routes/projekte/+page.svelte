<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import { gallery } from '$lib/data/gallery';

  const canonical = 'https://DEINE-DOMAIN.de/projekte'; // TODO
</script>

<svelte:head>
  <title>Projekte – Vorher/Nachher Galerie</title>
  <meta name="description" content="Galerie mit echten Vorher/Nachher Projekten: Dachreinigung, Pflasterreinigung und Steinteppich." />
  <link rel="canonical" href={canonical} />
</svelte:head>

<Section title="Projekte" subtitle="Echte Fotos – echte Ergebnisse. Filtern Sie nach Kategorie.">
  <Gallery items={gallery} />
</Section>
