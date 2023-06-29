import Journal from './components/Journal';
// import fetchData from './api/fetchData';

import data from './data/journal.json';

import './styles/global.module.css';

// async function main() {
//   const data = await fetchData('/journal');
//   return Journal(data);
// }

document.body.innerHTML = Journal(data);
