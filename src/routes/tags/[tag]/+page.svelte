<script lang="ts">
	import { page } from '$app/stores';
	import { SquareChevronRight } from 'lucide-svelte';
	const { data } = $props();

	const category = $page.params.tag;
</script>

<h1 class="text-4xl font-bold tracking-tight">{category}</h1>
<section>
	<ul class="mt-10">
		{#each data.posts as post}
			<li>
				<div class="flex flex-col my-4 p-2 border-b border-b-text/25 gap-2">
					<div class="flex items-center">
						<SquareChevronRight class="size-4 stroke-accent" />
						<a href={post.slug} class="text-xl font-bold ml-2">{post.title}</a>
					</div>
					<p class="text-text/90">{post.summary}</p>
					<p class="text-right">{post.publishedAt}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
