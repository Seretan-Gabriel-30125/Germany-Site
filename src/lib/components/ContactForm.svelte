<script lang="ts">
  export let whatsapp: string;
  export let formspreeEndpoint: string | null = null;
  export let apiEndpoint: string = '/api/anfrage';

  let status: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  let errorMsg = '';

  const clean = (v: string) => v.replace(/\D/g, '');

  async function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    status = 'sending';
    errorMsg = '';

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      if (formspreeEndpoint) {
        const res = await fetch(formspreeEndpoint, { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error('Formspree Fehler');
      } else {
        const res = await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.fromEntries(formData.entries()))
        });
        if (!res.ok) throw new Error('Server Fehler');
      }

      status = 'success';
      form.reset();
    } catch {
      status = 'error';
      errorMsg = 'Leider hat das Senden nicht geklappt. Bitte per WhatsApp kontaktieren.';
    }
  }

const wa = "https://wa.me/" + clean(whatsapp);
</script>

<form on:submit={onSubmit} class="section-shell grid gap-4 p-6 md:p-7" id="anfrage">
  <div class="grid gap-4 md:grid-cols-2">
    <label class="grid gap-1">
      <span class="text-sm font-semibold">Name</span>
      <input name="name" required class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500" />
    </label>

    <label class="grid gap-1">
      <span class="text-sm font-semibold">Telefon</span>
      <input name="phone" required class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500" />
    </label>

    <label class="grid gap-1 md:col-span-2">
      <span class="text-sm font-semibold">E‑Mail (optional)</span>
      <input name="email" type="email" class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500" />
    </label>

    <label class="grid gap-1 md:col-span-2">
      <span class="text-sm font-semibold">Leistung</span>
      <select name="service" required class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500">
        <option value="">Bitte wählen…</option>
        <option>Kostenlose Beratung</option>
        <option>Dachsanierung</option>
        <option>Flachdachsanierung</option>
        <option>Fassadenanstrich und Reinigung</option>
        <option>Mauertrockenlegung</option>
        <option>Holzanstriche</option>
        <option>Spezialverfugung</option>
        <option>Steinteppich</option>
      </select>
    </label>

    <label class="grid gap-1 md:col-span-2">
      <span class="text-sm font-semibold">Nachricht</span>
      <textarea name="message" rows="5" required class="rounded-2xl border border-sand-300 bg-white px-4 py-3 outline-none transition focus:border-clay-500"></textarea>
    </label>
  </div>

  <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:opacity-60" disabled={status === 'sending'}>
      {status === 'sending' ? 'Senden…' : 'Anfrage senden'}
    </button>

    <a href={wa} target="_blank" rel="noopener" class="text-sm font-semibold text-pine-700 hover:underline">
      oder direkt per WhatsApp schreiben →
    </a>
  </div>

  {#if status === 'success'}
    <div class="rounded-2xl border border-pine-200 bg-pine-50 px-4 py-3 text-sm text-pine-900">
      Danke! Wir melden uns schnellstmöglich.
    </div>
  {/if}

  {#if status === 'error'}
    <div class="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">{errorMsg}</div>
  {/if}

  <p class="text-xs text-slate-500">
    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Beantwortung der Anfrage zu.
  </p>
</form>
