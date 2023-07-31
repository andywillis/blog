/* eslint-disable import/no-relative-packages */
/* eslint-disable no-unused-vars */
import render from 'preact-render-to-string';
import { h } from 'preact';

import Journal from '../layouts/Home';

import data from '../../data/journal.json';

import '../../public/styles/global.css';

console.log(render(<Journal data={data} />));

// await fs.writeFile('tools/temp/index.html', render(<Journal data={data} />), 'utf8');
// console.log('File written');
