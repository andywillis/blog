<script setup>

	// import Content from '../Content/index.vue';
	import Tags from '../Tags/index.vue';
	import Heading from '../Heading/index.vue';

	import style from './style.module.css';
	
	defineProps({
		entries: {
			type: Array,
			required: true
		}
	});

</script>

<template>
	<main :class="style.entries">
		<section v-for="entry in entries" :key="entry.id" :class="style.entry">
			<header :class="style.header">
				<a :href="'#' + entry.link">
					<Heading :id="entry.link" type="h2" :text="entry.title" />
				</a>
				<Heading type="date" :text="entry.date" />
			</header>
			<Tags :tags="entry.tags" />
		</section>
	</main>
</template>
