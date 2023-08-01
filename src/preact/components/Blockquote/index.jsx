import style from './style.module.css';

export default function Blockquote({ html }) {
	return (
		<p class={style.blockquote} dangerouslySetInnerHTML={{ __html: html }} />
	);
}
