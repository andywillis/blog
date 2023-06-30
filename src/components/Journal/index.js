import Header from '../Header';
import Entries from '../Entries';
import Footer from '../Footer';

/**
 * Journal
 *
 * @export
 * @param {object} journal
 * @return {string} Template
 */
export default function Journal(journal) {
	return (`
		${Header()}
		${Entries(journal.entries)}
		${Footer(`© Andy Willis ${new Date().getFullYear()}`)}
	`);
}
