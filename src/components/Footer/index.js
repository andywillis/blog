import style from './index.module.css';

/**
 * Footer
 *
 * @export
 * @param {string} data
 * @return {string} VSX
 */
export default function Footer(data) {
	return (`
		<footer class="${style.footer}">
			<h2 class="${style.heading}">${data}</h2>
			<a rel="me" href="https://fosstodon.org/@woodsbythesea">Mastodon</a>
		</footer>
	`);
}
