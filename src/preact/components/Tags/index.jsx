/* eslint-disable no-unused-vars */
import { h } from 'preact';

import Heading from '../Heading';
import Tag from '../Tag';

import style from './style.module.css';

export default function Tags({ tags }) {
	return (
		<section class={style.tagContainer}>
			<Heading level="h3" type="h3" text="Tags" />
			<ul class={style.tags}>
				{tags.map(tag => {
					return <Tag key={tag.id} tag={tag} number={tags.length} />;
				})}
			</ul>
		</section>
	);
}
