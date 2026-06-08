
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
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/[[lang]]/about" | "/api" | "/api/newsletter" | "/api/posts" | "/demo" | "/demo/playwright" | "/forms" | "/image" | "/image/[width]x[height]" | "/login" | "/posts" | "/posts/create" | "/posts/[slug]" | "/todos-sveltekit-forms" | "/todos" | "/[[lang]]";
		RouteParams(): {
			"/[[lang]]/about": { lang?: string | undefined };
			"/image/[width]x[height]": { width: string; height: string };
			"/posts/[slug]": { slug: string };
			"/[[lang]]": { lang?: string | undefined }
		};
		LayoutParams(): {
			"/": { lang?: string | undefined; width?: string | undefined; height?: string | undefined; slug?: string | undefined };
			"/[[lang]]/about": { lang?: string | undefined };
			"/api": Record<string, never>;
			"/api/newsletter": Record<string, never>;
			"/api/posts": Record<string, never>;
			"/demo": Record<string, never>;
			"/demo/playwright": Record<string, never>;
			"/forms": Record<string, never>;
			"/image": { width?: string | undefined; height?: string | undefined };
			"/image/[width]x[height]": { width: string; height: string };
			"/login": Record<string, never>;
			"/posts": { slug?: string | undefined };
			"/posts/create": Record<string, never>;
			"/posts/[slug]": { slug: string };
			"/todos-sveltekit-forms": Record<string, never>;
			"/todos": Record<string, never>;
			"/[[lang]]": { lang?: string | undefined }
		};
		Pathname(): "/" | `${string}/about` & {} | "/api/newsletter" | "/api/posts" | "/demo" | "/demo/playwright" | "/forms" | `/image/${string}x[height]` & {} | "/login" | "/posts" | "/posts/create" | `/posts/${string}` & {} | "/todos-sveltekit-forms" | "/todos";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}