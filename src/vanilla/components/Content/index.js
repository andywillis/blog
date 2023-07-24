import Section from '../Section';

import style from './style.module.css';

export default function Content(sections) {
	return (`
		<div class="${style.content}">
			${sections.map(Section).join('')}
		</div>
	`);
}
