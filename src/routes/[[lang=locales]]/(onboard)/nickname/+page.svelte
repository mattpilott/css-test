<script>
	import TitleBar from '$components/TitleBar.svelte'
	import Button from '$components/Button.svelte'
	import Overlay from '$components/Overlay.svelte'
	import { dev } from '$app/environment'

	/** @type {import('./$types').PageData} */
	export let data

	$: ({ title, subtitle, cta, lang } = data)
</script>

<TitleBar href="{lang}/rules" {title} />

<div class="title">{title}</div>
<div class="subtitle">{subtitle}</div>
<form class="form">
	<input class="field" type="text" />
	<ul class="rules">
		<li class="rule valid">4 characters min. and 25 max.</li>
		<li class="rule invalid">No spaces</li>
		<li class="rule">Full stop "." and underscore "_" characters only</li>
		<li class="rule">You can combine numbers and letters</li>
	</ul>
</form>

<div class="bar">
	<Button href="{lang}/avatar">{cta}</Button>
</div>

{#if dev}
	<Overlay mobile="/designs/nickname.png" />
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

	.subtitle {
		color: hsl(var(--c-shuttle));
		font: var(--f-excerpt);
		margin: 0.625rem auto;
		max-width: 30ch;
		text-align: center;
		transition:
			opacity 0.6s 0.1s ease,
			translate 0.6s 0.1s ease;
		opacity: 1;
		translate: 0 0;

		@starting-style {
			opacity: 0;
			translate: 0 20px;
		}
	}

	.form {
		opacity: 1;
		padding-inline: var(--s-gutter-large);
		transition:
			opacity 0.6s 0.2s ease,
			translate 0.6s 0.2s ease;
		translate: 0 0;

		@starting-style {
			opacity: 0;
			translate: 0 20px;
		}
	}

	.field {
		border: 0.75px solid hsl(var(--c-iron));
		border-radius: var(--r-10);
		font: var(--f-excerpt);
		min-height: 2.75rem;
		margin-block-start: 1.125rem;
		padding-inline: 0.75rem;
		width: 100%;
	}

	.rules {
		display: grid;
		gap: 0.5625rem;
		list-style: none;
		margin-block: 0.625rem 0;
		padding: 0;
	}

	.rule {
		align-items: center;
		color: hsl(var(--c-shuttle));
		display: flex;
		font: var(--f-caption);
		gap: 0.5rem;

		&::before {
			background-color: hsl(var(--c-iron));
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.19995 3L3.19995 5L7.19995 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
			background-size: 0.5rem;
			border-radius: var(--r-x);
			content: '';
			display: inline-block;
			size: 1rem;
		}

		&.valid {
			color: hsl(var(--c-emerald));

			&::before {
				background-color: hsl(var(--c-emerald));
			}
		}

		&.invalid {
			color: hsl(var(--c-radical));

			&::before {
				background-color: hsl(var(--c-radical));
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.80017 1.59998L4.20017 3.99998M6.60017 6.39997L4.20017 3.99998M4.20017 3.99998L6.60017 1.59998L1.80017 6.39997' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
			}
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
