import { createApp } from 'vue'

import Journal from './layouts/Home';

import data from '../data/journal.json';

import '../public/styles/global.css';

createApp(Journal, { data }).mount('#app');
