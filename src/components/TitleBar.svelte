<script>
	export let href
	export let title

	let scrollY = 0
</script>

<svelte:window bind:scrollY />

<header class="titlebar">
	<a class="back" {href}>
		<svg class="icon" width="13" height="22" viewBox="0 0 13 22" fill="none">
			<path d="M11.2 2L2.19995 11L11.2 20" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		Back
	</a>
	<div class="title" class:on={scrollY > 40}>{title}</div>
</header>

<style>
	.titlebar {
		align-items: center;
		background-color: hsl(var(--c-blanc) / 0.6);
		backdrop-filter: blur(20px);
		display: grid;
		grid-template-columns: 4rem minmax(0, 1fr) 4rem;
		padding: max(0.375rem, env(safe-area-inset-top)) 0.875rem 0.375rem;
		position: sticky;
		height: calc(2.75rem + env(safe-area-inset-top));
		top: 0;
		z-index: 1;
	}

	.back {
		align-items: center;
		color: hsl(var(--c-bleen));
		display: flex;
		gap: 0.375rem;
		font: var(--f-body);
	}

	.icon {
		stroke: currentColor;
	}

	.title {
		font: 700 var(--f-body);
		opacity: 0;
		text-align: center;
		translate: 0 20%;
		transition:
			opacity 0.25s ease,
			translate 0.25s ease;

		&.on {
			opacity: 1;
			translate: 0 0;
		}
	}
</style>
