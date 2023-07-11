import Heading from '../Heading';

import style from './index.module.css';

export default function Title(content, link) {
	return `
		<a href="#${link}" class="${style.link}">
			${Heading({ link, level: 'h2', type: 'h2', text: content })}
		</a>
	`;
}
