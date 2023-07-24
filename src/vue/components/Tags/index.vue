<script setup>

	import Heading from '../Heading/index.vue';
	import style from './style.module.css';

	const props = defineProps({
		tags: {
			type: Array,
			required: true
		}
	});

	console.log(props.tags);

</script>

<template>
	<section :class="style.tagContainer">
		<Heading level="h3" type="h3" text="Tags" />
		<ul :class="style.tags">
			<li v-for="tag in tags" :key="tag.id" :class="style.tag">
				{{ tag.tag }}{{ tag.id < tags.length - 1 ? ',' : '' }}
			</li>
		</ul>
	</section>
</template>
