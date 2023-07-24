import style from './style.module.css';

export default function Blockquote(blockquote) {
	return (`
		<p class=${style.blockquote}>
			${blockquote}
		</p>
	`);
}
