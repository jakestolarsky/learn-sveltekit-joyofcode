<script lang="ts">
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<pre>
    {JSON.stringify(form, null, 2)}
</pre>

<ul>
	{#each data.todos as todo (todo.id)}
		<li>
			<span>{todo.text}</span>
			<form method="POST" action="?/removeTodo">
				<input type="hidden" name="id" value={todo.id} />
				<button class="delete" type="submit">❌</button>
			</form>
		</li>
	{/each}
</ul>

<form method="POST" action="?/addTodo">
	<input type="text" name="todo" />
	{#if form?.missing}
		<p class="error">This field is required</p>
	{/if}
	<button type="submit">+ Add Todo</button>
	<button formaction="?/clearTodos" class="secondary" type="submit">Clear</button>
</form>

{#if form?.success}
	<p>Added todo 🎉</p>
{/if}

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
