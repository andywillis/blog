import Heading from '../Heading';
// import IconStrip from '../IconStrip';

// import iconConfig from '../../config/icons';

import style from './index.module.css';

export default function Header() {
	return (`
		<header class="${style.header}">
			${Heading({ level: 'h1', text: 'Andy Willis' })}
		</header>
	`);
}
