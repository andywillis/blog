import Header from '../Header';
import Entries from '../Entries';

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
	`);
}

// 		${Footer(`© Andy Willis ${new Date().getFullYear()}`)}
