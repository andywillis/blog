<script setup>

	import Footnote from '../Footnote/index.vue';

	import style from './style.module.css';

	defineProps({
		footnotes: {
			type: Array,
			required: true
		}
	});

</script>

<template>
	<ol :class="style.footnotes">
		<template v-for="footnote in footnotes" :key="footnote.id">
			<Footnote :footnote="footnote" />
		</template>
	</ol>
</template>
