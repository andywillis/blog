import Blockquote from '../Blockquote';
import Heading from '../Heading';
import Image from '../Image';
import HR from '../HR';
import Footnotes from '../Footnotes';
import List from '../List';
import Paragraph from '../Paragraph';
import Table from '../Table';

function format(section) {
	switch (section.type) {
		case 'h3': return <Heading level="h3" type="h3" text={section.text} />;
		case 'blockquote': return <Blockquote html={section.html} />;
		case 'image': return <Image src={section.src} alt={section.alt} />;
		case 'table': return <Table html={section.html} />;
		case 'hr': return <HR />;
		case 'footnotes': return <Footnotes footnotes={section.footnotes} />;
		case 'list': return <List variant={section.variant} items={section.items} />;
		default: return <Paragraph html={section.html} />;
	}
}

export default function Section({ section }) {
	return format(section);
}
