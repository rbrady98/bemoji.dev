<script lang="ts">
	const { data } = $props();

	const Post = $derived(data.post);
	const metadata = $derived(data.metadata);
</script>

<div class="wrapper flow">
	<div>
		<h1>{metadata.title}</h1>
		<p>{metadata.publishedAt}</p>
	</div>

	<Post />
</div>
