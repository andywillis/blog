import Heading from '../Heading';
import Tag from '../Tag';

import style from './style.module.css';

export default function Tags(data) {
	return (`
		<section class=${style.tagContainer}>
			${Heading({ level: 'h3', type: 'h3', text: 'Tags' })}
			<ul class="${style.tags}">
				${data.map(Tag).join('')}
			</ul>
		</section>
	`);
}
