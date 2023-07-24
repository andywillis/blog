<script setup>

import Heading from '../Heading/index.vue';
import style from './style.module.css';

</script>

<template>
	<header :class="style.header">
		<Heading
			type="h1"
			text="Andy Willis Journal (Vue)"
		/>
	</header>
</template>
