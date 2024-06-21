<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
	import '@fontsource/lato';

	let { children } = $props();
</script>

<NavBar />

<main class="pt-12 max-w-5xl mx-auto px-4">
	{@render children()}
</main>
