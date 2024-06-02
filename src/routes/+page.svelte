<script lang="ts">
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Github from 'lucide-svelte/icons/github';
	import type { Component } from 'svelte';

	import { page } from '$app/stores';
	import ThemeButton from '$lib/components/ThemeButton.svelte';
	// eslint-disable-next-line svelte/valid-compile
	const path = $page.url.pathname;
</script>

{#snippet navLink(active: boolean, href: string, itemBody: string | Component)}
	<li class={active ? 'text-primary font-bold m-3' : 'm-3 hover:text-primary'}>
		<a {href}>
			{#if typeof itemBody === 'string'}
				{itemBody}
			{:else}
				<svelte:component this={itemBody} />
			{/if}
		</a>
	</li>
{/snippet}

<div class="fixed z-10 top-0 inset-x-0">
	<div class="mx-auto max-w-screen-lg w-full">
		<header class="flex items-center h-16 justify-between">
			<nav class="flex items-baseline">
				<a href="/" class="text-2xl text-primary font-semibold mr-5">Rian Brady</a>
				<ul class="flex">
					{@render navLink(path === '/blog', 'https://youtube.com', 'Blog')}
					{@render navLink(path === '/resume', 'https://youtube.com', 'Resume')}
					{@render navLink(false, 'https://youtube.com', Github)}
					{@render navLink(false, 'https://youtube.com', Linkedin)}
				</ul>
			</nav>
			<ThemeButton />
		</header>
	</div>
</div>
