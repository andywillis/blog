<script>
	import Footnote from '../Footnote/index.svelte';
	import style from './style.module.css';
	export let footnotes;
</script>

<ol class={style.footnotes}>
	{#each footnotes as footnote}
		<Footnote footnote={footnote} />
	{/each}
</ol>
