import Journal from './layouts/Home';

// eslint-disable-next-line import/no-relative-packages
import data from '../data/journal.json';

const html = Journal(data);

document.body.innerHTML = html;
