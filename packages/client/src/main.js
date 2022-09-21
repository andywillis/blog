import Journal from './components/Journal';
import fetchData from './api/fetchData';

import './global.module.css';

async function main() {
  const data = await fetchData('/journal');
  return Journal(data);
}

const journal = await main();
document.body.innerHTML = journal;
