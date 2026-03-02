<script lang="ts">
  import Icon from './Icon.svelte';
  export let brand: { name: string; phone: string; whatsapp: string };
  const year = new Date().getFullYear();
</script>

<footer class="border-t border-slate-200 bg-white">
  <div class="mx-auto max-w-6xl px-4 py-10">
    <div class="grid gap-8 md:grid-cols-3">
      <div class="space-y-3">
        <div class="text-lg font-semibold">{brand.name}</div>
        <p class="text-sm text-slate-600">Fassaden • Dach • Pflaster • Holz • Steinteppich — sauber, modern, langlebig.</p>
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

    <div class="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
      <div>© {year} {brand.name}. Alle Rechte vorbehalten.</div>
      <div class="opacity-80">Made with SvelteKit.</div>
    </div>
  </div>
</footer>
