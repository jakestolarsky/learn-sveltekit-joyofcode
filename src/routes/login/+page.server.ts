import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const user = String(formData.get('user'));
		const password = String(formData.get('password'));
	}
};
