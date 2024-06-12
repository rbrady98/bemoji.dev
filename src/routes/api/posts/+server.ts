import { json } from '@sveltejs/kit';
import type { Post } from '../../types';

export type APIPost = {
	slug: string;
} & Post['metadata'];

export const GET = async () => {
	const paths = import.meta.glob<Post>('/src/lib/posts/*.md', { eager: true });

	const posts: APIPost[] = [];
	for (const path in paths) {
		let slug = path.split('/').at(-1)?.replace('.md', '');
		if (!slug) {
			continue;
		}

		slug = 'blog/' + slug;

		const post = { slug, ...paths[path].metadata };
		post.published && posts.push(post);
	}

	return json(posts);
};
