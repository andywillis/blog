/* eslint-disable no-unused-vars */
import render from 'preact-render-to-string';
import { h } from 'preact';

import Div from './div-index.jsx';

const App = (
	<Fragment>
		<Div content="Hallo" />
	</Fragment>
);

console.log(render(App));
