<script>
	import TitleBar from '$components/TitleBar.svelte'
	import Button from '$components/Button.svelte'
	import Overlay from '$components/Overlay.svelte'
	import { dev } from '$app/environment'
	import { prefs } from '$library/stores'
	import { onMount } from 'svelte'

	/** @type {import('./$types').PageData} */
	export let data

	$: ({ title, cta, palette, avatars, lang } = data)

	// TODO remove mounted image refresh hack

	let mounted = false

	onMount(() => (mounted = true))
</script>

<TitleBar href="{lang}/nickname" {title} />

<div class="title">{title}</div>
<img
	class="avatar"
	class:on={mounted}
	src="/avatars/{$prefs.avatar}.webp"
	alt=""
	style:--c-swatch={palette[$prefs.swatch]}
	height="160"
	width="160"
/>

<div class="palette">
	{#each palette as colour, i}
		<button
			class="swatch"
			class:on={$prefs.swatch === i}
			style:--c-swatch={colour}
			on:click={() => ($prefs.swatch = i)}
			aria-label="Swatch"
			style:transition-delay={`${0.1 + i * 0.05}s`}
		></button>
	{/each}
</div>

<div class="pack" style:--c-swatch={palette[$prefs.swatch]}>
	{#each Array(avatars.count - 1) as _, i}
		<button class="item" on:click={() => ($prefs.avatar = `${avatars.pack}/avatar-${i + 1}`)}>
			<img
				class="thumb"
				class:on={$prefs.avatar.endsWith(`avatar-${i + 1}`)}
				src="/avatars/{avatars.pack}/avatar-{i + 1}.webp"
				alt=""
				height="80"
				width="80"
				style:transition-delay={`${0.1 + i * 0.05}s`}
			/>
		</button>
	{/each}
</div>

<div class="bar">
	<Button href="{lang}/">{cta}</Button>
</div>

{#if dev}
	<Overlay mobile="/designs/avatar.png" />
{/if}

<style>
	.title {
		font: 700 var(--f-h5);
		margin-block-start: 0.5rem;
		opacity: 1;
		text-align: center;
		transition:
			opacity 0.6s ease,
			translate 0.6s ease;
		translate: 0 0;

		@starting-style {
			opacity: 0;
			translate: 0 20px;
		}
	}

	.avatar {
		background-color: hsl(var(--c-swatch) / 0.9);
		border-radius: var(--r-x);
		margin: 1.25rem auto 1.875rem;
		size: 10rem;
		opacity: 0;
		translate: 0 0;
		transition:
			background-color 0.5s var(--e-spring),
			opacity 0.6s 0.1s ease,
			translate 0.6s 0.1s ease;

		&.on {
			opacity: 1;

			@starting-style {
				opacity: 0;
				translate: 0 20px;
			}
		}
	}

	.palette {
		border: 1px solid hsl(var(--c-noir) / 0.1);
		border-inline: 0;
		display: flex;
		gap: 1rem;
		padding: 0.625rem var(--s-gutter);
		scroll-padding-inline: var(--s-gutter);
		overflow-x: auto;
		scroll-snap-type: x mandatory;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.swatch {
		background-color: hsl(var(--c-swatch));
		border-radius: var(--r-x);
		flex-shrink: 0;
		size: 2.5rem;
		scroll-snap-align: start;
		transition:
			scale 0.25s ease,
			box-shadow 0.5s var(--e-spring);

		opacity: 1;
		translate: 0 0;
		transition: opacity 0.6s 0.1s ease;

		@starting-style {
			opacity: 0;
		}

		&.on {
			background-color: hsl(var(--c-swatch) / 0.9);
			box-shadow:
				0 0 0 2px hsl(var(--c-blanc)),
				0 0 0 4px hsl(var(--c-flamingo));
		}

		&:active {
			scale: 0.94;
		}
	}

	.pack {
		display: grid;
		gap: 1.25rem;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		padding: 1.25rem var(--s-gutter);
	}

	.item {
		padding: 0;
	}

	.thumb {
		background-color: hsl(var(--c-swatch) / 0.9);
		border-radius: var(--r-x);

		opacity: 0.75;
		transition:
			background-color 0.5s var(--e-spring),
			box-shadow 0.5s var(--e-spring),
			scale 0.25s var(--e-spring),
			opacity 0.25s ease,
			translate 0.25s ease;

		translate: 0 0;

		@starting-style {
			opacity: 0;
			scale: 1;
			translate: 10px 10px;
		}

		&.on {
			background-color: hsl(var(--c-swatch) / 0.9);
			box-shadow:
				0 0 0 2px hsl(var(--c-blanc)),
				0 0 0 4px hsl(var(--c-flamingo));
			opacity: 1;

			@starting-style {
				opacity: 0;
			}
		}

		&:active {
			scale: 0.95;
		}
	}

	.bar {
		background-color: hsl(var(--c-blanc) / 0.6);
		backdrop-filter: blur(20px);
		box-shadow: 0 -0.5px 0 0.5px hsl(var(--c-noir) / 0.1);
		inset: auto 0 0;
		padding: 0.625rem var(--s-gutter);
		position: fixed;
	}
</style>
