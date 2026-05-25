<script lang="ts">
	import { page } from '$app/state';
	import PostItem from '$lib/components/PostItem.svelte';
	const { data } = $props();
</script>

<main class="wrapper">
	<h1 class="">{page.params.category}</h1>
	<section>
		<ul class="unstyled-list">
			{#each data.posts as post (post.slug)}
				<li>
					<PostItem {post} />
				</li>
			{/each}
		</ul>
	</section>
</main>
