import Heading from '../Heading';

import style from './style.module.css';

export default function Header() {
	return (`
		<header class="${style.header}">
			${Heading({ level: 'h1', type: 'h1', text: 'Andy Willis' })}
		</header>
	`);
}
