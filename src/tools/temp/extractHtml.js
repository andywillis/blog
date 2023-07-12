var style$b = {"heading":"heading_nJ6uJ","h1":"h1_FMROn heading_nJ6uJ","h2":"h2_oQFsm heading_nJ6uJ","h3":"h3_KuDyr heading_nJ6uJ","date":"date_svN9j h3_KuDyr heading_nJ6uJ"};

/**
 * Heading
 *
 * @param {object} props
 * @return {string}
 */
function Heading(props) {

	const {
		link,
		level,
		type = props.level,
		text
	} = props;

	return (`
		<${level}
			class="${style$b[type]}"
			${link ? `id="${link}"` : ''}
		>${text}
		</${level}>
	`);

}

// import style from './index.module.css';


function Date(data) {
	return `${Heading({
		level: 'h3',
		type: 'date',
		text: data
	})}`;
}

var style$a = {"blockquote":"blockquote_id4g0"};

function Blockquote(blockquote) {
	return (`
		<p class=${style$a.blockquote}>
			${blockquote}
		</p>
	`);
}

var style$9 = {"imageContainer":"imageContainer_3GSCf","image":"image_ZfmAG","fadeIn":"fadeIn_oAMz4"};

function Image({ src, alt }) {
	return (`
		<div class="${style$9.imageContainer}">
			<img
				class="${style$9.image}"
				width="800px"
				height="500px"
				src="${src}"
				alt="${alt}"
			>
		</div>
	`);
}

var style$8 = {"paragraph":"paragraph_J0EDo"};

function Paragraph(html) {
	return (`
		<p class="${style$8.paragraph}">
			${html}
		</p>
	`);
}

var style$7 = {"table":"table_kW01W"};

function Table(data) {
	return (`
		<table class="${style$7.table}">
			${data}
		</table>
	`);
}

function format(section) {
	switch (section.type) {
		case 'h3': return Heading({ level: 'h3', type: 'h3', text: section.text });
		case 'blockquote': return Blockquote(section.html);
		case 'image': return Image({ src: section.src, alt: section.alt });
		case 'table': return Table(section.html);
		default: return Paragraph(section.html);
	}
}

function Section(section) {
	return `${format(section)}`;
}

var style$6 = {"content":"content_zCzQb"};

function Content(sections) {
	return (`
		<div class="${style$6.content}">
			${sections.map(Section).join('')}
		</div>
	`);
}

var style$5 = {"tag":"tag_3fnis"};

function Tag(tag, index, arr) {
	return (`
		<li class="${style$5.tag}">
			${tag.tag}${index < arr.length - 1 ? ',' : ''}
		</li>
	`);
}

var style$4 = {"tagContainer":"tagContainer_C7DhE","tags":"tags_Da2tx"};

function Tags(data) {
	return (`
		<section class=${style$4.tagContainer}>
			${Heading({ level: 'h3', type: 'h3', text: 'Tags' })}
			<ul class="${style$4.tags}">
				${data.map(Tag).join('')}
			</ul>
		</section>
	`);
}

function Title(content, link) {
	return `
		<a href="#${link}">
			${Heading({ link, level: 'h2', type: 'h2', text: content })}
		</a>
	`;
}

var style$3 = {"header":"header_WW578","entry":"entry_fyjIz"};

function Entry(entry, index) {
	const { date, title, link, body, tags } = entry;
	return (`
		<section class="${style$3.entry}" data-type="entry">
			<header class="${style$3.header}">
				${Title(title, link)}
				${Date(date)}
			</header>
			${Content(body)}
			${Tags(tags)}
		</section>
	`);
}

var style$2 = {"entries":"entries_GtBql"};

function Entries(entries) {
	return (`
		<main class="${style$2.entries}">
			${entries.map(Entry).join('')}
		</main>
	`);
}

var style$1 = {"footer":"footer_01lc4","socialsList":"socialsList_QLLZy","icon":"icon_ycf5J"};

/**
 * Footer
 *
 * @export
 * @return {string}
 */
function Footer() {
	return (`
		<footer class="${style$1.footer}">
			<section class="${style$1.socialsList}">
				<ul>
					<li>
						<a href="https://github.com/andywillis">
							<svg class="${style$1.icon}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="22" height="22"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
							Github
						</a>
					</li>
					<li>
						<a href="https://stackoverflow.com/users/1377002/andy">
							<svg class="${style$1.icon}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="22" height="22"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"/></svg>
							Stack overflow
						</a>
					</li>
					<li>
						<a rel="me" href="https://fosstodon.org/@woodsbythesea">
							<svg class="${style$1.icon}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"/></svg>
							Mastodon
						</a>
					</li>
					<li>
						<a rel="me" href="journal.rss">
							<svg class="${style$1.icon}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
							RSS feed
						</a>
					</li>
				</ul>
			</section>
		</footer>
	`);
}

var style = {"header":"header_ovhSs","nav":"nav_NtaC9"};

function Header() {
	return (`
		<header class="${style.header}">
			${Heading({ level: 'h1', type: 'h1', text: 'Andy Willis' })}
		</header>
	`);
}

/**
 * Journal
 *
 * @export
 * @param {object} journal
 * @return {string} Template
 */
function Journal(journal) {
	return (`
		${Header()}
		${Entries(journal.entries)}
		${Footer()}
	`);
}

var entries = [
	{
		id: 1,
		title: "Parkes Operation Center (Apollo 11)",
		date: "Tuesday, 26 July 2022",
		tags: [
			{
				id: 0,
				tag: "thedish"
			},
			{
				id: 1,
				tag: "parkes"
			},
			{
				id: 2,
				tag: "apollo11"
			}
		],
		link: "parkes-operation-center-apollo-11-0",
		body: [
			{
				id: 0,
				type: "para",
				html: "Just finished watching <a href=\"https://en.wikipedia.org/wiki/The_Dish\">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was \"based on\" the actual events the film-makers used fictional characters."
			},
			{
				id: 1,
				type: "para",
				html: "But I managed to <a href=\"https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html\">unearth this brilliant photo of the actual operations team</a>. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front)."
			},
			{
				id: 3,
				type: "image",
				src: "/assets/images/parkes.webp",
				alt: "Parkes Operations Team 1969"
			}
		],
		cdata: "<p>Just finished watching <a href=\"https://en.wikipedia.org/wiki/The_Dish\">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was \"based on\" the actual events the film-makers used fictional characters.</p>\n<p>But I managed to <a href=\"https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html\">unearth this brilliant photo of the actual operations team</a>. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front).</p>\n<p><img src=\"/assets/images/parkes.webp\" alt=\"Parkes Operations Team 1969\"></p>"
	},
	{
		id: 2,
		title: "Towards Sandwich Bay",
		date: "Tuesday, 18 December 2018",
		tags: [
			{
				id: 0,
				tag: "sandwichbay"
			},
			{
				id: 1,
				tag: "ramsgate"
			},
			{
				id: 2,
				tag: "sunset"
			}
		],
		link: "towards-sandwich-bay-1",
		body: [
			{
				id: 0,
				type: "para",
				html: "This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here."
			},
			{
				id: 2,
				type: "image",
				src: "/assets/images/towardssandwichbay.webp",
				alt: "Ramsgate Sands"
			}
		],
		cdata: "<p>This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.</p>\n<p><img src=\"/assets/images/towardssandwichbay.webp\" alt=\"Ramsgate Sands\"></p>"
	},
	{
		id: 3,
		title: "Sandwich Bay, Kent",
		date: "Wednesday, 31 October 2018",
		tags: [
			{
				id: 0,
				tag: "sandwichbay"
			},
			{
				id: 1,
				tag: "beach"
			},
			{
				id: 2,
				tag: "autumn"
			},
			{
				id: 3,
				tag: "lowtide"
			}
		],
		link: "sandwich-bay-kent-2",
		body: [
			{
				id: 0,
				type: "para",
				html: "Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun.\""
			},
			{
				id: 2,
				type: "image",
				src: "/assets/images/sandwichbay1.webp",
				alt: "Sandwich Bay"
			},
			{
				id: 3,
				type: "image",
				src: "/assets/images/sandwichbay2.webp",
				alt: "Sandwich Bay"
			}
		],
		cdata: "<p>Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun.\"</p>\n<p><img src=\"/assets/images/sandwichbay1.webp\" alt=\"Sandwich Bay\">\n<img src=\"/assets/images/sandwichbay2.webp\" alt=\"Sandwich Bay\"></p>"
	},
	{
		id: 4,
		title: "Dungeness",
		date: "Saturday, 30 September 2017",
		tags: [
			{
				id: 0,
				tag: "dungeness"
			},
			{
				id: 1,
				tag: "beach"
			},
			{
				id: 2,
				tag: "windswept"
			}
		],
		link: "dungeness-3",
		body: [
			{
				id: 1,
				type: "image",
				src: "/assets/images/dungeness1.webp",
				alt: "Dungeness beach"
			},
			{
				id: 2,
				type: "image",
				src: "/assets/images/dungeness2.webp",
				alt: "Ship high on the beach"
			}
		],
		cdata: "<p><img src=\"/assets/images/dungeness1.webp\" alt=\"Dungeness beach\">\n<img src=\"/assets/images/dungeness2.webp\" alt=\"Ship high on the beach\"></p>"
	},
	{
		id: 5,
		title: "Flickr images for responsive sites",
		date: "Monday, 21 August 2017",
		tags: [
			{
				id: 0,
				tag: "images"
			},
			{
				id: 1,
				tag: "responsive"
			},
			{
				id: 2,
				tag: "flickr"
			}
		],
		link: "flickr-images-for-responsive-sites-4",
		body: [
			{
				id: 0,
				type: "para",
				html: "Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr."
			},
			{
				id: 1,
				type: "para",
				html: "When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>."
			},
			{
				id: 2,
				type: "para",
				html: "For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site."
			},
			{
				id: 3,
				type: "table",
				html: "\n<thead>\n<tr>\n<th>Type</th>\n<th>Dimensions</th>\n<th>ID</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Square</td>\n<td>75x75</td>\n<td>s</td>\n</tr>\n<tr>\n<td>Thumbnail</td>\n<td>100x56</td>\n<td>t</td>\n</tr>\n<tr>\n<td>Square</td>\n<td>150x150</td>\n<td>q</td>\n</tr>\n<tr>\n<td>Small</td>\n<td>240x135</td>\n<td>m</td>\n</tr>\n<tr>\n<td>Small*</td>\n<td>320x180</td>\n<td>n</td>\n</tr>\n<tr>\n<td>Medium*</td>\n<td>500x281</td>\n<td>n/a</td>\n</tr>\n<tr>\n<td>Medium</td>\n<td>640x359</td>\n<td>z</td>\n</tr>\n<tr>\n<td>Medium*</td>\n<td>800x449</td>\n<td>c</td>\n</tr>\n<tr>\n<td>Large</td>\n<td>1024x575</td>\n<td>b</td>\n</tr>\n<tr>\n<td>Large</td>\n<td>1600x899</td>\n<td>h</td>\n</tr>\n<tr>\n<td>Large</td>\n<td>2048x1150</td>\n<td>k</td>\n</tr>\n<tr>\n<td>Original</td>\n<td>2592x1456</td>\n<td>o</td>\n</tr>\n</tbody>\n"
			}
		],
		cdata: "<p>Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr.</p>\n<p>When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>.</p>\n<p>For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site.</p>\n<table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Dimensions</th>\n<th>ID</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Square</td>\n<td>75x75</td>\n<td>s</td>\n</tr>\n<tr>\n<td>Thumbnail</td>\n<td>100x56</td>\n<td>t</td>\n</tr>\n<tr>\n<td>Square</td>\n<td>150x150</td>\n<td>q</td>\n</tr>\n<tr>\n<td>Small</td>\n<td>240x135</td>\n<td>m</td>\n</tr>\n<tr>\n<td>Small*</td>\n<td>320x180</td>\n<td>n</td>\n</tr>\n<tr>\n<td>Medium*</td>\n<td>500x281</td>\n<td>n/a</td>\n</tr>\n<tr>\n<td>Medium</td>\n<td>640x359</td>\n<td>z</td>\n</tr>\n<tr>\n<td>Medium*</td>\n<td>800x449</td>\n<td>c</td>\n</tr>\n<tr>\n<td>Large</td>\n<td>1024x575</td>\n<td>b</td>\n</tr>\n<tr>\n<td>Large</td>\n<td>1600x899</td>\n<td>h</td>\n</tr>\n<tr>\n<td>Large</td>\n<td>2048x1150</td>\n<td>k</td>\n</tr>\n<tr>\n<td>Original</td>\n<td>2592x1456</td>\n<td>o</td>\n</tr>\n</tbody>\n</table>"
	},
	{
		id: 6,
		title: "Akule",
		date: "Tuesday, 15 August 2017",
		tags: [
			{
				id: 0,
				tag: "ocean"
			},
			{
				id: 1,
				tag: "photography"
			},
			{
				id: 2,
				tag: "underwater"
			},
			{
				id: 3,
				tag: "hawaii"
			}
		],
		link: "akule-5",
		body: [
			{
				id: 1,
				type: "blockquote",
				html: "\"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href=\"http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii\">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>\" - Wayne Levin"
			},
			{
				id: 3,
				type: "image",
				src: "/assets/images/akule.webp",
				alt: "Pretty school of fish"
			}
		],
		cdata: "<blockquote>\n<p>\"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href=\"http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii\">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>\" - Wayne Levin</p>\n</blockquote>\n<p><img src=\"/assets/images/akule.webp\" alt=\"Pretty school of fish\"></p>"
	},
	{
		id: 7,
		title: "Wimbledon Common",
		date: "Monday, 31 July 2017",
		tags: [
			{
				id: 0,
				tag: "wimbledoncommon"
			},
			{
				id: 1,
				tag: "pond"
			},
			{
				id: 2,
				tag: "samshepard"
			}
		],
		link: "wimbledon-common-6",
		body: [
			{
				id: 0,
				type: "para",
				html: "This is the pond I was lazing by when I heard the sad news that Sam Shepard had died."
			},
			{
				id: 2,
				type: "image",
				src: "/assets/images/shepard.webp",
				alt: "Pond on the East side of Wimbledon Common"
			}
		],
		cdata: "<p>This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.</p>\n<p><img src=\"/assets/images/shepard.webp\" alt=\"Pond on the East side of Wimbledon Common\"></p>"
	},
	{
		id: 8,
		title: "This site",
		date: "Saturday, 24 June 2017",
		tags: [
			{
				id: 0,
				tag: "express"
			},
			{
				id: 1,
				tag: "react"
			},
			{
				id: 2,
				tag: "reactrouter"
			},
			{
				id: 3,
				tag: "markdown"
			},
			{
				id: 4,
				tag: "journal"
			}
		],
		link: "this-site-7",
		body: [
			{
				id: 0,
				type: "para",
				html: "This site is <a href=\"https://github.com/andywillis/uws\">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out."
			},
			{
				id: 1,
				type: "para",
				html: "In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about."
			},
			{
				id: 2,
				type: "h3",
				text: "Process breakdown"
			},
			{
				id: 3,
				type: "para",
				html: "All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account."
			},
			{
				id: 4,
				type: "para",
				html: "I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data."
			},
			{
				id: 5,
				type: "para",
				html: "Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface."
			},
			{
				id: 6,
				type: "para",
				html: "This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site."
			}
		],
		cdata: "<p>This site is <a href=\"https://github.com/andywillis/uws\">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.</p>\n<p>In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about.</p>\n<h3>Process breakdown</h3>\n<p>All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account.</p>\n<p>I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data.</p>\n<p>Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface.</p>\n<p>This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site.</p>"
	},
	{
		id: 9,
		title: "A Tuesday Wander",
		date: "Tuesday, 16 May 2017",
		tags: [
			{
				id: 0,
				tag: "kensingtonchurch"
			},
			{
				id: 1,
				tag: "greenpark"
			},
			{
				id: 2,
				tag: "london"
			},
			{
				id: 3,
				tag: "hydepark"
			}
		],
		link: "a-tuesday-wander-8",
		body: [
			{
				id: 0,
				type: "para",
				html: "A walk from Embankment, up The Mall to Buckingham Palace, along Green Park, up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and finally out on to the road and on to Earl's Court."
			},
			{
				id: 2,
				type: "image",
				src: "/assets/images/wandermap.webp",
				alt: "Map of the walk from Embankment to Earl's Court"
			}
		],
		cdata: "<p>A walk from Embankment, up The Mall to Buckingham Palace, along Green Park, up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and finally out on to the road and on to Earl's Court.</p>\n<p><img src=\"/assets/images/wandermap.webp\" alt=\"Map of the walk from Embankment to Earl's Court\"></p>"
	},
	{
		id: 10,
		title: "Broadstairs",
		date: "Wednesday, 28 December 2016",
		tags: [
			{
				id: 0,
				tag: "broadstairs"
			},
			{
				id: 1,
				tag: "northsea"
			},
			{
				id: 2,
				tag: "beach"
			},
			{
				id: 3,
				tag: "ocean"
			}
		],
		link: "broadstairs-9",
		body: [
			{
				id: 0,
				type: "para",
				html: "It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea."
			},
			{
				id: 2,
				type: "image",
				src: "/assets/images/broadstairs1.webp",
				alt: "Photo of the North Sea from the coast near Broadstairs"
			},
			{
				id: 3,
				type: "para",
				html: "If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel."
			},
			{
				id: 5,
				type: "image",
				src: "/assets/images/broadstairs2.webp",
				alt: "Photo of the North Sea from the coast near Broadstairs"
			}
		],
		cdata: "<p>It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.</p>\n<p><img src=\"/assets/images/broadstairs1.webp\" alt=\"Photo of the North Sea from the coast near Broadstairs\"></p>\n<p>If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.</p>\n<p><img src=\"/assets/images/broadstairs2.webp\" alt=\"Photo of the North Sea from the coast near Broadstairs\"></p>"
	},
	{
		id: 11,
		title: "Wimbledon Common",
		date: "Saturday, 31 December 2016",
		tags: [
			{
				id: 0,
				tag: "wimbledon"
			},
			{
				id: 1,
				tag: "wimbledoncommon"
			}
		],
		link: "wimbledon-common-10",
		body: [
			{
				id: 1,
				type: "image",
				src: "/assets/images/wimbledontree.webp",
				alt: "The sun's rays shine through the foliage of a tree on the Common"
			}
		],
		cdata: "<p><img src=\"/assets/images/wimbledontree.webp\" alt=\"The sun's rays shine through the foliage of a tree on the Common\"></p>"
	},
	{
		id: 12,
		title: "Montevideo, Uruguay",
		date: "Thursday, July 16 2015",
		tags: [
			{
				id: 0,
				tag: "uruguay"
			},
			{
				id: 1,
				tag: "beach"
			},
			{
				id: 2,
				tag: "ocean"
			}
		],
		link: "montevideo-uruguay-11",
		body: [
			{
				id: 1,
				type: "image",
				src: "/assets/images/uruguay.webp",
				alt: "The beach North of Montevideo, Uruguay"
			}
		],
		cdata: "<p><img src=\"/assets/images/uruguay.webp\" alt=\"The beach North of Montevideo, Uruguay\"></p>"
	},
	{
		id: 13,
		title: "Disney's The Black Hole",
		date: "Tuesday, 3 April 2012",
		tags: [
			{
				id: 0,
				tag: "theblackhole"
			},
			{
				id: 1,
				tag: "spotmaps"
			}
		],
		link: "disneys-the-black-hole-12",
		body: [
			{
				id: 0,
				type: "para",
				html: "This is one of the many images rendered by my <a href=\"https://github.com/andywillis/spotmaps\">spotmaps</a> application."
			},
			{
				id: 1,
				type: "para",
				html: "From the original site:"
			},
			{
				id: 3,
				type: "blockquote",
				html: "Spotmaps, based on Brendan Dawes' <a href=\"http://brendandawes.com/projects/cinemaredux\">Cinema Redux</a>, is an on-going project to map the colour narratives of different films."
			},
			{
				id: 5,
				type: "blockquote",
				html: "Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames."
			},
			{
				id: 7,
				type: "blockquote",
				html: "Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film."
			},
			{
				id: 9,
				type: "blockquote",
				html: "A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap."
			},
			{
				id: 11,
				type: "image",
				src: "/assets/images/blackhole.webp",
				alt: "Black Hole spotmap"
			},
			{
				id: 12,
				type: "para",
				html: "More images can be found <a href=\"https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787\">here on Flickr</a>."
			},
			{
				id: 13,
				type: "para",
				html: "There are also a couple of online articles about the spotmaps website on <a href=\"http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels\">FastCoDesign</a>, and <a href=\"http://gizmodo.com/5972740/the-color-of-movies-visualized\">Gizmodo</a>."
			}
		],
		cdata: "<p>This is one of the many images rendered by my <a href=\"https://github.com/andywillis/spotmaps\">spotmaps</a> application.</p>\n<p>From the original site:</p>\n<blockquote>\n<p>Spotmaps, based on Brendan Dawes' <a href=\"http://brendandawes.com/projects/cinemaredux\">Cinema Redux</a>, is an on-going project to map the colour narratives of different films.</p>\n</blockquote>\n<blockquote>\n<p>Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames.</p>\n</blockquote>\n<blockquote>\n<p>Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.</p>\n</blockquote>\n<blockquote>\n<p>A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.</p>\n</blockquote>\n<p><img src=\"/assets/images/blackhole.webp\" alt=\"Black Hole spotmap\"></p>\n<p>More images can be found <a href=\"https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787\">here on Flickr</a>.</p>\n<p>There are also a couple of online articles about the spotmaps website on <a href=\"http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels\">FastCoDesign</a>, and <a href=\"http://gizmodo.com/5972740/the-color-of-movies-visualized\">Gizmodo</a>.</p>"
	},
	{
		id: 14,
		title: "Nan",
		date: "Sunday, 1 January 2006",
		tags: [
			{
				id: 0,
				tag: "nan"
			},
			{
				id: 1,
				tag: "war"
			},
			{
				id: 2,
				tag: "hospital"
			}
		],
		link: "nan-13",
		body: [
			{
				id: 0,
				type: "para",
				html: "Nan is on the right."
			},
			{
				id: 2,
				type: "image",
				src: "/assets/images/nan.webp",
				alt: "Nan in an operating theatre (black and white)"
			}
		],
		cdata: "<p>Nan is on the right.</p>\n<p><img src=\"/assets/images/nan.webp\" alt=\"Nan in an operating theatre (black and white)\"></p>"
	},
	{
		id: 15,
		title: "My Great Grandad, George W. Smith.",
		date: "Sunday, 1 January 2006",
		tags: [
			{
				id: 0,
				tag: "greatgranddad"
			},
			{
				id: 1,
				tag: "miner"
			},
			{
				id: 2,
				tag: "kent"
			},
			{
				id: 3,
				tag: "dover"
			}
		],
		link: "my-great-grandad-george-w-smith-14",
		body: [
			{
				id: 0,
				type: "para",
				html: "Organised the first Kent miner's strike."
			},
			{
				id: 2,
				type: "image",
				src: "/assets/images/george.webp",
				alt: "My great-grandfather, George"
			}
		],
		cdata: "<p>Organised the first Kent miner's strike.</p>\n<p><img src=\"/assets/images/george.webp\" alt=\"My great-grandfather, George\"></p>"
	},
	{
		id: 16,
		title: "Dirty Cow",
		date: "Sunday, 1 January 2000",
		tags: [
			{
				id: 0,
				tag: "cow"
			},
			{
				id: 1,
				tag: "dirtycow"
			},
			{
				id: 2,
				tag: "newyear"
			}
		],
		link: "dirty-cow-15",
		body: [
			{
				id: 1,
				type: "image",
				src: "/assets/images/dirtycow.webp",
				alt: "Massive papier-mache cow on the roof of Fortress Studios"
			}
		],
		cdata: "<p><img src=\"/assets/images/dirtycow.webp\" alt=\"Massive papier-mache cow on the roof of Fortress Studios\"></p>"
	}
];
var links = [
	"parkes-operation-center-apollo-11-0",
	"towards-sandwich-bay-1",
	"sandwich-bay-kent-2",
	"dungeness-3",
	"flickr-images-for-responsive-sites-4",
	"akule-5",
	"wimbledon-common-6",
	"this-site-7",
	"a-tuesday-wander-8",
	"broadstairs-9",
	"wimbledon-common-10",
	"montevideo-uruguay-11",
	"disneys-the-black-hole-12",
	"nan-13",
	"my-great-grandad-george-w-smith-14",
	"dirty-cow-15"
];
var tags = {
	"undefined": 53
};
var data = {
	entries: entries,
	links: links,
	tags: tags
};

function compileJournal() {
	return Journal(data);
}

export { compileJournal as default };
