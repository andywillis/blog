import ListItem from '../ListItem';

export default function List({ variant, items }) {
	if (variant === 'unordered') {
		return (`
			<ul>
				${items.map(item => ListItem(item)).join('')}
			</ul>
		`);
	}
	return (`
		<ol>
			${items.map(item => ListItem(item)).join('')}
		</ol>
	`);
}
