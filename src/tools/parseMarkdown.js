import jsdom from 'jsdom';
import MarkdownIt from 'markdown-it';
import fs from 'fs/promises';

import rootname from '../../rootname.js';

const markdownData = await fs.readFile(`${rootname}/src/data/journal.md`, 'utf8');

const markdownParser = MarkdownIt();

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<div>')).window;
const div = document.querySelector('div');

function splitMarkdown(markdown, delimiter) {
	return markdown.split(delimiter); // .reverse();
}

function removeElement(el) {
	el.parentNode.removeChild(el);
}

function getTitle(parent) {
	const element = parent.querySelector('h2');
	const text = element.textContent;
	removeElement(element);
	return text;
}

function getDate(parent) {
	const element = parent.querySelector('h3');
	const text = element.textContent;
	removeElement(element);
	return text;
}

function getTags(parent) {
	const element = parent.querySelector('ul');
	const items = element.querySelectorAll('li');
	const tags = [...items].map((tag, i) => {
		return { id: i, tag: tag.textContent };
	});
	removeElement(element);
	return tags;
}

function getLink(id, title) {
	return (
		`${title}-${id}`
			.replace(/[.,/#!$%^&*;:'{}=_`~()]/g, '')
			.replace(/\s/g, '-')
			.toLowerCase()
	);
}

function getBody(el) {

	const selector = 'p, h2, h3, h4, blockquote, img, table, ul';

	return [...el.querySelectorAll(selector)].reduce((p, c, i) => {

		switch (c.nodeName) {

			case 'UL': {
				p.push({ id: i, type: 'list', html: c.innerHTML });
				break;
			}

			case 'TABLE': {
				p.push({ id: i, type: 'table', html: c.innerHTML });
				break;
			}

			case 'IMG': {
				p.push({ id: i, type: 'image', src: c.src, alt: c.alt });
				break;
			}

			case 'P': {
				if (c.firstChild.nodeName !== 'IMG') {
					const name = c.parentNode.nodeName;
					const type = name === 'BLOCKQUOTE' ? 'blockquote' : 'para';
					p.push({ id: i, type, html: c.innerHTML });
				}
				break;
			}

			case 'H2': {
				p.push({ id: i, type: 'h2', txt: c.textContent });
				break;
			}

			case 'H3': {
				p.push({ id: i, type: 'h3', txt: c.textContent });
				break;
			}

			case 'H4': {
				p.push({ id: i, type: 'h4', txt: c.textContent });
				break;
			}

		}
		return p;
	}, []);
}

function buildEntry(md, id) {
	
	const html = markdownParser.render(md);
	
	div.innerHTML = html;

	const title = getTitle(div);
	const date = getDate(div);
	const tags = getTags(div);
	const link = getLink(id, title);
	const body = getBody(div);
	const cdata = div.innerHTML.trim();

	const entry = {
		id: ++id,
		title,
		date,
		tags,
		link,
		body,
		cdata
	};

	return entry;

}

function buildTagList(entries) {
	return entries.reduce((acc, { tags }) => {
		tags.forEach(({ txt }) => {
			acc[txt] = (acc[txt] || 0) + 1;
		});
		return acc;
	}, {});
}

function processMarkdown(markdown) {
	return new Promise((resolve, reject) => {
		const delimiter = '\n\n----\n\n';
		const markdownArr = splitMarkdown(markdown, delimiter);
		const entries = markdownArr.map(buildEntry); // .reverse();
		const links = entries.map(entry => entry.link);
		const tags = buildTagList(entries);
		try {
			resolve({ entries, links, tags });
		} catch (e) {
			reject(e);
		}
	});
}

const data = await processMarkdown(markdownData);
await fs.writeFile(`${rootname}/src/data/journal.json`, JSON.stringify(data), 'utf8');

export default processMarkdown;
