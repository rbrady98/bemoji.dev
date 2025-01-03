import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { getSingletonHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.mdx'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getSingletonHighlighter({
						themes: ['catppuccin-mocha', 'catppuccin-latte'],
						langs: ['javascript', 'typescript', 'go', 'bash', 'svelte']
					});
					await highlighter.loadLanguage('javascript', 'typescript', 'go', 'bash', 'svelte');
					const html = escapeSvelte(
						highlighter.codeToHtml(code, {
							lang,
							themes: { dark: 'catppuccin-mocha', light: 'catppuccin-latte' }
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
