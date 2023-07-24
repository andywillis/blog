import style from './style.module.css';

export default function Table(data) {
	return (`
		<table class="${style.table}">
			${data}
		</table>
	`);
}
