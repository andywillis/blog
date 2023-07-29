import style from './style.module.css';

export default function Tag(tag, index, arr) {
	return (`
		<li class="${style.tag}">
			${tag.tag}${index < arr.length - 1 ? ',' : ''}
		</li>
	`).trim();
}
