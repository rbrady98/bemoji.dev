<script lang="ts">
	const { data } = $props();

	const { post: Post, metadata } = data;
</script>

<h1 class="font-semibold text-6xl">{metadata.title}</h1>
<h3>
	{metadata.publishedAt}
</h3>
<article class="prose dark:prose-invert max-w-none">
	<Post />
</article>
