import Journal from './components/Journal';

import data from './data/journal.json';

const html = Journal(data);

document.body.innerHTML = html;

// TODO
// Needs minification
// console.log(html);
