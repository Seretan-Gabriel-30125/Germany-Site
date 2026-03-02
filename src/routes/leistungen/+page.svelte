<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { services } from '$lib/data/services';

  const canonical = 'https://DEINE-DOMAIN.de/leistungen'; // TODO
</script>

<svelte:head>
  <title>Leistungen – Fassade, Dach, Pflaster, Holz & Steinteppich</title>
  <meta name="description" content="Übersicht unserer Leistungen: Fassaden streichen, Dachreinigung, Pflaster reinigen, Holz streichen und Steinteppich." />
  <link rel="canonical" href={canonical} />
</svelte:head>

<Section title="Leistungen" subtitle="Transparent, sauber und modern – hier finden Sie alle Leistungen im Detail.">
  <div class="grid gap-6">
    {#each services as s}
      <article id={s.id} class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24">
        <div class="flex items-start gap-3">
          <div class="rounded-2xl bg-slate-900 p-2 text-white">
            <Icon name={s.icon} className="h-5 w-5" />
          </div>
          <div class="min-w-0">
            <h2 class="text-xl font-semibold tracking-tight">{s.title}</h2>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
          </div>
        </div>

        <div class="mt-4 grid gap-3 md:grid-cols-2">
          <ul class="space-y-2 text-sm text-slate-700">
            {#each s.bullets as b}
              <li class="flex items-start gap-2">
                <span class="mt-0.5 text-emerald-600"><Icon name="check" className="h-4 w-4" /></span>
                <span>{b}</span>
              </li>
            {/each}
          </ul>

          <div class="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <div class="font-semibold">Typischer Ablauf</div>
            <ol class="mt-2 list-decimal pl-5 space-y-1">
              <li>Kurze Anfrage (Fotos reichen)</li>
              <li>Besichtigung / Aufmaß</li>
              <li>Festes Angebot</li>
              <li>Ausführung & Übergabe</li>
            </ol>
          </div>
        </div>

        <div class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="/kontakt#anfrage" class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Angebot anfragen
          </a>
          <a href="/projekte" class="text-sm font-semibold text-slate-700 hover:underline">Beispiele ansehen →</a>
        </div>
      </article>
    {/each}
  </div>
</Section>
