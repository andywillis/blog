<script setup>
import style from './style.module.css';

defineProps({
	type: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	}
});

</script>

<template>
	<h1 v-if="type==='h1'" :class="style.h1">
		{{ text }}
	</h1>
	<h2 v-if="type==='h2'" :class="style.h2">
		{{ text }}
	</h2>
	<h3 v-if="type==='h3'" :class="style.h3">
		{{ text }}
	</h3>
	<h4 v-if="type==='h4'" :class="style.h4">
		{{ text }}
	</h4>
</template>
