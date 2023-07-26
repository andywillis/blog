<script>
	import Section from '../Section/index.svelte';
	import style from './style.module.css';
	export let body;
</script>

<div class={style.content}>
	{#each body as section}
		<Section section={section} />
	{/each}
</div>
