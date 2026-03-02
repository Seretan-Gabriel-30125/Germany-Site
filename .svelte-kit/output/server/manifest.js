export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/augsburg-munchen-germany-1-800.webp","images/augsburg-munchen-germany-1.webp","images/augsburg-munchen-germany-10-800.webp","images/augsburg-munchen-germany-10.webp","images/augsburg-munchen-germany-11-800.webp","images/augsburg-munchen-germany-11.webp","images/augsburg-munchen-germany-12-800.webp","images/augsburg-munchen-germany-12.webp","images/augsburg-munchen-germany-2-800.webp","images/augsburg-munchen-germany-2.webp","images/augsburg-munchen-germany-3-800.webp","images/augsburg-munchen-germany-3.webp","images/augsburg-munchen-germany-4-800.webp","images/augsburg-munchen-germany-4.webp","images/augsburg-munchen-germany-5-800.webp","images/augsburg-munchen-germany-5.webp","images/augsburg-munchen-germany-6-800.webp","images/augsburg-munchen-germany-6.webp","images/augsburg-munchen-germany-7-800.webp","images/augsburg-munchen-germany-7.webp","images/augsburg-munchen-germany-8-800.webp","images/augsburg-munchen-germany-8.webp","images/augsburg-munchen-germany-9-800.webp","images/augsburg-munchen-germany-9.webp","robots.txt"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BFI21wCP.js",app:"_app/immutable/entry/app.DTRLF5B_.js",imports:["_app/immutable/entry/start.BFI21wCP.js","_app/immutable/chunks/L-1Q2leJ.js","_app/immutable/chunks/DYbWuzXe.js","_app/immutable/chunks/DpRJBqn8.js","_app/immutable/entry/app.DTRLF5B_.js","_app/immutable/chunks/DYbWuzXe.js","_app/immutable/chunks/BWQ23rCb.js","_app/immutable/chunks/DpRJBqn8.js","_app/immutable/chunks/DB6wpHOq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/anfrage",
				pattern: /^\/api\/anfrage\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/anfrage/_server.ts.js'))
			}
		],
		prerendered_routes: new Set(["/","/kontakt","/leistungen","/projekte"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
