<script lang="ts">
  import Icon from './Icon.svelte';
  import type { Service } from '$lib/data/services';
  export let services: Service[];
</script>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#each services as s}
    <a href={"/leistungen#" + s.id} class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:shadow-slate-900/5 transition">
      <div class="flex items-start gap-3">
        <div class="rounded-2xl bg-slate-900 p-2 text-white">
          <Icon name={s.icon} className="h-5 w-5" />
        </div>
        <div class="min-w-0">
          <div class="text-lg font-semibold tracking-tight">{s.title}</div>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
        </div>
      </div>

      <ul class="mt-4 space-y-2 text-sm text-slate-700">
        {#each s.bullets as b}
          <li class="flex items-start gap-2">
            <span class="mt-0.5 text-emerald-600"><Icon name="check" className="h-4 w-4" /></span>
            <span>{b}</span>
          </li>
        {/each}
      </ul>

      <div class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
        Mehr erfahren <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
    </a>
  {/each}
</div>
