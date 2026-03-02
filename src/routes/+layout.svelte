<script lang="ts">
  import '../app.css';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import WhatsAppFab from '$lib/components/WhatsAppFab.svelte';

  const brand = {
    name: 'Maler- & Reinigungsservice',
    phone: '+49 000 000000', // TODO
    whatsapp: '+49 000 000000' // TODO
  };
</script>

<div class="min-h-screen flex flex-col">
  <SiteHeader {brand} />
  <main class="flex-1">
    <slot />
  </main>
  <SiteFooter {brand} />
  <WhatsAppFab phone={brand.whatsapp} />
</div>
