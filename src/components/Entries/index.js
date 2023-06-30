import Entry from '../Entry';

import style from './index.module.css';

export default function Entries(entries) {
  return (`
    <main class="${style.entries}">
      ${entries.map(Entry).join('')}
    </main>
  `);
}
