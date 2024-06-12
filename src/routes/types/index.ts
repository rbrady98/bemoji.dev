import type { Component } from 'svelte';

export type Post = {
	metadata: {
		title: string;
		summary: string;
		categories: string[];
		publishedAt: string;
		published: boolean;
	};
	default: Component;
};
