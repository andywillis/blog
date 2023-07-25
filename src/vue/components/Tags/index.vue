<script setup>

	import Tag from '../Tag/index.vue';
	import Heading from '../Heading/index.vue';
	import style from './style.module.css';

	defineProps({
		tags: {
			type: Array,
			required: true
		}
	});

</script>

<template>
	<section :class="style.tagContainer">
		<Heading level="h3" type="h3" text="Tags" />
		<ul :class="style.tags">
			<template v-for="tag in tags" :key="tag.id">
				<Tag :tag="tag" :number-of-tags="tags.length" />
			</template>
		</ul>
	</section>
</template>
