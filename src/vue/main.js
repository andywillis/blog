/* eslint-disable import/no-relative-packages */
import { createApp } from 'vue';

import Journal from './layouts/Home/index.vue';

import data from '../data/journal.json';

import '../public/styles/global.css';

createApp(Journal, { data }).mount('body');
