<script>
	import TitleBar from '$components/TitleBar.svelte'
	import Button from '$components/Button.svelte'
	import Overlay from '$components/Overlay.svelte'
	import { dev } from '$app/environment'

	/** @type {import('./$types').PageData} */
	export let data

	$: ({ title, subtitle, cta, rules, lang } = data)
</script>

<TitleBar href="{lang}/" {title} />

<div class="title">{title}</div>
<div class="subtitle">{subtitle}</div>
<ul class="rules">
	{#each rules as { emoji, title, subtitle }, i}
		<li class="rule" style:transition-delay={`${0.3 + i * 0.05}s`}>
			<div class="rule-icon">{emoji}</div>
			<div>
				<div class="rule-title">{title}</div>
				<div class="rule-subtitle">{subtitle}</div>
			</div>
		</li>
	{/each}
</ul>
<div class="bar">
	<Button href="{lang}/nickname">{cta}</Button>
</div>

{#if dev}
	<Overlay mobile="/designs/house-rules.png" />
{/if}

<style>
	.title {
		font: 700 var(--f-h5);
		margin-block-start: 0.5rem;
		opacity: 1;
		text-align: center;
		translate: 0 0;
		transition:
			opacity 0.6s ease,
			translate 0.6s ease;

		@starting-style {
			opacity: 0;
			translate: 0 20px;
		}
	}

	.subtitle {
		color: hsl(var(--c-shuttle));
		font: var(--f-excerpt);
		margin: 0.625rem auto;
		max-width: 30ch;
		opacity: 1;
		text-align: center;
		transition:
			opacity 0.6s 0.1s ease,
			translate 0.6s 0.1s ease;
		translate: 0 0;

		@starting-style {
			opacity: 0;
			translate: 0 20px;
		}
	}

	.rules {
		display: grid;
		gap: 1.375rem;
		list-style: none;
		margin-block-start: 1.875rem;
		padding: 0 var(--s-gutter-large);
	}

	/* prettier-ignore */
	.rule {
		align-items: center;
		display: grid;
		gap: 0.75rem;
		grid-template-columns: auto 1fr;
		opacity: 1;
		transition: opacity 0.9s var(--e-spring), translate 0.9s var(--e-spring);
		translate: 0 0;

		@starting-style {
			opacity: 0;
			translate: 0 20px;
		}
	}

	.rule-icon {
		align-items: center;
		border-radius: var(--r-x);
		background-color: hsl(var(--c-flamingo) / 0.24);
		display: flex;
		font: var(--f-h6);
		justify-content: center;
		size: 3rem;
	}

	.rule-title {
		font: 600 var(--f-excerpt);
	}

	.rule-subtitle {
		color: hsl(var(--c-shuttle));
		font: var(--f-footnote);
		margin-block-start: 0.125rem;
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
