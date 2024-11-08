import { json } from '@sveltejs/kit';
import type { Post } from '../../types';

export type APIPost = {
	slug: string;
} & Post['metadata'];

export const GET = async () => {
	const paths = import.meta.glob<Post>('/src/lib/posts/*.mdx', { eager: true });

	const posts: APIPost[] = [];
	for (const path in paths) {
		const slug = path.split('/').at(-1)?.replace('.mdx', '');
		if (!slug) {
			continue;
		}

		const post = { slug, ...paths[path].metadata };
		(post.published || !import.meta.env.PROD) && posts.push(post);
	}

	return json(posts);
};

export const prerender = true;
