var style$8 = {"blockquote":"blockquote_hHp2i"};

function Blockquote(blockquote) {
	return (`
		<p class=${style$8.blockquote}>
			${blockquote}
		</p>
	`);
}

var style$7 = {"heading":"heading_eZIvn","h1":"h1_mnlYR heading_eZIvn","h2":"h2_-gsxg heading_eZIvn","h3":"h3_mxmBn heading_eZIvn","date":"date_D4y8s h3_mxmBn heading_eZIvn"};

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
			class="${style$7[type]}"
			${link ? `id="${link}"` : ''}
		>${text}
		</${level}>
	`);

}

var style$6 = {"imageContainer":"imageContainer_0ew51","image":"image_Mhl-i","fadeIn":"fadeIn_MbchH"};

function Image({ src, alt }) {
	return (`
		<div class="${style$6.imageContainer}">
			<img
				class="${style$6.image}"
				width="800px"
				height="500px"
				src="${src}"
				alt="${alt}"
			>
		</div>
	`);
}

var style$5 = {"paragraph":"paragraph_72Vn7"};

function Paragraph(html) {
	return (`
		<p class="${style$5.paragraph}">
			${html}
		</p>
	`);
}

var style$4 = {"table":"table_tftVB"};

function Table(data) {
	return (`
		<table class="${style$4.table}">
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

var style$3 = {"content":"content_Go-kx"};

function Content(sections) {
	return (`
		<div class="${style$3.content}">
			${sections.map(Section).join('')}
		</div>
	`);
}

var style$2 = {"tag":"tag_j1yjb"};

function Tag(tag, index, arr) {
	return (`
		<li class="${style$2.tag}">
			${tag.tag}${index < arr.length - 1 ? ',' : ''}
		</li>
	`);
}

var style$1 = {"tagContainer":"tagContainer_zYV7K","tags":"tags_m73Yt"};

function Tags(data) {
	return (`
		<section class=${style$1.tagContainer}>
			${Heading({ level: 'h3', type: 'h3', text: 'Tags' })}
			<ul class="${style$1.tags}">
				${data.map(Tag).join('')}
			</ul>
		</section>
	`);
}

var style = {"header":"header_CAcrz","entry":"entry_PTQ1E"};

function Entry(entry, index) {

	const { date, title, link, body, tags } = entry;

	return (`
		<section class="${style.entry}" data-type="entry">
			<header class="${style.header}">
				<a href="#${link}">
					${Heading({ link, level: 'h2', type: 'h2', text: title })}
				</a>
				${Heading({ level: 'h3', type: 'date', text: date })}
			</header>
			${Content(body)}
			${Tags(tags)}
		</section>
	`);

}

var entries = [
	{
		id: 15,
		title: "Parkes Operation Center (Apollo 11)",
		date: "Tuesday, 26 July 2022",
		summary: "Unearthing the true faces of the Parkes Apollo 11 NASA crew",
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
		link: "parkes-operation-center-apollo-11-15",
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
		id: 14,
		title: "Towards Sandwich Bay",
		date: "Tuesday, 18 December 2018",
		summary: "Photo archive",
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
		link: "towards-sandwich-bay-14",
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
		id: 13,
		title: "Sandwich Bay, Kent",
		date: "Wednesday, 31 October 2018",
		summary: "Photo archive",
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
		link: "sandwich-bay-kent-13",
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
		id: 12,
		title: "Dungeness",
		date: "Saturday, 30 September 2017",
		summary: "Photo archive",
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
		link: "dungeness-12",
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
		id: 11,
		title: "Flickr images for responsive sites",
		date: "Monday, 21 August 2017",
		summary: "Flickr responsive images investigation",
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
		link: "flickr-images-for-responsive-sites-11",
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
		id: 10,
		title: "Akule",
		date: "Tuesday, 15 August 2017",
		summary: "Photo archive",
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
		link: "akule-10",
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
		id: 9,
		title: "Wimbledon Common",
		date: "Monday, 31 July 2017",
		summary: "Photo archive",
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
		link: "wimbledon-common-9",
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
		summary: "Details of the changes to the journal",
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
		link: "this-site-8",
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
		id: 7,
		title: "A Tuesday Wander",
		date: "Tuesday, 16 May 2017",
		summary: "Walk archive",
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
		link: "a-tuesday-wander-7",
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
		id: 6,
		title: "Broadstairs",
		date: "Wednesday, 28 December 2016",
		summary: "Photo archive",
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
		link: "broadstairs-6",
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
		id: 5,
		title: "Wimbledon Common",
		date: "Saturday, 31 December 2016",
		summary: "Photo archive",
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
		link: "wimbledon-common-5",
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
		id: 4,
		title: "Montevideo, Uruguay",
		date: "Thursday, July 16 2015",
		summary: "Photo archive",
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
		link: "montevideo-uruguay-4",
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
		id: 3,
		title: "Disney's The Black Hole",
		date: "Tuesday, 3 April 2012",
		summary: "Introduction to my Spotmaps project",
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
		link: "disneys-the-black-hole-3",
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
		id: 2,
		title: "Nan",
		date: "Sunday, 1 January 2006",
		summary: "Photo archive",
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
		link: "nan-2",
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
		id: 1,
		title: "My Great Grandad, George W. Smith.",
		date: "Sunday, 1 January 2006",
		summary: "Photo archive",
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
		link: "my-great-grandad-george-w-smith-1",
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
		id: 0,
		title: "Dirty Cow",
		date: "Sunday, 1 January 2000",
		summary: "Photo archive",
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
		link: "dirty-cow-0",
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
	"parkes-operation-center-apollo-11-15",
	"towards-sandwich-bay-14",
	"sandwich-bay-kent-13",
	"dungeness-12",
	"flickr-images-for-responsive-sites-11",
	"akule-10",
	"wimbledon-common-9",
	"this-site-8",
	"a-tuesday-wander-7",
	"broadstairs-6",
	"wimbledon-common-5",
	"montevideo-uruguay-4",
	"disneys-the-black-hole-3",
	"nan-2",
	"my-great-grandad-george-w-smith-1",
	"dirty-cow-0"
];
var tags = {
	thedish: 1,
	parkes: 1,
	apollo11: 1,
	sandwichbay: 2,
	ramsgate: 1,
	sunset: 1,
	beach: 4,
	autumn: 1,
	lowtide: 1,
	dungeness: 1,
	windswept: 1,
	images: 1,
	responsive: 1,
	flickr: 1,
	ocean: 3,
	photography: 1,
	underwater: 1,
	hawaii: 1,
	wimbledoncommon: 2,
	pond: 1,
	samshepard: 1,
	express: 1,
	react: 1,
	reactrouter: 1,
	markdown: 1,
	journal: 1,
	kensingtonchurch: 1,
	greenpark: 1,
	london: 1,
	hydepark: 1,
	broadstairs: 1,
	northsea: 1,
	wimbledon: 1,
	uruguay: 1,
	theblackhole: 1,
	spotmaps: 1,
	nan: 1,
	war: 1,
	hospital: 1,
	greatgranddad: 1,
	miner: 1,
	kent: 1,
	dover: 1,
	cow: 1,
	dirtycow: 1,
	newyear: 1
};
var data = {
	entries: entries,
	links: links,
	tags: tags
};

function compilePosts() {
	return data.entries.map(entry => {
		return Entry(entry);
	});
}

export { compilePosts as default };
