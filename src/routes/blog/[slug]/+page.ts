import type { Post } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post: Post = await import(`../../../lib/posts/${params.slug}.mdx`);

	return {
		metadata: post.metadata,
		post: post.default
	};
};
