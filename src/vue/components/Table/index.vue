<script setup>
	
	import style from './style.module.css';

	defineProps({
		item: {
			type: String,
			required: true
		}
	});

</script>

<template>
	<table :class="style.table">
		{{ html }}
	</table>
</template>
