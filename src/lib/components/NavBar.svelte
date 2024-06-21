<script lang="ts">
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Github from 'lucide-svelte/icons/github';
	import type { Component } from 'svelte';

	import { page } from '$app/stores';
	import ThemeButton from '$lib/components/ThemeButton.svelte';
</script>

{#snippet navLink(href: string, itemBody: string | Component)}
	<li class={$page.url.pathname === href ? 'text-accent font-bold m-3' : 'm-3 hover:opacity-60'}>
		<a {href}>
			{#if typeof itemBody === 'string'}
				{itemBody}
			{:else}
				<svelte:component this={itemBody} />
			{/if}
		</a>
	</li>
{/snippet}

<div class="z-10 top-0 inset-x-0">
	<div class="mx-auto max-w-screen-lg w-full px-4">
		<header class="flex items-center h-16 justify-between">
			<nav class="flex items-baseline">
				<a href="/" class="text-xl text-primary font-semibold mr-5">🅱️</a>
				<ul class="flex">
					{@render navLink('/blog', 'Blog')}
					{@render navLink('https://github.com/rbrady98', Github)}
					{@render navLink('https://www.linkedin.com/in/rian-brady-866016250/', Linkedin)}
				</ul>
			</nav>
			<ThemeButton />
		</header>
	</div>
</div>
