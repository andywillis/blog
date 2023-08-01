import Section from '../Section';

import style from './style.module.css';

export default function Content({ body }) {
	return (
		<div class={style.content}>
			{body.map(section => {
				return <Section key={section.id} section={section} />;
			})}
		</div>
	);
}
