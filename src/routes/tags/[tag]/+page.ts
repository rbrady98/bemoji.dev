import type { APIPost } from '../../api/posts/+server.js';

// load all of the tags
export async function load({ fetch, params }) {
	const res = await fetch('/api/posts');
	const allPosts: APIPost[] = await res.json();
	console.log(allPosts);

	const posts = allPosts.filter((p) => p.categories.includes(params.tag));

	return { posts };
}
