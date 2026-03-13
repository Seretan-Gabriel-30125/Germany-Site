<script lang="ts">
  import Icon from './Icon.svelte';
  import Reveal from './Reveal.svelte';
  import type { Service } from '$lib/data/services';
  export let services: Service[];
</script>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#each services as s, index}
    <Reveal delay={index * 60}>
      <a id={s.id} href={"/leistungen#" + s.id} class="group section-shell scroll-mt-28 flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
        <div class="flex items-start gap-3">
          <div class="rounded-2xl bg-slate-950 p-3 text-white">
            <Icon name={s.icon} className="h-5 w-5" />
          </div>
          <div class="min-w-0">
            <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-700">{s.highlight}</div>
            <div class="mt-2 font-display text-xl tracking-tight text-slate-950">{s.title}</div>
            <p class="mt-3 text-sm leading-7 text-slate-600">{s.short}</p>
          </div>
        </div>

        <ul class="mt-5 grid gap-2 text-sm text-slate-700">
          {#each s.bullets as b}
            <li class="flex items-start gap-2 rounded-2xl bg-sand-50 px-3 py-2">
              <span class="mt-0.5 text-clay-600"><Icon name="check" className="h-4 w-4" /></span>
              <span>{b}</span>
            </li>
          {/each}
        </ul>

        <div class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
          Mehr erfahren <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </div>
      </a>
    </Reveal>
  {/each}
</div>
