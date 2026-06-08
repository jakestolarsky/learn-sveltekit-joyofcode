

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DjQeYS8X.js","_app/immutable/chunks/BVVHQzhB.js","_app/immutable/chunks/4i8WePRi.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = [];
export const fonts = [];
