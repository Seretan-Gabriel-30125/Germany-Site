
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/anfrage" | "/kontakt" | "/leistungen" | "/projekte";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/api": Record<string, never>;
			"/api/anfrage": Record<string, never>;
			"/kontakt": Record<string, never>;
			"/leistungen": Record<string, never>;
			"/projekte": Record<string, never>
		};
		Pathname(): "/" | "/api/anfrage" | "/kontakt" | "/leistungen" | "/projekte";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/augsburg-munchen-germany-1-800.webp" | "/images/augsburg-munchen-germany-1.webp" | "/images/augsburg-munchen-germany-10-800.webp" | "/images/augsburg-munchen-germany-10.webp" | "/images/augsburg-munchen-germany-11-800.webp" | "/images/augsburg-munchen-germany-11.webp" | "/images/augsburg-munchen-germany-12-800.webp" | "/images/augsburg-munchen-germany-12.webp" | "/images/augsburg-munchen-germany-2-800.webp" | "/images/augsburg-munchen-germany-2.webp" | "/images/augsburg-munchen-germany-3-800.webp" | "/images/augsburg-munchen-germany-3.webp" | "/images/augsburg-munchen-germany-4-800.webp" | "/images/augsburg-munchen-germany-4.webp" | "/images/augsburg-munchen-germany-5-800.webp" | "/images/augsburg-munchen-germany-5.webp" | "/images/augsburg-munchen-germany-6-800.webp" | "/images/augsburg-munchen-germany-6.webp" | "/images/augsburg-munchen-germany-7-800.webp" | "/images/augsburg-munchen-germany-7.webp" | "/images/augsburg-munchen-germany-8-800.webp" | "/images/augsburg-munchen-germany-8.webp" | "/images/augsburg-munchen-germany-9-800.webp" | "/images/augsburg-munchen-germany-9.webp" | "/robots.txt" | string & {};
	}
}