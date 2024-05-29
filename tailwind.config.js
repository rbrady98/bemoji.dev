/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			foreground: '#bdbdbd',
			background: '#080808',
			primary: '#cf87e8',
			secondary: '#80a0ff',
			accent: '#ff5189'
		},
		extend: {}
	},
	plugins: []
};
