import style from './index.module.css';

export default function Heading({ level, text }) {
	return (`
		<div class="${style[level]}">
			${text}
		</div>
	`);
}
