<script>
	export let href = undefined
	export let alt = undefined
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class="button"
	class:alt
	{href}
	on:click
	role={href ? 'link' : 'button'}
>
	<slot />
</svelte:element>

<style>
	.button {
		background-color: hsl(var(--c-bleen));
		border-radius: var(--r-10);
		color: hsl(var(--c-blanc));
		display: inline-flex;
		font: 600 var(--f-excerpt);
		padding: 0 1rem;
		place-content: center;
		place-items: center;
		size: 3rem 100%;
		transition:
			background-color 0.25s ease,
			scale 0.25s ease;

		&:active {
			background-color: hsl(var(--c-bleen-strong));
			scale: 0.98;
		}

		&.alt {
			background-color: hsl(var(--c-flamingo));

			&:active {
				background-color: hsl(var(--c-flamingo-strong));
			}
		}
	}
</style>
