import Entry from '../../components/Entry';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

/**
 * Post
 *
 * @export
 * @param {object} Entry data
 * @return {string}
 */
export default function Post(entry) {
	return (`
		${Header()}
		${Entry(entry)}
		${Footer()}
	`);
}
