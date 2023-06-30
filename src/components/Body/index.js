import Section from '../Section';

import style from './index.module.css';

export default function Body(sections) {
	return (`
		<div class="${style.body}">
			${sections.map(Section).join('')}
		</div>
	`);
}
