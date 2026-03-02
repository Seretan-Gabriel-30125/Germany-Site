import { json } from "@sveltejs/kit";
const POST = async ({ request }) => {
  const data = await request.json().catch(() => ({}));
  return json({ ok: true, received: data });
};
export {
  POST
};
