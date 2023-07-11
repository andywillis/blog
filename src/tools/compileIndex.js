import fse from 'fs-extra';
import { minify } from 'html-minifier';
import fs from 'fs/promises';

import rootname from '../../rootname.js';

import extractHtml from './temp/extractHtml.js';

const publicOrigin = `${rootname}/src/public`;
const toolsPath = `${rootname}/src/tools`;
const tempPath = `${toolsPath}/temp`;
const buildPath = `${toolsPath}/build`;

await fse.emptyDir(buildPath);
await fse.copy(publicOrigin, buildPath);

// const css = await fs.readFile(`${tempPath}/journal.css`, 'utf8');
const placeholder = await fs.readFile(`${toolsPath}/index_placeholder.html`, 'utf8');

const replaced = placeholder
	// .replace('{stylesheet}', `<style>${css}</style>`)
	.replace('{html}', extractHtml());

const minified = minify(replaced, {
	// minifyCSS: true,
	removeAttributeQuotes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	removeComments: true,
	removeOptionalTags: true,
	removeTagWhitespace: true
});

try {
	await fs.mkdir(buildPath);
} catch {
	console.log('Build folder exists');
}

await fs.writeFile(`${tempPath}/index.html`, minified, 'utf8');

fse.copy(`${tempPath}/index.html`, `${buildPath}/index.html`);
fse.copy(`${tempPath}/journal.css`, `${buildPath}/assets/journal.css`);
fse.copy(`${tempPath}/journal.css.gz`, `${buildPath}/assets/journal.css.gz`);

console.log('Compiled index file written');
