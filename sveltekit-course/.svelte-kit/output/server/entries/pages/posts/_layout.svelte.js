import { i as slot } from "../../../chunks/dev.js";
//#region src/routes/posts/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.push(`<div class="posts svelte-1w55t0d"><aside><h4>Posts</h4> <nav><ul><li><a href="/posts/one">One</a></li> <li><a href="/posts/two">Two</a></li></ul></nav></aside> <main><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></main></div>`);
}
//#endregion
export { _layout as default };
