// @ts-nocheck
import db from '$lib/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const post = await db.post.findUnique({
		where: { slug: params.slug }
	});

	if (!post) throw error(404, 'Post not found');

	return { post };
};
