<script>
	import { page } from '$app/stores'

	// prettier-ignore
	$: ({ data: { lang }, params: { thread, group } } = $page)
</script>

<a href="{lang}/{thread ? group : ''}">Back</a>
<h1>{group} {thread ? 'thread' : 'chat'}</h1>

{#if !thread}
	<a href="{lang}/{group}/a-thread">open test thread</a>
{/if}
