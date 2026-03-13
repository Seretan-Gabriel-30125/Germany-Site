<script lang="ts">
  import type { Service } from '$lib/data/services';
  import Icon from './Icon.svelte';
  import Reveal from './Reveal.svelte';

  export let services: Service[];
</script>

<section class="relative py-16 md:py-24">
  <div class="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.7fr,1.3fr] lg:gap-10">
    <Reveal className="lg:sticky lg:top-24 lg:self-start">
      <div class="section-shell p-6 md:p-7">
        <div class="space-y-5">
          <div class="inline-flex items-center gap-2 rounded-full bg-clay-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-clay-800">
            Leistungen
          </div>
          <h2 class="font-display text-3xl tracking-tight text-slate-950 md:text-5xl">Alles aus einer Hand.</h2>
          <p class="max-w-md text-sm leading-7 text-slate-600 md:text-base">
            Einfach nach unten scrollen und die Leistungen kurz erfassen.
          </p>

          <div class="grid gap-3">
            <div class="rounded-[1.5rem] bg-sand-100 px-4 py-4">
              <div class="text-2xl font-display font-semibold text-slate-950">{services.length}</div>
              <div class="mt-1 text-sm text-slate-600">Leistungen</div>
            </div>
            <a href="/kontakt#anfrage" class="inline-flex items-center justify-center rounded-[1.25rem] bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
              Anfrage starten
            </a>
          </div>
        </div>
      </div>
    </Reveal>

    <div class="space-y-4">
      {#each services as service, index}
        <Reveal delay={index * 45}>
          <article id={service.id} class="section-shell flex items-start gap-4 p-5 md:p-6">
            <div class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">
              <Icon name={service.icon} className="h-5 w-5" />
            </div>

            <div class="min-w-0">
              <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-700">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 class="mt-2 font-display text-2xl tracking-tight text-slate-950 md:text-3xl">{service.title}</h3>
              <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">{service.short}</p>
            </div>
          </article>
        </Reveal>
      {/each}
    </div>
  </div>
</section>
