import ListItem from '../ListItem';

// import style from './style.module.css';

export default function List(items) {
	return (`
		<ul>
			${items.map(item => ListItem(item)).join('')}
		</ul>
	`);
}
