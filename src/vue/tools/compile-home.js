/* eslint-disable import/no-relative-packages */
import { createApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

import Journal from '../layouts/Home/index.vue';

import data from '../../data/journal.json';

import '../../public/styles/global.css';

export default function () {
	const app = createApp(Journal, { data });
	return renderToString(app);
}
