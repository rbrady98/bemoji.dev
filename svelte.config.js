import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { getHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getHighlighter({
						themes: ['github-dark', 'github-light'],
						langs: ['javascript', 'typescript', 'go']
					});
					await highlighter.loadLanguage('javascript', 'typescript', 'go');
					const html = escapeSvelte(
						highlighter.codeToHtml(code, {
							lang,
							themes: { dark: 'github-dark', light: 'github-light' }
						})
					);
					return `{@html \`${html}\` }`;
				}
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
