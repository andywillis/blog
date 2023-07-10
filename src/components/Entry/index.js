import Date from '../Date';
import Content from '../Content';
import Tags from '../Tags';
import Title from '../Title';

import style from './index.module.css';

export default function Entry(entry, index) {
	const { date, title, body, tags } = entry;
	return (`
		<section class="${style.entry}" data-type="entry">
			<header class="${style.header}">
				${Title(title)}
				${Date(date)}
			</header>
			${Content(body, index)}
			${Tags(tags)}
		</section>
	`);
}
