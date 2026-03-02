import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
  const data = await request.json().catch(() => ({}));
  // Placeholder for server-side email sending. (Does not run with adapter-static.)
  return json({ ok: true, received: data });
};
