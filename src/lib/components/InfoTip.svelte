<script lang="ts">
	const { children } = $props();
	import BadgeInfo from 'lucide-svelte/icons/badge-info';
</script>

<aside class="info-callout">
	<div class="callout-badge">
		<BadgeInfo size={48} color="var(--primary)" fill="var(--bg-color)" />
	</div>
	<div class="">
		{@render children?.()}
	</div>
</aside>

<style>
	.info-callout {
		position: relative;
		margin-inline-start: 1.5rem;
		padding-block: 1.5rem;
		padding-inline: 3rem 1.5rem;
		background-color: hsl(from var(--primary) h s 30%);
		border-inline-start: 4px solid var(--primary);
		border-radius: var(--border-radius);

		& .callout-badge {
			position: absolute;
			top: -13px;
			left: -26px;
		}
	}
</style>
