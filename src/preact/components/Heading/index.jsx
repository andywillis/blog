/* eslint-disable no-unused-vars */
import { h } from 'preact';

import style from './style.module.css';

/**
 * Heading
 *
 * @param {object} props
 * @return {string}
 */
function Heading(props) {

	const {
		link,
		level,
		type = level,
		text
	} = props;

	if (level === 'h1') {
		return <h1 class={style[type]} id={link && link}>{text}</h1>;
	}

	if (level === 'h2') {
		return <h2 class={style[type]} id={link && link}>{text}</h2>;
	}

	if (level === 'h3') {
		return <h3 class={style[type]} id={link && link}>{text}</h3>;
	}

	if (level === 'h4') {
		return <h4 class={style[type]} id={link && link}>{text}</h4>;
	}

	return null;

}

export default Heading;
