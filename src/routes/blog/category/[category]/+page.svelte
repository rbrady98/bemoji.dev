<script lang="ts">
	import { page } from '$app/stores';
	import PostItem from '$lib/components/PostItem.svelte';
	const { data } = $props();

	const category = $page.params.category;
</script>

<h1 class="text-4xl font-bold tracking-tight">{category}</h1>
<section>
	<ul class="mt-10">
		{#each data.posts as post}
			<li>
				<PostItem {post} />
			</li>
		{/each}
	</ul>
</section>
