import Heading from '../Heading';

export default function Title(content, link) {
	return `
		<a href="#${link}">
			${Heading({ link, level: 'h2', type: 'h2', text: content })}
		</a>
	`;
}
