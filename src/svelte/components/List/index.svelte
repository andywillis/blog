<script>
	import ListItem from '../ListItem/index.svelte';
	export let items;
</script>

<ul>
	{#each items as item}
		<ListItem html={item.html} />
	{/each}
</ul>
