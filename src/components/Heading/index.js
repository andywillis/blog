import style from './index.module.css';

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
		type = props.level,
		text
	} = props;

	return (`
		<${level}
			class="${style[type]}"
			${link ? `id="${link}"` : ''}
		>${text}
		</${level}>
	`);

}

export default Heading;
