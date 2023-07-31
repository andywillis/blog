/* eslint-disable no-unused-vars */
import { h } from 'preact';

import style from './style.module.css';

export default function Table({ html }) {
	return (
		<table class={style.table} dangerouslySetInnerHTML={{ __html: html }} />
	);
}
