import Icon from '../Icon';

import style from './index.module.css';

export default function IconStrip(icons) {
	return (`
		<div class="${style.iconStrip}">
			${icons.map(Icon).join('')}
		</div>
	`);
}
