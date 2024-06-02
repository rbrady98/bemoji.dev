<script lang="ts">
	const { data } = $props();

	const { post: Post, metadata } = data;
</script>

<article class="">
	<h1>{metadata.title}</h1>
	<h3>
		{metadata.publishedAt}
	</h3>
	<Post />
</article>
