import Entries from '../../components/Entries';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

/**
 * Home
 *
 * @export
 * @param {object} Journal data
 * @return {string}
 */
export default function Home(journal) {
	return (`
		${Header()}
		${Entries(journal.entries)}
		${Footer()}
	`);
}
