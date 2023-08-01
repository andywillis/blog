import Entry from '../Entry';

import style from './style.module.css';

export default function Entries({ entries }) {
	return (
		<main class={style.entries}>
			{entries.map(entry => {
				return <Entry key={entry.id} entry={entry} />;
			})}
		</main>
	);
}
