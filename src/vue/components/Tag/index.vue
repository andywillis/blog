<script setup>

	import style from './style.module.css';

	defineProps({
		tag: {
			type: Object,
			required: true
		},
		numberOfTags: {
			type: Number,
			required: true
		}
	});

</script>

<template>
	<li :class="style.tag">
		{{ tag.tag }}{{ tag.id < numberOfTags - 1 ? ',' : '' }}
	</li>
</template>
