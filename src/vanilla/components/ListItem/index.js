import style from './style.module.css';

export default function ListItem(item) {
	return `<li class="${style.listitem}">${item.html}</li>`;
}
