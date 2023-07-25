import Journal from './layouts/Home/index.svelte'

// import data from '../data/journal.json';

import '../public/styles/global.css';

const app = new Journal({
  target: document.querySelector('body'),
})

export default app;
