/* eslint-disable no-unused-vars */
import { h } from 'preact';

import style from './style.module.css';

export default function Paragraph({ html }) {
	return (
		<p class={style.paragraph} dangerouslySetInnerHTML={{ __html: html }} />
	);
}
