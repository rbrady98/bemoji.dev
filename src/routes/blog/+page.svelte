<script lang="ts">
	import PostItem from '$lib/components/PostItem.svelte';

	const { data } = $props();

	const categories = $derived([...new Set(data.posts.flatMap((p) => p.categories))]);
</script>

{#if data.posts.length === 0}
	<h1 class="">Tumbleweeds...</h1>
{:else}
	<div class="wrapper columns">
		<section>
			<h1>Posts</h1>
			<ul class="unstyled-list">
				{#each data.posts as post (post.slug)}
					<li>
						<PostItem {post} />
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 style="margin-bottom: var(--spacing)">Categories</h2>
			<ul class="category-list flex-wrap">
				{#each categories as category (category)}
					<li>
						<a href={`blog/category/${category}`} style="text-decoration: none;">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	</div>
{/if}

<style>
	.columns {
		display: flex;
		flex-wrap: wrap;
		gap: calc(var(--spacing) * 2);

		& > :first-child {
			flex-grow: 3;
			flex-basis: 400px;
		}

		& > :last-child {
			flex-grow: 1;
			flex-basis: 200px;
		}
	}

	.flex-wrap {
		flex-wrap: wrap;
	}
</style>
