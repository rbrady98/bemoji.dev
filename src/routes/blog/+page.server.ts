import type { APIPost } from '../api/posts/+server.js';

export async function load({ fetch }) {
	const res = await fetch('api/posts');
	const posts: APIPost[] = await res.json();

	return { posts };
}
