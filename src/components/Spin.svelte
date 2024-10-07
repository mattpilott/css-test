<div class="spin">
	{#each Array(8) as _, i}
		<div class="blade" style="animation-delay: {i * 0.125}s; transform: rotate({i * 45}deg)"></div>
	{/each}
</div>

<style>
	@keyframes spin {
		0% {
			background-color: hsl(var(--c-noir));
		}
		100% {
			background-color: transparent;
		}
	}

	.spin {
		font-size: 24px;
		size: 1.5rem;
	}

	.blade {
		animation: spin 1s infinite linear;
		background-color: transparent;
		inset: auto auto 0 0.4629em;
		border-radius: 0.05em;
		position: absolute;
		size: 0.3em 0.1em;
		transform-origin: center -0.2em;
	}
</style>
