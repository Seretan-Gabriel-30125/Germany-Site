<script lang="ts">
  import Reveal from './Reveal.svelte';

  export let title: string;
  export let subtitle: string | undefined = undefined;
  export let id: string | undefined = undefined;
  export let eyebrow: string | undefined = undefined;
</script>

<section {id} class="py-14 md:py-20">
  <div class="mx-auto max-w-7xl px-4">
    <Reveal className="max-w-3xl">
      {#if eyebrow}
        <div class="mb-3 inline-flex rounded-full bg-clay-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-clay-800">
          {eyebrow}
        </div>
      {/if}
      <h2 class="font-display text-3xl tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {#if subtitle}
        <p class="mt-4 text-base leading-8 text-slate-600 md:text-lg">{subtitle}</p>
      {/if}
    </Reveal>
    <div class="mt-10">
      <slot />
    </div>
  </div>
</section>
