<script>
	import { onMount } from 'svelte'
	import { prefs } from '$library/stores'
	import { page } from '$app/stores'

	/** @type {import('./$types').PageData} */
	export let data

	$: ({ mygroups, categories, palette, lang } = data)

	let unread = undefined
	let mounted = false

	onMount(() => {
		unread = 4
		mounted = true
	})
</script>

<header class="titlebar contain">
	<h1 class="title">Community</h1>
	<a class="profile" href="{lang}/">
		<img
			class="avatar"
			class:on={mounted}
			src="/avatars/{$prefs.avatar}.webp"
			style:--c-swatch={palette[$prefs.swatch]}
			alt="Avatar"
		/>
	</a>
</header>

<main class="main">
	{#if mygroups.length}
		<div class="subtitle">My Groups</div>
		<div class="items">
			{#each mygroups as { image, slug, title }, i}
				<a class="card" href="{lang}/{slug}" data-unread={unread}>
					<img class="cimage" src={image} alt="" />
					<div class="ctitle">{title}</div>
				</a>
			{/each}
		</div>
	{/if}
	{#if categories.length}
		{#each categories as { title, groups }, i}
			<div class="subtitle">{title}</div>
			<div class="items" style:transition-delay="{(i + 1) * 0.1}s">
				{#each groups as { image, slug, title }, i}
					<a class="card large" href="{lang}/rules?group={slug}">
						<img class="cimage" src={image} alt="" />
						<div class="clabel">Join</div>
						<div class="ctitle">{title}</div>
					</a>
				{/each}
			</div>
		{/each}
	{/if}
</main>

<style>
	.titlebar {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding-top: max(1rem, env(safe-area-inset-top));
	}

	.title {
		font: 700 var(--f-h4);
		margin: 0;
	}

	.avatar {
		background-color: hsl(var(--c-swatch));
		border-radius: 50%;
		size: 2.5rem;
		opacity: 0;

		&.on {
			opacity: 1;
		}
	}

	.subtitle {
		font: 600 var(--f-subhead);
		margin-block-start: 1.875rem;
		padding-inline: var(--s-gutter);
	}

	.items {
		display: grid;
		gap: 0.625rem;
		grid-auto-flow: column;
		grid-auto-columns: auto;
		overflow-x: auto;
		overscroll-behavior-x: contain;
		margin-block: -1rem -3rem;
		padding-block: 1.625rem 3rem;
		padding-inline: var(--s-gutter);
		scroll-snap-type: x mandatory;
		scroll-padding-inline: var(--s-gutter);
		will-change: opacity;

		transition:
			opacity 0.9s var(--e-spring),
			translate 0.9s var(--e-spring);
		opacity: 1;
		translate: 0 0;

		@starting-style {
			opacity: 0;
			translate: 20px 0;
		}

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.card {
		aspect-ratio: 20 / 24;
		border-radius: var(--r-14);
		box-shadow:
			0 10px 40px hsl(0 0% 0% / 0.15),
			inset 0 0 0 1px hsl(0 0% 100% / 0.2);
		display: flex;
		flex-direction: column;
		scroll-snap-align: start;
		transition: scale 0.25s ease;
		width: 12.5rem;

		&.large {
			aspect-ratio: 29 / 29;
			width: 18.125rem;
		}

		&::before,
		&::after {
			border-radius: inherit;
			content: '';
			inset: 0;
			position: absolute;
		}

		&::before {
			background-color: hsl(0 0% 0% / 0.05);
			backdrop-filter: blur(25px);
			/* mask-image: linear-gradient(180deg, hsl(0 0% 0% / 0.1) 70%, hsl(0 0% 0% / 0.8) 78%, #000 86%); */
			mask-image: radial-gradient(
				125% 100% at 55% 0%,
				hsl(0 0% 0% / 0.1) 74%,
				hsl(0 0% 0% / 0.8) 80%,
				#000 88%
			);
		}

		&::after {
			scale: 0;
			transition: scale 0.25s 0.25s var(--e-bounce);
		}

		&[data-unread]::after {
			background-color: hsl(var(--c-radical));
			border: 1px solid hsl(var(--c-blanc) / 0.2);
			box-shadow: 0 1px 1px hsl(var(--c-noir) / 0.2);
			color: hsl(var(--c-blanc));
			content: attr(data-unread);
			display: flex;
			font: 600 var(--f-footnote);
			height: 1.5rem;
			inset: -0.625rem -0.5rem auto auto;
			min-width: 1.5rem;
			padding-inline: 0.25rem;
			place-content: center;
			place-items: center;
			scale: 1;
			width: auto;
			z-index: 1;
		}

		&:active {
			scale: 0.98;
		}
	}

	.cimage {
		aspect-ratio: inherit;
		border-radius: inherit;
		object-fit: cover;
		position: absolute;
		size: 100%;
		z-index: -1;
	}

	.clabel {
		align-self: end;
		background-color: hsl(var(--c-blanc));
		border-radius: var(--r-x);
		box-shadow: 0 2px 10px hsl(var(--c-noir) / 0.2);
		color: hsl(var(--c-flamingo-strong));
		font: 600 var(--f-caption);
		margin: 0.5rem;
		padding: 0.375rem 0.75rem;
	}

	.ctitle {
		color: white;
		font: 600 var(--f-subhead);
		margin-block-start: auto;
		padding: 0.75rem;
		z-index: 1;
	}
</style>
