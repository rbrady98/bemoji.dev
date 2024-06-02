<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	import { themeToggle } from '$lib/stores/theme.svelte';
</script>

<div class="rounded-lg hover:bg-foreground/20 p-1" onclick={themeToggle.toggle}>
	{#key themeToggle.isDark}
		<div in:fly={{ y: 20 }}>
			{#if themeToggle.isDark}
				<Moon />
			{:else}
				<Sun />
			{/if}
		</div>
	{/key}
</div>
