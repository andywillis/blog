<script setup>
	
	import Entries from '../../components/Entries/index.vue';
	import FooterComponent from '../../components/Footer/index.vue';
	import HeaderComponent from '../../components/Header/index.vue';

	defineProps({
		data: {
			type: Object,
			required: true
		}
	});

</script>

<template>
	<HeaderComponent />
	<Entries :entries="data.entries" />
	<FooterComponent />
</template>
