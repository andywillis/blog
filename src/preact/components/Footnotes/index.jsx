/* eslint-disable no-unused-vars */
import { h } from 'preact';

import Footnote from '../Footnote';

import style from './style.module.css';

export default function Footnotes({ footnotes }) {
	return (
		<ol class={style.footnotes}>
			{footnotes.map(footnote => {
				return <Footnote key={footnote.id} footnote={footnote} />;
			})}
		</ol>
	);
}
