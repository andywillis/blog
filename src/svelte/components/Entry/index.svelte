<script>
	import Content from '../Content/index.svelte'
	import Heading from '../Heading/index.svelte';
	import Tags from '../Tags/index.svelte';
	import style from './style.module.css';
	export let entry;
</script>


<section class={style.entry} data-type="entry">
	<header class={style.header}>
		<a href={`#${entry.link}`}>
			<Heading link={entry.link} type="h2" text={entry.title} />
		</a>
		<Heading type="date" text={entry.date} />
	</header>
	<Content body={entry.body} />
	<Tags tags={entry.tags} />
</section>
