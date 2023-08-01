/* eslint-disable import/no-relative-packages */
import Journal from '../layouts/Home';

import data from '../../data/journal.json';

import '../../public/styles/global.css';

export default function compileJournal() {
	return Journal(data);
}
