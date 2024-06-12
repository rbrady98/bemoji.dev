<script lang="ts">
	import SquareChevronRight from 'lucide-svelte/icons/square-chevron-right';

	const { data } = $props();
</script>

<h1 class="text-4xl font-bold tracking-tight">Latest</h1>
<section>
	<ul class="mt-10">
		{#each data.posts as post}
			<li>
				<div class="flex items-baseline justify-between my-4 p-2 border-b border-b-text/25">
					<div class="flex items-center">
						<SquareChevronRight class="size-4 stroke-accent" />
						<a href={post.slug} class="text-xl font-bold ml-2">{post.title}</a>
						<p class=" ml-2 text-text/90">{post.summary}</p>
					</div>
					<p class="pt-2">{post.publishedAt}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
