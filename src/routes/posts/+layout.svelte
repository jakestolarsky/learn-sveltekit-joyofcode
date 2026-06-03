<script lang="ts">
	import type { Post } from '../../../generated/prisma/client';

	async function getPosts() {
		const response = await fetch('api/posts');
		const posts: Post[] = await response.json();
		return posts;
	}
</script>

<div class="posts">
	<aside>
		<h4>Posts</h4>
		<nav>
			<ul>
				{#await getPosts()}
					<p>Loading..</p>
				{:then posts}
					<p>Showing {posts.length} posts.</p>

					{#each posts as { slug, title }}
						<li>
							<a href="/posts/{slug}">{title}</a>
						</li>
					{/each}
				{:catch error}
					<p>{error.message}</p>
				{/await}
			</ul>
		</nav>
	</aside>
	<main>
		<slot />
	</main>
</div>

<style>
	.posts {
		display: grid;
		gap: 2rem;
		grid-template-columns: 200px 60ch;
		margin-top: 2rem;
	}
</style>
