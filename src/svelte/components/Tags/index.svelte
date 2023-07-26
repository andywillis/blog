<script>
	import Heading from '../Heading/index.svelte';
	import Tag from '../Tag/index.svelte';
	import style from './style.module.css';
	export let tags;
</script>

<section class={style.tagContainer}>
	<Heading type="h3" text="Tags" />
	<ul class={style.tags}>
		{#each tags as tag}
			<Tag tag={tag} number={tags.length} />
		{/each}
	</ul>
</section>
