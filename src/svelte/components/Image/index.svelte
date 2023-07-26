<script>
	import style from './style.module.css';
	export let src;
	export let alt;
</script>

<div class={style.imageContainer}>
	<img
		class={style.image}
		width="800px"
		height="500px"
		src={src}
		alt={alt}
	/>
</div>
