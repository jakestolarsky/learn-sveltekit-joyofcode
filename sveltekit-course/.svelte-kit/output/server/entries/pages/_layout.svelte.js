import { i as slot } from "../../chunks/dev.js";
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.push(`<nav><ul><li><a href="/">Home</a></li> <li><a href="/posts">Posts</a></li></ul></nav> <!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]-->`);
}
//#endregion
export { _layout as default };
