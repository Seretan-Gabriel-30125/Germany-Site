import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BqCLQq1E.js","_app/immutable/chunks/C9eTbKxF.js","_app/immutable/chunks/D3SDBk_e.js","_app/immutable/chunks/BBm9tZVI.js","_app/immutable/chunks/5EP14Pso.js","_app/immutable/chunks/DwxSAxNi.js","_app/immutable/chunks/Drs6mf3B.js","_app/immutable/chunks/hgWdN6nc.js","_app/immutable/chunks/BBs4FV0R.js"];
export const stylesheets = ["_app/immutable/assets/0.COcEQiBX.css"];
export const fonts = [];
