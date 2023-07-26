<script>
	import Entries from '../../components/Entries/index.svelte';
	import Header from '../../components/Header/index.svelte'
	import Footer from '../../components/Footer/index.svelte'
	export let data;
</script>

<main>
	<Header />
	<Entries entries={data.entries} />
	<Footer />
</main>
