/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			text: 'rgb(var(--text) / <alpha-value>)',
			background: 'rgb(var(--background) / <alpha-value>)',
			primary: 'rgb(var(--primary) / <alpha-value>)',
			secondary: 'rgb(var(--secondary) / <alpha-value>)',
			accent: 'rgb(var(--accent) / <alpha-value>)'
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
