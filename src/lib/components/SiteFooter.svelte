<script lang="ts">
  import Icon from './Icon.svelte';
  export let brand: { name: string; phone: string; whatsapp: string };
  const year = new Date().getFullYear();
</script>

<footer class="px-4 pb-6 pt-10">
  <div class="section-shell mx-auto max-w-7xl overflow-hidden">
    <div class="grid gap-8 px-6 py-8 md:grid-cols-3 md:px-8 md:py-10">
      <div class="space-y-3">
        <div class="font-display text-2xl text-slate-950">{brand.name}</div>
        <p class="text-sm leading-7 text-slate-600">Dachsanierung, Fassadenanstrich, Steinteppich und weitere Leistungen rund ums Haus. Modern präsentiert, schnell erreichbar und klar strukturiert.</p>
      </div>

      <div class="space-y-3">
        <div class="text-sm font-semibold text-slate-900">Kontakt</div>
        <div class="grid gap-2 text-sm text-slate-700">
          <a class="inline-flex items-center gap-2 hover:underline" href={"tel:" + brand.phone}><Icon name="phone" className="h-4 w-4" /> {brand.phone}</a>
          <a class="inline-flex items-center gap-2 hover:underline" href={"https://wa.me/" + brand.whatsapp.replace(/\D/g, '')} target="_blank" rel="noopener"><Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Chat</a>
          <a class="inline-flex items-center gap-2 hover:underline" href="/kontakt"><Icon name="pin" className="h-4 w-4" /> Augsburg / München & Umgebung</a>
        </div>
      </div>

      <div class="space-y-3">
        <div class="text-sm font-semibold text-slate-900">Rechtliches</div>
        <div class="grid gap-2 text-sm text-slate-700">
          <a class="hover:underline" href="/kontakt#impressum">Impressum</a>
          <a class="hover:underline" href="/kontakt#datenschutz">Datenschutz</a>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2 border-t border-sand-300 px-6 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
      <div>© {year} {brand.name}. Alle Rechte vorbehalten.</div>
      <div class="opacity-80">Designed for modern mobile-first browsing.</div>
    </div>
  </div>
</footer>
