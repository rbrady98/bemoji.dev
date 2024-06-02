import type { MarkdownPost } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post: MarkdownPost = await import(`../../../lib/posts/${params.slug}.md`);

	return {
		metadata: post.metadata,
		post: post.default
	};
};
