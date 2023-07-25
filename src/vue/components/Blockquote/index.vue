<script setup>

	import style from './style.module.css';

	defineProps({
		html: {
			type: String,
			required: true
		}
	});

</script>

<template>
	<p :class="style.blockquote">
		{{ html }}
	</p>
</template>
