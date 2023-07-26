<script>
	import style from './style.module.css';
	export let tag;
	export let number;
</script>

<li class={style.tag}>
	{tag.tag}{tag.id < number - 1 ? ',' : ''}
</li>
