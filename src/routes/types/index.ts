import type { Component } from 'svelte';

export type MarkdownPost = {
	metadata: {
		title: string;
		publishedAt: string;
		summary: string;
	};
	default: Component;
};
