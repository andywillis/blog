import { minify } from 'html-minifier';
import fs from 'fs/promises';

import rootname from '../../rootname.js';

import html from '../../build/bundle.js';

const placeholder = await fs.readFile(`${rootname}/src/index_placeholder.html`, 'utf8');

const replaced = placeholder
	.replace('{stylesheet}', '<link rel="stylesheet" href="bundle.css" />')
	.replace('{html}', html);

const minified = minify(replaced, {
	removeAttributeQuotes: true,
	collapseWhitespace: true,
	removeComments: true,
	removeOptionalTags: true,
	removeTagWhitespace: true
});

await fs.writeFile(`${rootname}/build/bundle.html`, minified, 'utf8');

console.log('File written');
