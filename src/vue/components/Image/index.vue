<script setup>

	import style from './style.module.css';

	defineProps({
		src: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		}
	});

</script>

<template>
	<div :class="style.imageContainer">
		<img
			:class="style.image"
			width="800px"
			height="500px"
			:src="src"
			:alt="alt"
		>
	</div>
</template>
