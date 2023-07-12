import fs from 'fs/promises';

import rootname from '../../rootname.js';

const host1 = 'https://glistening-sprinkles-e2c775.netlify.app';
// const host2 = 'https://spectacular-custard-14e5f1.netlify.app';
const inputPath = `${rootname}/src/data`;
const outputPath = `${rootname}/src/public/assets`;

const data = JSON.parse(await fs.readFile(`${inputPath}/journal.json`, 'utf8'));

function buildItems(entries, host) {
	return entries.map(entry => {
		return (`
			<item>
				<title>${entry.title}</title>
				<link>${host}/#${entry.link}</link>
				<description>${entry.summary}</description>
			</item>
		`);
	}).join('');
}

function wrapItems(items, host) {
	return (`
		<?xml version="1.0"?>
		<rss version="2.0">
			<channel>
				<title>Andy Willis Journal Feed</title>
				<link>${host}</link>
				<description>Andy Willis Journal entries</description>
				${items}
			</channel>
		</rss>
	`);
}

async function writeRSS(xml) {
	try {
		const filePath = `${outputPath}/journal.rss`;
		await fs.writeFile(filePath, xml, 'utf8');
	} catch (err) {
		console.log(err);
	}
}

function createRSS(data, host) {
	const { entries } = data;
	const items = buildItems(entries, host);
	const xml = wrapItems(items, host);
	writeRSS(xml.trim());
	console.log('RSS file written');
}

createRSS(data, host1);

export default createRSS;
