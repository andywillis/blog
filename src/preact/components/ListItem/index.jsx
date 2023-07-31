/* eslint-disable no-unused-vars */
import { h } from 'preact';

import style from './style.module.css';

export default function ListItem({ html }) {
	return (
		<li
			class={style.listitem}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}
