/* eslint-disable import/no-relative-packages */
import render from 'preact-render-to-string';

import Journal from '../layouts/Home';

import data from '../../data/journal.json';

import '../../public/styles/global.css';

export default function () {
	return render(<Journal data={data} />);
}
