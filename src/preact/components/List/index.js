import ListItem from '../ListItem';

// import style from './style.module.css';

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
