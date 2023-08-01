/* eslint-disable import/no-relative-packages */
import fs from 'fs/promises';

import rootname from '../../../rootname.js';

const args = process.argv;
const host = args[2].split('=')[1];

const inputPath = `${rootname}/src/data`;

const details = {
	sprinkles: {
		host: 'https://glistening-sprinkles-e2c775.netlify.app',
		outputPath: `${rootname}/src/public/assets`
	},
	custard: {
		host: 'https://spectacular-custard-14e5f1.netlify.app',
		outputPath: `${rootname}/src/tools/build/assets`
	}
};

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

async function writeRSS({ xml, outputPath }) {
	try {
		const filePath = `${outputPath}/journal.rss`;
		await fs.writeFile(filePath, xml, 'utf8');
	} catch (err) {
		console.log(err);
	}
}

function createRSS({ data, host }) {
	const { entries } = data;
	const items = buildItems(entries, host);
	return wrapItems(items, host);
}

const xml = createRSS({ data, host: details[host].host });
writeRSS({ xml: xml.trim(), outputPath: details[host].outputPath });
console.log('RSS file written');

export default createRSS;
