import { minify } from 'html-minifier';
import fs from 'fs/promises';

import extractHtml from './temp/extractHtml.js';

import rootname from '../../rootname.js';

const toolsPath = `${rootname}/src/tools`;
const tempPath = `${toolsPath}/temp`;
const buildPath = `${toolsPath}/build`;

const css = await fs.readFile(`${tempPath}/journal.css`, 'utf8');
const placeholder = await fs.readFile(`${toolsPath}/index_placeholder.html`, 'utf8');

const replaced = placeholder
	.replace('{stylesheet}', `<style>${css}</style>`)
	.replace('{html}', extractHtml());

const minified = minify(replaced, {
	removeAttributeQuotes: true,
	minifyCSS: true,
	collapseWhitespace: true,
	removeComments: true,
	removeOptionalTags: true,
	removeTagWhitespace: true
});

try {
	await fs.mkdir(buildPath);
} catch {
	console.log('Build folder exists');
}

await fs.writeFile(`${buildPath}/index.html`, minified, 'utf8');

console.log('Compiled index file written');
