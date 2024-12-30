<script lang="ts">
	const { data } = $props();

	const { post: Post, metadata } = data;
</script>

<div
	class="flex flex-col gap-4 bg-gradient-to-r from-accent via-primary to-secondary bg-[length:100%_2px] bg-no-repeat bg-bottom"
>
	<h1 class="font-semibold text-4xl">{metadata.title}</h1>
	<h3 class="mb-2 text-right">
		{metadata.publishedAt}
	</h3>
</div>
<article
	class="mt-10 mb-10 prose prose-lg dark:prose-invert max-w-none prose-h2:bg-gradient-to-r prose-h2:from-accent prose-h2:via-primary prose-h2:to-secondary prose-h2:bg-[length:100%_2px] prose-h2:bg-no-repeat prose-h2:bg-bottom prose-h2:inline-block"
>
	<Post />
</article>
