import type { APIPost } from '../../../api/posts/+server.js';

// load all of posts of the given category
export async function load({ fetch, params }) {
	const res = await fetch('/api/posts');
	const allPosts: APIPost[] = await res.json();

	const posts = allPosts.filter((p) => p.categories.includes(params.category));

	return { posts };
}
