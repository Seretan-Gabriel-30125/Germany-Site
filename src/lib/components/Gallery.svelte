<script lang="ts">
  import type { GalleryItem } from '$lib/data/gallery';
  export let items: GalleryItem[];

  let activeTag: GalleryItem['tag'] | 'Alle' = 'Alle';
  $: tags = ['Alle', ...Array.from(new Set(items.map((i) => i.tag)))] as const;
  $: filtered = activeTag === 'Alle' ? items : items.filter((i) => i.tag === activeTag);

  let lightbox: GalleryItem | null = null;
</script>

<div class="flex flex-wrap gap-2">
  {#each tags as t}
    <button
      type="button"
      on:click={() => (activeTag = t as any)}
      class="rounded-full border px-3 py-1 text-sm font-semibold transition
        {activeTag === t ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}"
    >
      {t}
    </button>
  {/each}
</div>

<div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
  {#each filtered as it}
    <button type="button" class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" on:click={() => (lightbox = it)}>
      <img src={it.thumb} alt={it.alt} class="h-56 w-full object-cover transition group-hover:scale-[1.02]" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100"></div>
      <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <span class="truncate rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">{it.alt}</span>
        <span class="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">{it.tag}</span>
      </div>
    </button>
  {/each}
</div>

{#if lightbox}
  <div class="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true">
    <button class="absolute inset-0" aria-label="Schließen" on:click={() => (lightbox = null)}></button>
    <div class="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
      <div class="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
        <div class="min-w-0">
          <div class="truncate text-sm font-semibold">{lightbox.alt}</div>
          <div class="text-xs text-slate-500">{lightbox.tag}</div>
        </div>
        <button class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 hover:bg-slate-50" on:click={() => (lightbox = null)} aria-label="Schließen">×</button>
      </div>
      <img src={lightbox.src} alt={lightbox.alt} class="max-h-[75vh] w-full object-contain bg-slate-100" />
    </div>
  </div>
{/if}
