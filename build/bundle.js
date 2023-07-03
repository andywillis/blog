var style$b = {"h1":"h1","h2":"h2","h3":"h3"};

function Heading({ level, text }) {
	return (`
		<${level} class="${style$b[level]}">
			${text}
		</${level}>
	`);
}

var style$a = {"header":"header","nav":"nav"};

function Header() {
	return (`
		<header class="${style$a.header}">
			${Heading({ level: 'h1', text: 'Journal' })}
		</header>
	`);
}

// import style from './index.module.css';


function Date$1(data) {
	return `${Heading({ level: 'h3', text: data })}`;
}

var style$9 = {"blockquote":"blockquote"};

function Blockquote(blockquote) {
	return (`
		<p class=${style$9.blockquote}>
			${blockquote}
		</p>
	`);
}

var style$8 = {"imageContainer":"imageContainer","image":"image","fadeIn":"fadeIn"};

function Image({ src, alt }) {
	return (`
		<div class="${style$8.imageContainer}">
			<img
				class="${style$8.image}"
				src="${src}"
				alt="${alt}"
			>
		</div>
	`);
}

var style$7 = {"paragraph":"paragraph"};

function Paragraph(html) {
	return (`
		<p class="${style$7.paragraph}">
			${html}
		</p>
	`);
}

var style$6 = {"table":"table"};

function Table(data) {
	return (`
		<table class="${style$6.table}">
			${data}
		</table>
	`);
}

function format(section) {
	switch (section.type) {
		case 'blockquote': return Blockquote(section.html);
		case 'heading': return Heading({ level: section.level, text: section.text });
		case 'image': return Image({ src: section.src, alt: section.alt });
		case 'table': return Table(section.html);
		default: return Paragraph(section.html);
	}
}

function Section(section) {
	return `${format(section)}`;
}

var style$5 = {"body":"body"};

function Body(sections) {
	return (`
		<div class="${style$5.body}">
			${sections.map(Section).join('')}
		</div>
	`);
}

var style$4 = {"tag":"tag"};

function Tag(tag) {
	return (`
		<li class="${style$4.tag}">
			${tag.tag}
		</li>
	`);
}

var style$3 = {"tags":"tags"};

function Tags(data) {
	return (`
		<ul class=${style$3.tags}>
			${data.map(Tag).join('')}
		</ul> 
	`);
}

function Title(text) {
	return Heading({ level: 'h2', text });
}

var style$2 = {"entry":"entry"};

function Entry(entry, index) {
	const { date, title, body, tags } = entry;
	return (`
		<div class="${style$2.entry}">
			${Title(title)}
			${Date$1(date)}
			${Body(body)}
			${Tags(tags)}
		</div>
	`);
}

var style$1 = {"entries":"entries"};

function Entries(entries) {
	return (`
		<main class="${style$1.entries}">
			${entries.map(Entry).join('')}
		</main>
	`);
}

var style = {"footer":"footer"};

/**
 * Footer
 *
 * @export
 * @param {string} data
 * @return {string} VSX
 */
function Footer(data) {
	return (`
		<footer class="${style.footer}">
			<h2 class="${style.heading}">${data}</h2>
		</footer>
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
		${Footer(`© Andy Willis ${new Date().getFullYear()}`)}
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
				src: "https://www.parkes.atnf.csiro.au/news_events/apollo11/images/nasa_technicians.jpg",
				alt: "Parkes Operations Team 1969 512x425"
			}
		],
		cdata: "<p>Just finished watching <a href=\"https://en.wikipedia.org/wiki/The_Dish\">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was \"based on\" the actual events the film-makers used fictional characters.</p>\n<p>But I managed to <a href=\"https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html\">unearth this brilliant photo of the actual operations team</a>. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front).</p>\n<p><img src=\"https://www.parkes.atnf.csiro.au/news_events/apollo11/images/nasa_technicians.jpg\" alt=\"Parkes Operations Team 1969 512x425\"></p>"
	},
	{
		id: 2,
		title: "Ramsgate Sands",
		date: "Tuesday, 18 December 2018",
		tags: [
			{
				id: 0,
				tag: "ramsgatesands"
			},
			{
				id: 1,
				tag: "sunset"
			}
		],
		link: "ramsgate-sands-1",
		body: [
			{
				id: 0,
				type: "para",
				html: "This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here."
			},
			{
				id: 2,
				type: "image",
				src: "https://farm5.staticflickr.com/4911/31469292557_c51423babb.jpg",
				alt: "Ramsgate Sands 800x449"
			}
		],
		cdata: "<p>This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.</p>\n<p><img src=\"https://farm5.staticflickr.com/4911/31469292557_c51423babb.jpg\" alt=\"Ramsgate Sands 800x449\"></p>"
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
				src: "https://farm2.staticflickr.com/1953/30710154627_8a80c81bfe.jpg",
				alt: "Sandwich Bay 800x449"
			},
			{
				id: 3,
				type: "image",
				src: "https://farm2.staticflickr.com/1975/45651025001_56a69daaf2.jpg",
				alt: "Sandwich Bay 800x449"
			}
		],
		cdata: "<p>Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun.\"</p>\n<p><img src=\"https://farm2.staticflickr.com/1953/30710154627_8a80c81bfe.jpg\" alt=\"Sandwich Bay 800x449\">\n<img src=\"https://farm2.staticflickr.com/1975/45651025001_56a69daaf2.jpg\" alt=\"Sandwich Bay 800x449\"></p>"
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
				src: "https://farm5.staticflickr.com/4497/36861332483_823053a587.jpg",
				alt: "Dungeness beach 800x449"
			},
			{
				id: 2,
				type: "image",
				src: "https://farm5.staticflickr.com/4479/37530502011_35f391476d.jpg",
				alt: "Ship high on the beach 480x800"
			}
		],
		cdata: "<p><img src=\"https://farm5.staticflickr.com/4497/36861332483_823053a587.jpg\" alt=\"Dungeness beach 800x449\">\n<img src=\"https://farm5.staticflickr.com/4479/37530502011_35f391476d.jpg\" alt=\"Ship high on the beach 480x800\"></p>"
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
				id: 0,
				type: "para",
				html: "\"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href=\"http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii\">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>\" - Wayne Levin"
			},
			{
				id: 2,
				type: "image",
				src: "https://farm5.staticflickr.com/4372/35782338684_6e03d00bc6.jpg",
				alt: "Pretty school of fish 535x800"
			}
		],
		cdata: "<p>\"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href=\"http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii\">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>\" - Wayne Levin</p>\n<p><img src=\"https://farm5.staticflickr.com/4372/35782338684_6e03d00bc6.jpg\" alt=\"Pretty school of fish 535x800\"></p>"
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
				src: "https://farm5.staticflickr.com/4291/36160259971_b9bdc0331a.jpg",
				alt: "Pond on the East side of Wimbledon Common 800x449"
			}
		],
		cdata: "<p>This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.</p>\n<p><img src=\"https://farm5.staticflickr.com/4291/36160259971_b9bdc0331a.jpg\" alt=\"Pond on the East side of Wimbledon Common 800x449\"></p>"
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
				txt: "Process breakdown"
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
				html: "A walk from Embankment, up The Mall to Buckingham Palace, along <a href=\"https://c1.staticflickr.com/5/4194/33905597993_40dcd32263.jpg\">Green Park</a> up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and out on to the road via <a href=\"https://c1.staticflickr.com/5/4185/34330714870_ae972fe467.jpg\">the church</a>, finally heading down to Earl's Court."
			},
			{
				id: 2,
				type: "image",
				src: "https://c1.staticflickr.com/5/4175/34335985270_811e152740.jpg",
				alt: "Map of the walk from Embankment to Earl's Court 800x384"
			}
		],
		cdata: "<p>A walk from Embankment, up The Mall to Buckingham Palace, along <a href=\"https://c1.staticflickr.com/5/4194/33905597993_40dcd32263.jpg\">Green Park</a> up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and out on to the road via <a href=\"https://c1.staticflickr.com/5/4185/34330714870_ae972fe467.jpg\">the church</a>, finally heading down to Earl's Court.</p>\n<p><img src=\"https://c1.staticflickr.com/5/4175/34335985270_811e152740.jpg\" alt=\"Map of the walk from Embankment to Earl's Court 800x384\"></p>"
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
				src: "https://c1.staticflickr.com/1/602/31912173126_bbdfc7aee1.jpg",
				alt: "Photo of the North Sea from the coast near Broadstairs 800x449"
			},
			{
				id: 3,
				type: "para",
				html: "If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel."
			},
			{
				id: 5,
				type: "image",
				src: "https://c1.staticflickr.com/1/568/31912171456_8cbdda4cd8.jpg",
				alt: "Photo of the North Sea from the coast near Broadstairs 800x450"
			}
		],
		cdata: "<p>It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.</p>\n<p><img src=\"https://c1.staticflickr.com/1/602/31912173126_bbdfc7aee1.jpg\" alt=\"Photo of the North Sea from the coast near Broadstairs 800x449\"></p>\n<p>If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.</p>\n<p><img src=\"https://c1.staticflickr.com/1/568/31912171456_8cbdda4cd8.jpg\" alt=\"Photo of the North Sea from the coast near Broadstairs 800x450\"></p>"
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
				src: "https://c1.staticflickr.com/1/329/31893590755_8a00661ac1.jpg",
				alt: "The sun's rays shine through the foliage of a tree on the Common 800x449"
			}
		],
		cdata: "<p><img src=\"https://c1.staticflickr.com/1/329/31893590755_8a00661ac1.jpg\" alt=\"The sun's rays shine through the foliage of a tree on the Common 800x449\"></p>"
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
				src: "https://c1.staticflickr.com/1/460/19731108126_c55eec191a.jpg",
				alt: "The beach North of Montevideo, Uruguay 800x449"
			}
		],
		cdata: "<p><img src=\"https://c1.staticflickr.com/1/460/19731108126_c55eec191a.jpg\" alt=\"The beach North of Montevideo, Uruguay 800x449\"></p>"
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
				src: "https://farm5.staticflickr.com/4366/35888008014_d2941d2375.jpg",
				alt: "Black Hole spotmap 532x800"
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
		cdata: "<p>This is one of the many images rendered by my <a href=\"https://github.com/andywillis/spotmaps\">spotmaps</a> application.</p>\n<p>From the original site:</p>\n<blockquote>\n<p>Spotmaps, based on Brendan Dawes' <a href=\"http://brendandawes.com/projects/cinemaredux\">Cinema Redux</a>, is an on-going project to map the colour narratives of different films.</p>\n</blockquote>\n<blockquote>\n<p>Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames.</p>\n</blockquote>\n<blockquote>\n<p>Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.</p>\n</blockquote>\n<blockquote>\n<p>A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.</p>\n</blockquote>\n<p><img src=\"https://farm5.staticflickr.com/4366/35888008014_d2941d2375.jpg\" alt=\"Black Hole spotmap 532x800\"></p>\n<p>More images can be found <a href=\"https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787\">here on Flickr</a>.</p>\n<p>There are also a couple of online articles about the spotmaps website on <a href=\"http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels\">FastCoDesign</a>, and <a href=\"http://gizmodo.com/5972740/the-color-of-movies-visualized\">Gizmodo</a>.</p>"
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
				src: "https://farm1.staticflickr.com/35/71621166_34f71281e7.jpg",
				alt: "Nan in an operating theatre (black and white) 800x474"
			}
		],
		cdata: "<p>Nan is on the right.</p>\n<p><img src=\"https://farm1.staticflickr.com/35/71621166_34f71281e7.jpg\" alt=\"Nan in an operating theatre (black and white) 800x474\"></p>"
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
				src: "https://farm1.staticflickr.com/20/72584528_bb9fe13cde.jpg",
				alt: "My great-grandfather, George 500x431"
			}
		],
		cdata: "<p>Organised the first Kent miner's strike.</p>\n<p><img src=\"https://farm1.staticflickr.com/20/72584528_bb9fe13cde.jpg\" alt=\"My great-grandfather, George 500x431\"></p>"
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
				src: "https://farm1.staticflickr.com/40/90764612_de3f3bef39.jpg",
				alt: "Massive papier-mache cow on the roof of Fortress Studios 569x800"
			}
		],
		cdata: "<p><img src=\"https://farm1.staticflickr.com/40/90764612_de3f3bef39.jpg\" alt=\"Massive papier-mache cow on the roof of Fortress Studios 569x800\"></p>"
	}
];
var links = [
	"parkes-operation-center-apollo-11-0",
	"ramsgate-sands-1",
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
	"undefined": 52
};
var data = {
	entries: entries,
	links: links,
	tags: tags
};

var main_node = Journal(data);

export { main_node as default };
