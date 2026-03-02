<script lang="ts">
  import Icon from './Icon.svelte';
  import { page } from '$app/stores';

  export let brand: { name: string; phone: string; whatsapp: string };

  const nav = [
    { href: '/', label: 'Start' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/projekte', label: 'Projekte' },
    { href: '/kontakt', label: 'Kontakt' }
  ];

  let open = false;
  $: path = $page.url.pathname;
</script>

<header class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex h-16 items-center justify-between gap-4">
      <a href="/" class="flex items-center gap-2 font-semibold tracking-tight">
        <span class="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">DE</span>
        <span class="hidden sm:block">{brand.name}</span>
        <span class="sm:hidden">Service</span>
      </a>

      <nav class="hidden md:flex items-center gap-1">
        {#each nav as item}
          <a
            href={item.href}
            class="rounded-xl px-3 py-2 text-sm font-medium transition
              {path === item.href ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}"
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <div class="hidden md:flex items-center gap-2">
        <a href={"tel:" + brand.phone} class="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
          <Icon name="phone" className="h-4 w-4" /> {brand.phone}
        </a>
        <a
          href={"https://wa.me/" + brand.whatsapp.replace(/\D/g, '')}
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
        </a>
      </div>

      <button class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200" on:click={() => (open = !open)} aria-label="Menü" aria-expanded={open}>
        <span class="text-xl">{open ? '×' : '☰'}</span>
      </button>
    </div>

    {#if open}
      <div class="md:hidden pb-4">
        <div class="grid gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          {#each nav as item}
            <a href={item.href} class="rounded-xl px-3 py-2 text-sm font-medium {path === item.href ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'}" on:click={() => (open = false)}>
              {item.label}
            </a>
          {/each}

          <div class="grid gap-2 pt-2 border-t border-slate-200">
            <a href={"tel:" + brand.phone} class="rounded-xl px-3 py-2 text-sm font-medium hover:bg-slate-100">
              <span class="inline-flex items-center gap-2"><Icon name="phone" className="h-4 w-4" /> {brand.phone}</span>
            </a>
            <a href={"https://wa.me/" + brand.whatsapp.replace(/\D/g, '')} target="_blank" rel="noopener" class="rounded-xl px-3 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700">
              <span class="inline-flex items-center gap-2"><Icon name="whatsapp" className="h-4 w-4" /> WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    {/if}
  </div>
</header>
