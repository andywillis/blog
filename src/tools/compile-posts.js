import Entry from '../components/Entry';

import data from '../data/journal.json';

import '../styles/global.css';

export default function compilePosts() {
	return data.entries.map(entry => {
		return Entry(entry);
	});
}
