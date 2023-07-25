<script setup>
	
	import Content from '../Content/index.vue';
	import Heading from '../Heading/index.vue';
	import Tags from '../Tags/index.vue';
	
	import style from './style.module.css';

	defineProps({
		entry: {
			type: Object,
			required: true
		}
	});

</script>

<template>
	<section :class="style.entry">
		<header :class="style.header">
			<a :href="'#' + entry.link">
				<Heading :id="entry.link" type="h2" :text="entry.title" />
			</a>
			<Heading type="date" :text="entry.date" />
		</header>
		<Content :body="entry.body" />
		<Tags :tags="entry.tags" />
	</section>
</template>
