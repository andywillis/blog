<script setup>

	import Section from '../Section/index.vue';

	import style from './style.module.css';

	defineProps({
		body: {
			type: Object,
			required: true
		}
	});

</script>

<template>
	<div :class="style.content">
		<template v-for="section in body" :key="section.id">
			<Section :section="section" />
		</template>
	</div>
</template>
