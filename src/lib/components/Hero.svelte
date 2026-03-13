<script lang="ts">
  import Reveal from './Reveal.svelte';
  import Icon from './Icon.svelte';
  export let whatsapp: string;
  const wa = "https://wa.me/" + whatsapp.replace(/\D/g, '');
</script>

<section class="relative overflow-hidden px-4 pt-6 md:pt-10">
  <div class="mx-auto max-w-7xl">
    <div class="section-shell relative overflow-hidden px-5 py-8 md:px-10 md:py-12">
      <div class="hero-orb absolute -left-10 top-12 h-32 w-32 rounded-full bg-clay-200/60 blur-3xl"></div>
      <div class="hero-orb delay absolute right-0 top-0 h-40 w-40 rounded-full bg-pine-200/60 blur-3xl"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_42%)]"></div>

      <div class="relative grid items-center gap-10 lg:grid-cols-[1.02fr,0.98fr] lg:gap-12">
        <div class="space-y-7">
          <Reveal>
            <div class="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700 soft-ring">
              <span class="h-2.5 w-2.5 rounded-full bg-clay-500"></span>
              AD Haussanierung · Der Profi rund ums Haus
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div class="space-y-5">
              <h1 class="font-display text-4xl leading-none tracking-tight text-slate-950 md:text-6xl">
                Moderne Haussanierung mit echtem Vorher/Nachher-Effekt.
              </h1>
              <p class="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Dachsanierung, Steinteppich, Spezialverfugung und weitere Leistungen rund ums Haus. Mobil, schnell erreichbar und mit einem Auftritt, der auch auf dem Telefon stark wirkt.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div class="flex flex-col gap-3 sm:flex-row">
              <a href="/kontakt#anfrage" class="inline-flex items-center justify-center gap-2 rounded-[1.35rem] bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-900">
                Kostenlose Beratung starten <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href={wa} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-[1.35rem] border border-sand-300 bg-white/90 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white">
                <Icon name="whatsapp" className="h-4 w-4" /> Direkt per WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={210}>
            <div class="grid gap-3 sm:grid-cols-3">
              <div class="rounded-[1.6rem] border border-sand-300 bg-white/88 p-4">
                <div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Region</div>
                <div class="mt-2 text-sm font-semibold text-slate-900">Augsburg / München</div>
              </div>
              <div class="rounded-[1.6rem] border border-sand-300 bg-white/88 p-4">
                <div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Kontakt</div>
                <div class="mt-2 text-sm font-semibold text-slate-900">Telefon & WhatsApp</div>
              </div>
              <div class="rounded-[1.6rem] border border-sand-300 bg-white/88 p-4">
                <div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Fokus</div>
                <div class="mt-2 text-sm font-semibold text-slate-900">Starke Außenwirkung</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div class="relative mx-auto max-w-xl">
            <div class="absolute -left-4 top-8 hidden rounded-[1.6rem] border border-white/60 bg-white/85 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur md:block">
              <div class="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Dokumentiert</div>
              <div class="mt-2 text-sm font-semibold text-slate-950">Echte Dach- und Steinteppich-Referenzen</div>
            </div>

            <div class="relative grid gap-3 rounded-[2.2rem] border border-sand-300 bg-white/90 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <img src="/images/dachreinigung-nachher-1.jpg" alt="Dachsanierung nach der Aufbereitung" class="aspect-[4/3] w-full rounded-[1.6rem] object-cover" loading="eager" />
              <div class="grid grid-cols-2 gap-3">
                <img src="/images/augsburg-munchen-germany-12-800.webp" alt="Steinteppich Referenz" class="h-36 w-full rounded-[1.4rem] object-cover md:h-40" loading="lazy" />
                <img src="/images/dachreinigung-vergleich-1.jpg" alt="Dach Vorher Nachher Vergleich" class="h-36 w-full rounded-[1.4rem] object-cover md:h-40" loading="lazy" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>
