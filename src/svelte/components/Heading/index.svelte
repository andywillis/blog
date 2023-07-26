<script>
	import style from './style.module.css';
	export let type;
	export let link = undefined;
	export let text;
</script>

{#if type === 'h1'}
	<h1 class={style[type]} id={link && link}>{text}</h1>
{/if}

{#if type === 'h2'}
	<h2 class={style[type]} id={link && link}>{text}</h2>
{/if}

{#if type === 'h3'}
	<h3 class={style[type]} id={link && link}>{text}</h3>
{/if}

{#if type === 'h4'}
	<h4 class={style[type]} id={link && link}>{text}</h4>
{/if}

{#if type === 'date'}
	<h4 class={style[type]} id={link && link}>{text}</h4>
{/if}
