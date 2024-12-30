<script>
	const { children } = $props();
	import BadgeInfo from 'lucide-svelte/icons/badge-info';
</script>

<section class="ml-5 relative border-l-4 after:bg-accent border-accent w-auto md:w-1/2 p-2">
	<div id="icon-box" class="absolute z-50 text-accent -top-4 -left-[26px]">
		<BadgeInfo size={48} class="fill-background" />
	</div>
	<div class="pl-4">
		{@render children?.()}
	</div>
</section>

<style>
	section:after {
		content: '';
		z-index: 10;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.1;
		border-radius: 0 0.5rem 0.5rem 0;
	}
</style>
