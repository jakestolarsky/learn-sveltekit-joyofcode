<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	async function addTodo(event: Event) {}

	async function removeTodo(event: Event) {}
</script>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<ul>
	{#each data.todos as todo}
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
