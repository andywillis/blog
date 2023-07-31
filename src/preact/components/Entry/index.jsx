/* eslint-disable no-unused-vars */
import { h } from 'preact';

import Content from '../Content';
import Heading from '../Heading';
import Tags from '../Tags';

import style from './style.module.css';

export default function Entry({ entry }) {

	const { date, title, link, body, tags } = entry;

	return (
		<section class={style.entry} data-type="entry">
			<header class={style.header}>
				<a href={`#${link}`}>
					<Heading link={link} level="h2" type="h2" text={title} />
				</a>
				<Heading level="h3" type="date" text={date} />
			</header>
			<Content body={body} />
			<Tags tags={tags} />
		</section>
	);

}
