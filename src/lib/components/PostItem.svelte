<script lang="ts">
	import type { APIPost } from '$lib/types';
	import SquareChevronRight from 'lucide-svelte/icons/square-chevron-right';

	const { post }: { post: APIPost } = $props();
</script>

<article>
	<a href={`/blog/${post.slug}`} aria-label={post.title}></a>
	<div>
		<SquareChevronRight class="chevron" />
		<h3>
			<a href={`/blog/${post.slug}`}>
				{post.title}
			</a>
		</h3>
	</div>
	<p>{post.summary}</p>
	<p>{post.publishedAt}</p>
</article>

<style>
	article {
		display: flex;
		gap: var(--spacing);
		flex-direction: column;
	}
	div {
		display: flex;
		align-items: center;
		gap: var(--spacing);
	}

	p {
		font-size: var(--fs-300);
	}

	:global(.chevron) {
		transition: transform 0.2s ease;
	}

	article:hover :global(.chevron) {
		transform: translateX(4px);
	}
</style>
