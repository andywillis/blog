import Date from '../Date';
import Paragraphs from '../Paragraphs';
import Tags from '../Tags';
import Title from '../Title';

import styles from './styles.module.css';

export default function Post(post) {
  const { date, title, paragraphs, tags } = post;
  return (`
    <div class="${styles.post}">
      ${Title(title)}
      ${Date(date)}
      ${Paragraphs(paragraphs)}
      ${Tags(tags)}
    </div>
  `);
}
