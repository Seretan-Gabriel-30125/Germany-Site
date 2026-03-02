import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B4lX0CVC.js","_app/immutable/chunks/BWQ23rCb.js","_app/immutable/chunks/DYbWuzXe.js","_app/immutable/chunks/z9ecal_k.js","_app/immutable/chunks/t-8iGolz.js","_app/immutable/chunks/DB6wpHOq.js","_app/immutable/chunks/Di3DKkYA.js","_app/immutable/chunks/O4d0YrtR.js","_app/immutable/chunks/D83FEnWH.js","_app/immutable/chunks/L-1Q2leJ.js","_app/immutable/chunks/DpRJBqn8.js"];
export const stylesheets = ["_app/immutable/assets/0.CkRoeB2U.css"];
export const fonts = [];
