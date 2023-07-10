import style from './index.module.css';

/**
 * Heading
 *
 * @param {object} { level, type, text }
 * @return {string}
 */
function Heading({ level, type, text }) {
	return (`
		<${level} class="${style[type]}">
			${text}
		</${level}>
	`);
}

export default Heading;
