import Tag from '../Tag';

import style from './index.module.css';

export default function Tags(data) {
	return (`
		<ul class=${style.tags}>
			${data.map(Tag).join('')}
		</ul> 
	`);
}
