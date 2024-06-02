import { json } from '@sveltejs/kit';

export const GET = async () => {
	const postFiles = import.meta.glob('/src/lib/posts/*.md', { eager: true });
	return json(postFiles);
};
