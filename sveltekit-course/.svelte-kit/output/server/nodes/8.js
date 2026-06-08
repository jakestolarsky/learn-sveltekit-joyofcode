

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.BDdedb5f.js","_app/immutable/chunks/BVVHQzhB.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = [];
export const fonts = [];
