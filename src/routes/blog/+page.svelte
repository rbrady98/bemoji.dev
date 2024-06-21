<script lang="ts">
	import PostItem from '$lib/components/PostItem.svelte';

	const { data } = $props();

	const categories = data.posts.reduce<string[]>((acc, curr) => {
		acc.push(...curr.categories);
		return acc;
	}, []);
</script>

{#if data.posts.length === 0}
	<h1 class="text-4xl">Tumbleweeds...</h1>
{:else}
	<div class="flex flex-col-reverse md:flex-row">
		<section class="mt-10 md:m-0">
			<h1 class="text-4xl font-bold tracking-tight">Latest</h1>
			<ul class="mt-10">
				{#each data.posts as post}
					<li>
						<PostItem {post} />
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<h1 class="text-4xl font-bold tracking-tight">Categories</h1>
			<div class="flex flex-wrap gap-3 mt-4">
				{#each categories as category}
					<a
						href={`blog/category/${category}`}
						class="flex justify-center font-semibold p-1 min-w-12 rounded-md bg-accent/40 transition-transform duration-200 hover:scale-110 hover:bg-accent/60"
					>
						{category}
					</a>
				{/each}
			</div>
		</section>
	</div>
{/if}
