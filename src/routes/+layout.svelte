<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
	import '@fontsource/lato';

	let { children } = $props();
</script>

<svelte:head>
	<title>🅱️.dev</title>
</svelte:head>

<NavBar />

<main class="pt-12 max-w-5xl mx-auto">
	{@render children()}
</main>
