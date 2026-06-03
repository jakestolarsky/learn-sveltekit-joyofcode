<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageProps } from './$types';

	type Data = {
		success: boolean;
		errors: Record<string, string>;
	};

	let { data }: PageProps = $props();

	let form: Data;

	async function addTodo(event: SubmitEvent) {
		event.preventDefault();

		const formElement = event.currentTarget as HTMLFormElement;
		const data = new FormData(formElement);

		const response = await fetch(formElement.action, {
			method: 'POST',
			body: data
		});

		const responseData = await response.json();
		form = responseData;

		formElement.reset();
		await invalidateAll();
	}

	async function removeTodo(event: SubmitEvent) {
		event.preventDefault();

		const formElement = event.currentTarget as HTMLFormElement;
		const data = new FormData(formElement);

		await fetch(formElement.action, {
			method: 'DELETE',
			body: data
		});

		await invalidateAll();
	}
</script>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<ul>
	{#each data.todos as todo (todo.id)}
		<li>
			<span>{todo.text}</span>
			<form onsubmit={removeTodo} method="POST">
				<input type="hidden" name="id" value={todo.id} />
				<button class="delete" type="submit">❌</button>
			</form>
		</li>
	{/each}
</ul>

<form onsubmit={addTodo} method="POST">
	<input type="text" name="todo" />
	<button type="submit">+ Add Todo</button>
</form>

<style>
	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
	}

	.error {
		color: tomato;
	}
</style>
