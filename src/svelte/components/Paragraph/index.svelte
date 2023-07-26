<script>
	import style from './style.module.css';
	export let html;
</script>

<p class={style.paragraph}>
	{@html html}
</p>