import Blockquote from '../Blockquote';
import Heading from '../Heading';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Table from '../Table';

function format(section) {
	switch (section.type) {
		case 'blockquote': return Blockquote(section.html);
		case 'heading': return Heading({ level: section.level, text: section.text });
		case 'image': return Image({ src: section.src, alt: section.alt });
		case 'table': return Table(section.html);
		default: return Paragraph(section.html);
	}
}

export default function Section(section) {
	return `${format(section)}`;
}
