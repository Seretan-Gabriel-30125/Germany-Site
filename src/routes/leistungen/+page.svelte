<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import ServiceGrid from '$lib/components/ServiceGrid.svelte';
  import { services } from '$lib/data/services';

  const canonical = 'https://DEINE-DOMAIN.de/leistungen'; // TODO
</script>

<svelte:head>
  <title>Leistungen – Dachsanierung, Fassade, Spezialverfugung & Steinteppich</title>
  <meta name="description" content="Übersicht der Leistungen: kostenlose Beratung, Dachsanierung, Flachdachsanierung, Fassadenanstrich und Reinigung, Mauertrockenlegung, Holzanstriche, Spezialverfugung und Steinteppich." />
  <link rel="canonical" href={canonical} />
</svelte:head>

<Section eyebrow="Leistungen" title="Das bietet AD Haussanierung." subtitle="Klar gegliedert, schnell erfassbar und mit Referenzen dort, wo echte Bilder vorhanden sind.">
  <ServiceGrid {services} />
</Section>
