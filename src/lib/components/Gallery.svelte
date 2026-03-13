<script lang="ts">
  import type { GalleryItem } from '$lib/data/gallery';
  import Reveal from './Reveal.svelte';

  export let items: GalleryItem[];

  let activeTag: GalleryItem['tag'] | 'Alle' = 'Alle';
  $: tags = ['Alle', ...Array.from(new Set(items.map((i) => i.tag)))] as const;
  $: filtered = activeTag === 'Alle' ? items : items.filter((i) => i.tag === activeTag);

  let lightbox: GalleryItem | null = null;
</script>

<div class="sticky top-[4.4rem] z-20 -mx-4 px-4 py-3 md:top-[5rem]">
  <div class="mx-auto flex max-w-7xl flex-wrap gap-2 rounded-[1.75rem] border border-sand-300 bg-white/88 p-3 shadow-[0_12px_34px_rgba(15,23,42,0.06)] backdrop-blur">
    {#each tags as t}
      <button
        type="button"
        on:click={() => (activeTag = t as any)}
        class="rounded-full border px-4 py-2 text-sm font-semibold transition
          {activeTag === t ? 'border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/10' : 'border-sand-300 bg-sand-50 text-slate-700 hover:bg-white'}"
      >
        {t}
      </button>
    {/each}
  </div>
</div>

<div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
  {#each filtered as it, index}
    <Reveal delay={index * 40}>
      <button
        type="button"
        class="group overflow-hidden rounded-[2rem] border border-sand-300 bg-white text-left shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]"
        on:click={() => (lightbox = it)}
      >
        <div class="aspect-[4/4.4] overflow-hidden">
          <img src={it.thumb} alt={it.alt} class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
        </div>
        <div class="space-y-3 p-4">
          <div class="inline-flex rounded-full bg-sand-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
            {it.tag}
          </div>
          <div>
            <div class="font-display text-2xl leading-tight text-slate-950">{it.title}</div>
            <div class="mt-1 text-sm text-slate-600">{it.caption}</div>
          </div>
        </div>
      </button>
    </Reveal>
  {/each}
</div>

{#if lightbox}
  <div class="fixed inset-0 z-[60] grid place-items-center bg-slate-950/80 p-4 backdrop-blur" role="dialog" aria-modal="true">
    <button class="absolute inset-0" aria-label="Schließen" on:click={() => (lightbox = null)}></button>
    <div class="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-2xl">
      <div class="flex items-center justify-between gap-3 border-b border-sand-200 px-4 py-3">
        <div class="min-w-0">
          <div class="truncate font-display text-xl text-slate-950">{lightbox.title}</div>
          <div class="text-sm text-slate-600">{lightbox.caption}</div>
          <div class="text-xs text-slate-500">{lightbox.tag}</div>
        </div>
        <button class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-sand-300 hover:bg-sand-50" on:click={() => (lightbox = null)} aria-label="Schließen">×</button>
      </div>
      <img src={lightbox.src} alt={lightbox.alt} class="max-h-[78vh] w-full object-contain bg-sand-50" />
    </div>
  </div>
{/if}
