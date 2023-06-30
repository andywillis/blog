import classnames from 'classnames';
import style from './index.module.css';

export default function Icon(icon) {

	const classes = classnames(
		style.icon,
		icon.active && style.active
	);

	return (`
		<button
			class="${classes}"
			data-type="${icon.name}"
			type="button"
		></button>
	`);

}
