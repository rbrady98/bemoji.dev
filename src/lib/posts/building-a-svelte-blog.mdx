---
title: Building a static blog with Svelte 5
summary: Lets try to build a blog with svelte 5
categories: ['Svelte']
publishedAt: "30-5-2024"
published: true
---

Svelte 5 is coming out soon and as an average Svelte enjoyer I thought there was no better time to learn some of the new syntax while building my first blog.
While the project didn't give me much opportunity to really explore Svelte 5's new signal based reactivity model it did give me an idea of the improvements made in the framework.

## Using Snippets in Svelte 5
Svelte 5 has introduced Snippets to replace Slots for reusable pieces of markup in your code. A common complaint of Svelte was the verbosity of the component files with the restriction
of having one component per file. In Svelte 5 this has been addressed with Snippets. As I was building the navigation bar for the blog I found a nice opportunity to use snippets so lets see how that looked so lets see how that looked.

Initially my nav bar looked like this.
```svelte
<div class="z-10 top-0 inset-x-0">
	<div class="mx-auto max-w-screen-lg w-full px-4">
		<header class="flex items-center h-16 justify-between">
			<nav class="flex items-baseline">
				<a href="/" class="text-xl text-primary font-semibold mr-5">🅱️</a>
				<ul class="flex">
					<li class={$page.url.pathname === href ? 'text-accent font-bold m-3' : 'm-3 hover:opacity-60'}>
						<a {href}> Blog </a>
					</li>
					<li class={$page.url.pathname === href ? 'text-accent font-bold m-3' : 'm-3 hover:opacity-60'}>
						<a {href}> <Github /> </a>
					</li>
					<li class={$page.url.pathname === href ? 'text-accent font-bold m-3' : 'm-3 hover:opacity-60'}>
						<a {href}> <Linkedin /> </a>
					</li>
				</ul>
			</nav>
			<ThemeButton />
		</header>
	</div>
</div>
```
While this is completely fine I do like to adhere to the rule of 3 when it comes to repeating yourself. Overly DRY code is annoying but once it gets to 3 times it is time to DRY it up.
Let's create a snippet that accepts a href for the link and either a string or icon for displaying.

```svelte
{#snippet navLink(href: string, itemBody: string | Component)}
	<li class={$page.url.pathname === href ? 'text-accent font-bold m-3' : 'm-3 hover:opacity-60'}>
		<a {href}>
			{#if typeof itemBody === 'string'}
				{itemBody}
			{:else}
				<svelte:component this={itemBody} />
			{/if}
		</a>
	</li>
{/snippet}
```
Something else that is a nice improvement in Svelte 5 is that typescript can be now used not only in the script section of the component
but also in the markup which you can see here when typing the props that the snippet recieves.

To use a snippet you can use the new render tag
```svelte
<div class="z-10 top-0 inset-x-0">
	<div class="mx-auto max-w-screen-lg w-full px-4">
		<header class="flex items-center h-16 justify-between">
			<nav class="flex items-baseline">
				<a href="/" class="text-xl text-primary font-semibold mr-5">🅱️</a>
				<ul class="flex">
					{@render navLink('/blog', 'Blog')}
					{@render navLink('https://github.com/rbrady98', Github)}
					{@render navLink('https://www.linkedin.com/in/rian-brady-866016250/', Linkedin)}
				</ul>
			</nav>
			<ThemeButton />
		</header>
	</div>
</div>
```

I think this is a nice improvement over slots for a basic use base as we dont have to create another file with another component just for this small change.
I have read on the Github issues for Svelte that there are some cases where the UX for snippets could be better in places so I hope to see this feature evolve in the future.

## Classes are the new stores
