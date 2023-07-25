<script setup>
	
	import ListItem from '../ListItem/index.vue';

	defineProps({
		items: {
			type: Array,
			required: true
		}
	});

</script>

<template>
	<ul>
		<template v-for="item in items" :key="item.id">
			<ListItem :item="item" />
		</template>
	</ul>
</template>
