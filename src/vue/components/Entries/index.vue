<script setup>

	import Entry from '../Entry/index.vue';
	
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
		<template v-for="entry in entries" :key="entry.id">
			<Entry :entry="entry" />
		</template>
	</main>
</template>
