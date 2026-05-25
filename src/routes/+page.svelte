<script lang="ts">
	const { data } = $props();
</script>

<div class="wrapper flow">
	<section>
		<h1>Hi, I'm Rían</h1>
		<p>
			I'm a software engineer from Ireland.<br />Interested in Go, Svelte, Neovim and keyboard-based
			development.<br />Writing about learning, projects and mistakes.
		</p>
	</section>

	<h5 class="">Latest blog posts</h5>

	{#if data.posts.length === 0}
		<p class="">Well... There aren't any.</p>
	{:else}
		<section style="margin-bottom: var(--spacing);">
			{#each data.posts as post (post.slug)}
				<article class="flow">
					<h3>
						<a href={`/blog/${post.slug}`}>
							{post.title}
						</a>
					</h3>
					<p>{post.summary}</p>
					<ul class="category-list">
						{#each post.categories as category (category)}
							<li>{category}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</section>
	{/if}
</div>
