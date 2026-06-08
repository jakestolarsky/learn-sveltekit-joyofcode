import "../../chunks/dev.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>Newsletter</h1> <form><input type="email" name="email"/> <button>Subscribe</button></form>`);
	});
}
//#endregion
export { _page as default };
