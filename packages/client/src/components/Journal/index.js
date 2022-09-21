import Header from '../Header';
import Entries from '../Entries';
import Footer from '../Footer';

import style from './index.module.css';

/**
 * Journal
 *
 * @export
 * @param {object} journal
 * @return {string} Template
 */
export default function Journal(journal) {
  return (`
    <div class="${style.journal}">
      ${Header()}
      ${Entries(journal.entries)}
      ${Footer(`© Andy Willis ${new Date().getFullYear()}`)}
    </div>
  `);
}
