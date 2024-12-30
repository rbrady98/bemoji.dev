/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,mdx}'],
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
		extend: {
			// updating prose headers
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						}
					}
				},
				lg: {
					css: {
						'--tw-prose-headings': theme('colors.text')
					}
				},
				invert: {
					css: {
						'--tw-prose-headings': theme('colors.text')
					}
				}
			})
		},
		animation: {
			blob: 'blob 20s linear infinite',
			'reverse-blob': 'reverse-blob 20s linear infinite'
		},
		keyframes: {
			blob: {
				'0%': { transform: 'rotate(0deg)' },
				'50%': { scale: '1 2' },
				'100%': { transform: 'rotate(360deg)' }
			},
			'reverse-blob': {
				'0%': { transform: 'rotate(0deg)' },
				'50%': { scale: '1 1.5' },
				'100%': { transform: 'rotate(-360deg)' }
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
