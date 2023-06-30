import Icon from '../Icon';
import IconStrip from '../IconStrip';

import iconConfig from '../../config/icons';

import style from './index.module.css';

export default function Header() {
	return (`
		<header class="${style.header}">
			<nav class="${style.nav}">
				${Icon({ name: 'home', active: true })}
				${IconStrip(iconConfig)}
				</nav>
		</header>
	`);
}
