function createThemeToggle() {
	let dark = false;
	if (
		localStorage.theme === 'dark' ||
		(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		dark = true;
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	let isDark = $state(dark);

	function toggle() {
		console.log('called toggle');
		if (isDark) {
			isDark = false;
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			isDark = true;
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	}

	return {
		get isDark() {
			return isDark;
		},
		toggle
	};
}

export const themeToggle = createThemeToggle();
