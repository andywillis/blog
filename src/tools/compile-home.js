import Journal from '../layouts/Home';

import data from '../data/journal.json';

import '../styles/global.css';

export default function compileJournal() {
	return Journal(data);
}
