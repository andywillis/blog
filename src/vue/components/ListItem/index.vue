<script setup>
	
	import style from './style.module.css';

	const props = defineProps({
		item: {
			type: Object,
			required: true
		}
	});

	console.log(props.item);

</script>

<template>
	<li :class="style.listitem" v-html="item.html" />
</template>
