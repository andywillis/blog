import Date from '../Date';
import Body from '../Body';
import Tags from '../Tags';
import Title from '../Title';

import style from './index.module.css';

export default function Entry(entry) {
  const { date, title, body, tags } = entry;
  return (`
    <div class="${style.entry}">
      ${Title(title)}
      ${Date(date)}
      ${Body(body)}
      ${Tags(tags)}
    </div>
  `);
}
