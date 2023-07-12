import Entries from '../Entries';
import Footer from '../Footer';
import Header from '../Header';

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
		${Footer()}
	`);
}
