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

<header class="sticky top-0 z-50 px-4 pt-3">
  <div class="mx-auto max-w-7xl">
    <div class="section-shell flex min-h-[4.5rem] items-center justify-between gap-4 px-4 py-3 md:px-5">
      <a href="/" class="flex items-center gap-3 font-semibold tracking-tight">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 font-display text-sm text-white">AD</span>
        <span class="hidden sm:block">
          <span class="block text-sm font-semibold text-slate-950">{brand.name}</span>
          <span class="block text-[11px] uppercase tracking-[0.2em] text-slate-500">Haus Sanierung</span>
        </span>
        <span class="sm:hidden">Service</span>
      </a>

      <nav class="hidden md:flex items-center gap-1">
        {#each nav as item}
          <a
            href={item.href}
            class="rounded-xl px-3 py-2 text-sm font-medium transition
              {path === item.href ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/10' : 'text-slate-700 hover:bg-sand-100'}"
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <div class="hidden md:flex items-center gap-2">
        <a href={"tel:" + brand.phone} class="inline-flex items-center gap-2 rounded-xl border border-sand-300 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-sand-50">
          <Icon name="phone" className="h-4 w-4" /> {brand.phone}
        </a>
        <a
          href={"https://wa.me/" + brand.whatsapp.replace(/\D/g, '')}
          target="_blank"
          rel="noopener"
          class="inline-flex min-w-[9.5rem] items-center justify-center gap-2 rounded-xl border border-[#1da851]/30 bg-[#25D366] px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-[#25D366]/25 transition hover:-translate-y-0.5 hover:bg-[#1fbe5b]"
        >
          <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
        </a>
      </div>

      <button class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sand-300 bg-white" on:click={() => (open = !open)} aria-label="Menü" aria-expanded={open}>
        <span class="text-xl">{open ? '×' : '☰'}</span>
      </button>
    </div>

    {#if open}
      <div class="md:hidden pt-3">
        <div class="section-shell grid gap-2 p-3">
          {#each nav as item}
            <a href={item.href} class="rounded-xl px-3 py-2 text-sm font-medium {path === item.href ? 'bg-slate-950 text-white' : 'hover:bg-sand-100'}" on:click={() => (open = false)}>
              {item.label}
            </a>
          {/each}

          <div class="grid gap-2 pt-2 border-t border-sand-300">
            <a href={"tel:" + brand.phone} class="rounded-xl px-3 py-2 text-sm font-medium hover:bg-sand-100">
              <span class="inline-flex items-center gap-2"><Icon name="phone" className="h-4 w-4" /> {brand.phone}</span>
            </a>
            <a href={"https://wa.me/" + brand.whatsapp.replace(/\D/g, '')} target="_blank" rel="noopener" class="rounded-xl border border-[#1da851]/30 bg-[#25D366] px-3 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-[#25D366]/25 hover:bg-[#1fbe5b]">
              <span class="inline-flex items-center gap-2"><Icon name="whatsapp" className="h-4 w-4" /> WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    {/if}
  </div>
</header>
