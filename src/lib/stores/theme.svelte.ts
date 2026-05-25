import { browser } from '$app/environment';

class ThemeToggle {
	isDark = $state(false);

	constructor() {
		if (browser) {
			this.isDark =
				localStorage.theme === 'dark' ||
				(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
			document.documentElement.classList.toggle('dark', this.isDark);
		}
	}

	toggle() {
		this.isDark = !this.isDark;
		document.documentElement.classList.toggle('dark', this.isDark);
		localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
	}
}

export const themeToggle = new ThemeToggle();
