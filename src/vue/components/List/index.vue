<script setup>
	
	import ListItem from '../ListItem/index.vue';

	defineProps({
		items: {
			type: Array,
			required: true
		},
		variant: {
			type: String,
			required: true
		}
	});

</script>

<template>
	<ul v-if="variant === 'unordered'">
		<template v-for="item in items" :key="item.id">
			<ListItem :item="item" />
		</template>
	</ul>
	<ol v-else-if="variant === 'ordered'">
		<template v-for="item in items" :key="item.id">
			<ListItem :item="item" />
		</template>
	</ol>
</template>
