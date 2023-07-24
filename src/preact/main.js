import { render } from 'preact';

import Journal from './layouts/Home';

// eslint-disable-next-line import/no-relative-packages
import data from '../data/journal.json';

render(<Journal data={data} />, document.body);
