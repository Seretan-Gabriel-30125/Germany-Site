<script lang="ts">
  export let title: string;
  export let subtitle: string | undefined = undefined;
  export let id: string | undefined = undefined;
</script>

<section {id} class="py-14 md:py-20">
  <div class="mx-auto max-w-6xl px-4">
    <div class="max-w-3xl">
      <h2 class="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {#if subtitle}
        <p class="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">{subtitle}</p>
      {/if}
    </div>
    <div class="mt-10">
      <slot />
    </div>
  </div>
</section>
