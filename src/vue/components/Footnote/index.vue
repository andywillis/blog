<script setup>
	
	defineProps({
		footnote: {
			type: Object,
			required: true
		}
	});

</script>

<template>
	<li :id="footnote.fnid" v-html="footnote.html" />
</template>
