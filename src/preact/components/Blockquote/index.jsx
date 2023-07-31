/* eslint-disable no-unused-vars */
import { h } from 'preact';

import style from './style.module.css';

export default function Blockquote({ html }) {
	return (
		<p class={style.blockquote} dangerouslySetInnerHTML={{ __html: html }} />
	);
}
