<script lang="ts">
	import Github from 'lucide-svelte/icons/github';
	import type { Icon as IconType } from 'lucide-svelte';
</script>

{#snippet navLink(href: string, itemBody: string | typeof IconType)}
	<li>
		<a {href}>
			{#if typeof itemBody === 'string'}
				{itemBody}
			{:else}
				{@const Icon = itemBody}
				<Icon class="nav-icon" />
			{/if}
		</a>
	</li>
{/snippet}

<header class="wrapper">
	<nav>
		<ul>
			{@render navLink('/', '🅱️')}
			{@render navLink('/blog', 'Blog')}
			{@render navLink('https://github.com/rbrady98', Github)}
		</ul>
	</nav>
</header>
