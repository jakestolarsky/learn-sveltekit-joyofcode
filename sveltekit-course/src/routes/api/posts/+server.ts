import { json, type RequestHandler } from '@sveltejs/kit';
import db from '$lib/database';

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? 20);
	const order = url.searchParams.get('order') ?? 'asc';

	const posts = await db.post.findMany({
		orderBy: { id: order },
		take: limit
	});
	return json(posts);
};
