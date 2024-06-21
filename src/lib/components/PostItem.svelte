<script lang="ts">
	import type { APIPost } from '../../routes/api/posts/+server';
	import SquareChevronRight from 'lucide-svelte/icons/square-chevron-right';

	const { post }: { post: APIPost } = $props();
</script>

<a
	href={`/blog/${post.slug}`}
	class="group flex flex-col my-12 p-2 bg-gradient-to-r from-accent via-primary to-secondary bg-[length:100%_2px] bg-no-repeat bg-bottom gap-2"
>
	<div class="flex items-center">
		<SquareChevronRight
			class="size-4 stroke-accent transition-transform group-hover:translate-x-1 hidden md:block"
		/>
		<h1 class="text-xl font-bold md:ml-2 group-hover:text-secondary">{post.title}</h1>
	</div>
	<p class="text-text/90">{post.summary}</p>
	<p class="text-right">{post.publishedAt}</p>
</a>
