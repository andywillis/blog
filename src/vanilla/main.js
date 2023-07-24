/* eslint-disable import/no-relative-packages */
import Journal from './layouts/Home';

import '../public/styles/global.css';

import data from '../data/journal.json';

const html = Journal(data);

document.body.innerHTML = html;
