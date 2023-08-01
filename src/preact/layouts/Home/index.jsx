/* eslint-disable no-unused-vars */
import { Fragment } from 'preact';

import Entries from '../../components/Entries';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

/**
 * Home
 *
 * @export
 * @param {object} Journal data
 * @return {string}
 */
export default function Home({ data }) {
	const { entries } = data;
	return (
		<Fragment>
			<Header />
			<Entries entries={entries} />
			<Footer />
		</Fragment>
	);
}
