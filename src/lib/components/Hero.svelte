<script lang="ts">
  import Icon from './Icon.svelte';
  export let whatsapp: string;
  const wa = "https://wa.me/" + whatsapp.replace(/\D/g, '');
</script>

<section class="relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white"></div>

  <div class="relative mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20 md:pb-16">
    <div class="grid items-center gap-10 md:grid-cols-2">
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
          Schnell • Sauber • Zuverlässig
        </div>

        <h1 class="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Außen wie neu — <span class="text-slate-500">Fassade, Dach, Pflaster</span> & Steinteppich.
        </h1>

        <p class="text-base leading-relaxed text-slate-600 md:text-lg">
          Moderne Handwerksleistung in Augsburg / München & Umgebung. Von der Dach- und Pflasterreinigung bis zum
          Fassaden- und Holzschutz — inklusive Steinteppich für Treppen und Eingänge.
        </p>

        <div class="flex flex-col gap-3 sm:flex-row">
          <a href="/kontakt#anfrage" class="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
            Kostenlose Anfrage <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a href={wa} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-slate-200 bg-white p-4">
            <div class="text-sm font-semibold">Sauber</div>
            <div class="mt-1 text-xs text-slate-600">Schutzfolien & ordentliche Baustelle</div>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-4">
            <div class="text-sm font-semibold">Schnell</div>
            <div class="mt-1 text-xs text-slate-600">Termintreu, klare Abläufe</div>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-4">
            <div class="text-sm font-semibold">Modern</div>
            <div class="mt-1 text-xs text-slate-600">Zeitgemäße Materialien & Optik</div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-100 via-white to-emerald-100 blur-2xl opacity-80"></div>

        <div class="relative grid gap-3 rounded-[2.5rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5">
          <img src="/images/augsburg-munchen-germany-9-800.webp" alt="Steinteppich Treppe" class="aspect-[4/3] w-full rounded-3xl object-cover" loading="eager" />
          <div class="grid grid-cols-2 gap-3">
            <img src="/images/augsburg-munchen-germany-12-800.webp" alt="Treppe vorher" class="h-32 w-full rounded-3xl object-cover" loading="lazy" />
            <img src="/images/augsburg-munchen-germany-5-800.webp" alt="Treppe nachher" class="h-32 w-full rounded-3xl object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
