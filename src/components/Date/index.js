// import style from './index.module.css';

import Heading from '../Heading';

export default function Date(data) {
	return `${Heading({
		level: 'h3',
		type: 'date',
		text: data
	})}`;
}
