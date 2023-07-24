import Blockquote from '../Blockquote';
import Heading from '../Heading';
import Image from '../Image';
import List from '../List';
import Paragraph from '../Paragraph';
import Table from '../Table';

function format(section) {
	switch (section.type) {
		case 'h3': return Heading({ level: 'h3', type: 'h3', text: section.text });
		case 'blockquote': return Blockquote(section.html);
		case 'image': return Image({ src: section.src, alt: section.alt });
		case 'table': return Table(section.html);
		case 'list': return List(section.items);
		default: return Paragraph(section.html);
	}
}

export default function Section(section) {
	return `${format(section)}`;
}
