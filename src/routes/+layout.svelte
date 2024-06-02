<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>🅱️.dev</title>
</svelte:head>

{@render children()}
