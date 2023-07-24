import Journal from './layouts/Home';

import data from '../data/journal.json';

const html = Journal(data);

document.body.innerHTML = html;
