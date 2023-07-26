<script>
	import Entry from '../Entry/index.svelte';
	import style from './style.module.css';
	export let entries;
</script>

<main class={style.entries}>
	{#each entries as entry}
		<Entry entry={entry} />
	{/each}
</main>
