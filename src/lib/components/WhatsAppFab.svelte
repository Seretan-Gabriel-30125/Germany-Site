<script lang="ts">
  import Icon from './Icon.svelte';
  export let phone: string;
  const clean = (v: string) => v.replace(/\D/g, '');
</script>

<a
  href={"https://wa.me/" + clean(phone)}
  target="_blank"
  rel="noopener"
  class="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-pine-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pine-900/20 transition hover:-translate-y-0.5 hover:bg-pine-800 active:scale-[0.99]"
  aria-label="WhatsApp"
>
  <Icon name="whatsapp" className="h-5 w-5" />
  <span class="hidden sm:block">WhatsApp</span>
</a>
