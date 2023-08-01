<script setup>
	
	defineProps({
		footnote: {
			type: String,
			required: true
		}
	});

</script>

<template>
	<li :id="footnote.fnid" v-html="footnote.html" />
</template>
