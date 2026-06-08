import "../../../chunks/dev.js";
//#region src/routes/posts/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<h1>Posts</h1> <p>You can <a href="/posts/create">+create</a> or edit posts here.</p>`);
}
//#endregion
export { _page as default };
