

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BtX3hFag.js","_app/immutable/chunks/BVVHQzhB.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = ["_app/immutable/assets/2.BE4sl_0c.css"];
export const fonts = [];
