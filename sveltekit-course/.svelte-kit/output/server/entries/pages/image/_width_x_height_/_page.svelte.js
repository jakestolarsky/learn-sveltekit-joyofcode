import { L as escape_html, a as store_get, o as unsubscribe_stores } from "../../../../chunks/dev.js";
import { t as page } from "../../../../chunks/stores.js";
//#region src/routes/image/[width]x[height]/+page.svelte
function _page($$renderer) {
	var $$store_subs;
	$$renderer.push(`<h1>Dimentions</h1> <pre>
    ${escape_html(JSON.stringify(store_get($$store_subs ??= {}, "$page", page), null, 3))}
</pre>`);
	if ($$store_subs) unsubscribe_stores($$store_subs);
}
//#endregion
export { _page as default };
