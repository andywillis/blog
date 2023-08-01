import ListItem from '../ListItem';

export default function List({ variant, items }) {
	if (variant === 'unordered') {
		return (
			<ul>
				{items.map(item => <ListItem key={item.id} html={item.html} />)}
			</ul>
		);
	}
	return (
		<ol>
			{items.map(item => <ListItem key={item.id} html={item.html} />)}
		</ol>
	);
}
