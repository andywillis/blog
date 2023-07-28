<script>
	import ListItem from '../ListItem/index.svelte';
	export let items;
	export let variant;
</script>

{#if variant === 'unordered'}
<ul>
	{#each items as item}
		<ListItem html={item.html} />
	{/each}
</ul>
{:else}
<ol>
	{#each items as item}
		<ListItem html={item.html} />
	{/each}
</ol>
{/if}