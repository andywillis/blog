import Header from '../components/Header';
import Footer from '../components/Footer';
import Entries from '../components/Entries';

import '../styles/global.css';

export default function compilePost(entry) {
	return (`
		${Header()}
		${Entries([entry])}
		${Footer()}
	`);
}
