import style from './style.module.css';

export default function Paragraph({ html }) {
	return (
		<p class={style.paragraph} dangerouslySetInnerHTML={{ __html: html }} />
	);
}
