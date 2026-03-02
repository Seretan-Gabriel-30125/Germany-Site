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

<form on:submit={onSubmit} class="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" id="anfrage">
  <div class="grid gap-4 md:grid-cols-2">
    <label class="grid gap-1">
      <span class="text-sm font-semibold">Name</span>
      <input name="name" required class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" />
    </label>

    <label class="grid gap-1">
      <span class="text-sm font-semibold">Telefon</span>
      <input name="phone" required class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" />
    </label>

    <label class="grid gap-1 md:col-span-2">
      <span class="text-sm font-semibold">E‑Mail (optional)</span>
      <input name="email" type="email" class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" />
    </label>

    <label class="grid gap-1 md:col-span-2">
      <span class="text-sm font-semibold">Leistung</span>
      <select name="service" required class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400">
        <option value="">Bitte wählen…</option>
        <option>Fassaden streichen</option>
        <option>Dachreinigung</option>
        <option>Pflaster reinigen</option>
        <option>Holz streichen</option>
        <option>Steinteppich</option>
      </select>
    </label>

    <label class="grid gap-1 md:col-span-2">
      <span class="text-sm font-semibold">Nachricht</span>
      <textarea name="message" rows="5" required class="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"></textarea>
    </label>
  </div>

  <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60" disabled={status === 'sending'}>
      {status === 'sending' ? 'Senden…' : 'Anfrage senden'}
    </button>

    <a href={wa} target="_blank" rel="noopener" class="text-sm font-semibold text-emerald-700 hover:underline">
      oder direkt per WhatsApp schreiben →
    </a>
  </div>

  {#if status === 'success'}
    <div class="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
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
