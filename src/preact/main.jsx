/* eslint-disable import/no-relative-packages */
import { render } from 'preact';

import Journal from './layouts/Home';

import data from '../data/journal.json';

import '../public/styles/global.css';

render(<Journal data={data} />, document.body);
