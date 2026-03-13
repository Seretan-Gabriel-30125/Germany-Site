export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/augsburg-munchen-germany-1-800.webp","images/augsburg-munchen-germany-1.webp","images/augsburg-munchen-germany-10-800.webp","images/augsburg-munchen-germany-10.webp","images/augsburg-munchen-germany-11-800.webp","images/augsburg-munchen-germany-11.webp","images/augsburg-munchen-germany-12-800.webp","images/augsburg-munchen-germany-12.webp","images/augsburg-munchen-germany-2-800.webp","images/augsburg-munchen-germany-2.webp","images/augsburg-munchen-germany-3-800.webp","images/augsburg-munchen-germany-3.webp","images/augsburg-munchen-germany-4-800.webp","images/augsburg-munchen-germany-4.webp","images/augsburg-munchen-germany-5-800.webp","images/augsburg-munchen-germany-5.webp","images/augsburg-munchen-germany-6-800.webp","images/augsburg-munchen-germany-6.webp","images/augsburg-munchen-germany-7-800.webp","images/augsburg-munchen-germany-7.webp","images/augsburg-munchen-germany-8-800.webp","images/augsburg-munchen-germany-8.webp","images/augsburg-munchen-germany-9-800.webp","images/augsburg-munchen-germany-9.webp","images/dachreinigung-nachher-1.jpg","images/dachreinigung-vergleich-1.jpg","images/dachreinigung-vorher-1.jpg","robots.txt"]),
	mimeTypes: {".webp":"image/webp",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DZe9n9xi.js",app:"_app/immutable/entry/app.Cx8LjQoR.js",imports:["_app/immutable/entry/start.DZe9n9xi.js","_app/immutable/chunks/BBs4FV0R.js","_app/immutable/chunks/D3SDBk_e.js","_app/immutable/entry/app.Cx8LjQoR.js","_app/immutable/chunks/D3SDBk_e.js","_app/immutable/chunks/C9eTbKxF.js","_app/immutable/chunks/DwxSAxNi.js","_app/immutable/chunks/DHR4T5mW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/kontakt",
				pattern: /^\/kontakt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/leistungen",
				pattern: /^\/leistungen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projekte",
				pattern: /^\/projekte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
