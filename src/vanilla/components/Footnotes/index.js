import Footnote from '../Footnote';

import style from './style.module.css';

export default function Footnotes({ footnotes }) {
	return (`
		<ol class=${style.footnotes}>
			${footnotes.map(Footnote).join('')}
		</ol>
	`);
}
