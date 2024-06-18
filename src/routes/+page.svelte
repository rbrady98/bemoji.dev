<script lang="ts">
	const { data } = $props();
</script>

<section>
	<h1 class="font-bold text-8xl tracking-tighter py-7">
		Hi, I'm <span
			class="bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-secondary"
			>Rían</span
		>
	</h1>
	<h3 class="text-lg">I'm a software engineer from Ireland.</h3>
	<h3 class="text-lg">Interested in Go, Svelte, Neovim and keyboard-based development</h3>
	<h3 class="text-lg">Writing about learning, projects and mistakes.</h3>
</section>

<h1 class="mt-10 font-semibold text-xl text-accent">Latest blog posts</h1>

{#if data.posts.length === 0}
	<h1 class="text-lg">Well... There aren't any.</h1>
{:else}
	<section>
		{#each data.posts as post}
			<article class="group mt-10 flex flex-col">
				<a href={`/blog/${post.slug}`}>
					<h1 class="text-2xl font-semibold group-hover:text-secondary">{post.title}</h1>
					<h1 class="text-lg mt-4">{post.summary}</h1>
					<div class="flex gap-2 mt-4">
						{#each post.categories as category}
							<span
								class="flex justify-center font-semibold p-1 min-w-12 rounded-md bg-secondary/20 border-b-2 border-secondary/50"
							>
								{category}
							</span>
						{/each}
					</div>
				</a>
			</article>
		{/each}
	</section>
{/if}
