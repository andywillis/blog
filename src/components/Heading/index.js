import style from './index.module.css';

export default function Heading({ level, text }) {
	return (`
		<${level} class="${style[level]}">
			${text}
		</${level}>
	`);
}
