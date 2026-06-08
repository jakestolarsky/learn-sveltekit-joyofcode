// @ts-nocheck
import { getTodos } from '$lib/todo-database/database';
import type { PageServerLoad } from './$types';

export const load = async () => {
	const todos = getTodos();
	return { todos };
};
;null as any as PageServerLoad;