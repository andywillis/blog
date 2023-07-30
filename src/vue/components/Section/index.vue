<script setup>
	
	import Blockquote from '../Blockquote/index.vue';
	import Heading from '../Heading/index.vue';
	import Image from '../Image/index.vue';
	import HR from '../HR/index.vue';
	import Footnotes from '../Footnotes/index.vue';
	import List from '../List/index.vue';
	import Paragraph from '../Paragraph/index.vue';
	import Table from '../Table/index.vue';

	defineProps({
		section: {
			type: Object,
			required: true
		}
	});

</script>

<template>
	<Heading v-if="section.type === 'h3'" type="h3" :text="section.text" />
	<Blockquote v-else-if="section.type === 'blockquote'" :html="section.html" />
	<Image v-else-if="section.type === 'image'" :src="section.src" :alt="section.alt" />
	<Table v-else-if="section.type === 'table'" :html="section.html" />
	<HR v-else-if="section.type === 'hr'" />
	<Footnotes v-else-if="section.type === 'footnotes'" :footnotes="section.footnotes" />
	<List v-else-if="section.type === 'list'" :variant="section.variant" :items="section.items" />
	<Paragraph v-else :html="section.html" />
</template>
