(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const c="_heading_gc0n7_1",m="_h1_gc0n7_6 _heading_gc0n7_1",p="_h2_gc0n7_13 _heading_gc0n7_1",g="_h3_gc0n7_22 _heading_gc0n7_1",u="_date_gc0n7_34 _h3_gc0n7_22 _heading_gc0n7_1",f={heading:c,h1:m,h2:p,h3:g,date:u};function r(e){const{link:a,level:s,type:o=e.level,text:t}=e;return`
		<${s}
			class="${f[o]}"
			${a?`id="${a}"`:""}
		>${t}
		</${s}>
	`}const y="_header_1lity_1",w="_nav_1lity_14",b={header:y,nav:w};function k(){return`
		<header class="${b.header}">
			${r({level:"h1",type:"h1",text:"Andy Willis"})}
		</header>
	`}function v(e){return`${r({level:"h3",type:"date",text:e})}`}const _="_blockquote_15qzr_1",S={blockquote:_};function x(e){return`
		<p class=${S.blockquote}>
			${e}
		</p>
	`}const T="_imageContainer_12gzo_1",I="_image_12gzo_1",$="_fadeIn_12gzo_1",d={imageContainer:T,image:I,fadeIn:$};function P({src:e,alt:a}){return`
		<div class="${d.imageContainer}">
			<img
				class="${d.image}"
				width="800px"
				height="500px"
				src="${e}"
				alt="${a}"
			>
		</div>
	`}const C="_paragraph_1g4xb_1",B={paragraph:C};function R(e){return`
		<p class="${B.paragraph}">
			${e}
		</p>
	`}const q="_table_hsc2o_5",z={table:q};function A(e){return`
		<table class="${z.table}">
			${e}
		</table>
	`}function D(e){switch(e.type){case"h3":return r({level:"h3",type:"h3",text:e.text});case"blockquote":return x(e.html);case"image":return P({src:e.src,alt:e.alt});case"table":return A(e.html);default:return R(e.html)}}function M(e){return`${D(e)}`}const N="_content_n5zvh_1",E={content:N};function O(e){return`
		<div class="${E.content}">
			${e.map(M).join("")}
		</div>
	`}const W="_tag_1w0n0_1",L={tag:W};function j(e,a,s){return`
		<li class="${L.tag}">
			${e.tag}${a<s.length-1?",":""}
		</li>
	`}const F="_tagContainer_m1r7z_1",G="_tags_m1r7z_5",h={tagContainer:F,tags:G};function H(e){return`
		<section class=${h.tagContainer}>
			${r({level:"h3",type:"h3",text:"Tags"})}
			<ul class="${h.tags}">
				${e.map(j).join("")}
			</ul>
		</section>
	`}const J="_link_yjshi_1",K={link:J};function U(e,a){return`
		<a href="#${a}" class="${K.link}">
			${r({link:a,level:"h2",type:"h2",text:e})}
		</a>
	`}const V="_header_v0fdh_1",Q="_entry_v0fdh_7",l={header:V,entry:Q};function X(e,a){const{date:s,title:o,link:t,body:n,tags:i}=e;return`
		<section class="${l.entry}" data-type="entry">
			<header class="${l.header}">
				${U(o,t)}
				${v(s)}
			</header>
			${O(n)}
			${H(i)}
		</section>
	`}const Y="_entries_xuagv_1",Z="_entry_xuagv_14",ee={entries:Y,entry:Z};function te(e){return`
		<main class="${ee.entries}">
			${e.map(X).join("")}
		</main>
	`}function ae(e){return`
		${k()}
		${te(e.entries)}
	`}const ne=[{id:1,title:"Parkes Operation Center (Apollo 11)",date:"Tuesday, 26 July 2022",tags:[{id:0,tag:"thedish"},{id:1,tag:"parkes"},{id:2,tag:"apollo11"}],link:"parkes-operation-center-apollo-11-0",body:[{id:0,type:"para",html:'Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.'},{id:1,type:"para",html:'But I managed to <a href="https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html">unearth this brilliant photo of the actual operations team</a>. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front).'},{id:3,type:"image",src:"/assets/images/parkes.webp",alt:"Parkes Operations Team 1969"}],cdata:`<p>Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.</p>
<p>But I managed to <a href="https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html">unearth this brilliant photo of the actual operations team</a>. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front).</p>
<p><img src="/assets/images/parkes.webp" alt="Parkes Operations Team 1969"></p>`},{id:2,title:"Towards Sandwich Bay",date:"Tuesday, 18 December 2018",tags:[{id:0,tag:"sandwichbay"},{id:1,tag:"ramsgate"},{id:2,tag:"sunset"}],link:"towards-sandwich-bay-1",body:[{id:0,type:"para",html:"This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here."},{id:2,type:"image",src:"/assets/images/towardssandwichbay.webp",alt:"Ramsgate Sands"}],cdata:`<p>This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.</p>
<p><img src="/assets/images/towardssandwichbay.webp" alt="Ramsgate Sands"></p>`},{id:3,title:"Sandwich Bay, Kent",date:"Wednesday, 31 October 2018",tags:[{id:0,tag:"sandwichbay"},{id:1,tag:"beach"},{id:2,tag:"autumn"},{id:3,tag:"lowtide"}],link:"sandwich-bay-kent-2",body:[{id:0,type:"para",html:'Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."'},{id:2,type:"image",src:"/assets/images/sandwichbay1.webp",alt:"Sandwich Bay"},{id:3,type:"image",src:"/assets/images/sandwichbay2.webp",alt:"Sandwich Bay"}],cdata:`<p>Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."</p>
<p><img src="/assets/images/sandwichbay1.webp" alt="Sandwich Bay">
<img src="/assets/images/sandwichbay2.webp" alt="Sandwich Bay"></p>`},{id:4,title:"Dungeness",date:"Saturday, 30 September 2017",tags:[{id:0,tag:"dungeness"},{id:1,tag:"beach"},{id:2,tag:"windswept"}],link:"dungeness-3",body:[{id:1,type:"image",src:"/assets/images/dungeness1.webp",alt:"Dungeness beach"},{id:2,type:"image",src:"/assets/images/dungeness2.webp",alt:"Ship high on the beach"}],cdata:`<p><img src="/assets/images/dungeness1.webp" alt="Dungeness beach">
<img src="/assets/images/dungeness2.webp" alt="Ship high on the beach"></p>`},{id:5,title:"Flickr images for responsive sites",date:"Monday, 21 August 2017",tags:[{id:0,tag:"images"},{id:1,tag:"responsive"},{id:2,tag:"flickr"}],link:"flickr-images-for-responsive-sites-4",body:[{id:0,type:"para",html:"Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr."},{id:1,type:"para",html:"When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>."},{id:2,type:"para",html:"For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site."},{id:3,type:"table",html:`
<thead>
<tr>
<th>Type</th>
<th>Dimensions</th>
<th>ID</th>
</tr>
</thead>
<tbody>
<tr>
<td>Square</td>
<td>75x75</td>
<td>s</td>
</tr>
<tr>
<td>Thumbnail</td>
<td>100x56</td>
<td>t</td>
</tr>
<tr>
<td>Square</td>
<td>150x150</td>
<td>q</td>
</tr>
<tr>
<td>Small</td>
<td>240x135</td>
<td>m</td>
</tr>
<tr>
<td>Small*</td>
<td>320x180</td>
<td>n</td>
</tr>
<tr>
<td>Medium*</td>
<td>500x281</td>
<td>n/a</td>
</tr>
<tr>
<td>Medium</td>
<td>640x359</td>
<td>z</td>
</tr>
<tr>
<td>Medium*</td>
<td>800x449</td>
<td>c</td>
</tr>
<tr>
<td>Large</td>
<td>1024x575</td>
<td>b</td>
</tr>
<tr>
<td>Large</td>
<td>1600x899</td>
<td>h</td>
</tr>
<tr>
<td>Large</td>
<td>2048x1150</td>
<td>k</td>
</tr>
<tr>
<td>Original</td>
<td>2592x1456</td>
<td>o</td>
</tr>
</tbody>
`}],cdata:`<p>Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr.</p>
<p>When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>.</p>
<p>For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site.</p>
<table>
<thead>
<tr>
<th>Type</th>
<th>Dimensions</th>
<th>ID</th>
</tr>
</thead>
<tbody>
<tr>
<td>Square</td>
<td>75x75</td>
<td>s</td>
</tr>
<tr>
<td>Thumbnail</td>
<td>100x56</td>
<td>t</td>
</tr>
<tr>
<td>Square</td>
<td>150x150</td>
<td>q</td>
</tr>
<tr>
<td>Small</td>
<td>240x135</td>
<td>m</td>
</tr>
<tr>
<td>Small*</td>
<td>320x180</td>
<td>n</td>
</tr>
<tr>
<td>Medium*</td>
<td>500x281</td>
<td>n/a</td>
</tr>
<tr>
<td>Medium</td>
<td>640x359</td>
<td>z</td>
</tr>
<tr>
<td>Medium*</td>
<td>800x449</td>
<td>c</td>
</tr>
<tr>
<td>Large</td>
<td>1024x575</td>
<td>b</td>
</tr>
<tr>
<td>Large</td>
<td>1600x899</td>
<td>h</td>
</tr>
<tr>
<td>Large</td>
<td>2048x1150</td>
<td>k</td>
</tr>
<tr>
<td>Original</td>
<td>2592x1456</td>
<td>o</td>
</tr>
</tbody>
</table>`},{id:6,title:"Akule",date:"Tuesday, 15 August 2017",tags:[{id:0,tag:"ocean"},{id:1,tag:"photography"},{id:2,tag:"underwater"},{id:3,tag:"hawaii"}],link:"akule-5",body:[{id:1,type:"blockquote",html:'"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href="http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>" - Wayne Levin'},{id:3,type:"image",src:"/assets/images/akule.webp",alt:"Pretty school of fish"}],cdata:`<blockquote>
<p>"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href="http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>" - Wayne Levin</p>
</blockquote>
<p><img src="/assets/images/akule.webp" alt="Pretty school of fish"></p>`},{id:7,title:"Wimbledon Common",date:"Monday, 31 July 2017",tags:[{id:0,tag:"wimbledoncommon"},{id:1,tag:"pond"},{id:2,tag:"samshepard"}],link:"wimbledon-common-6",body:[{id:0,type:"para",html:"This is the pond I was lazing by when I heard the sad news that Sam Shepard had died."},{id:2,type:"image",src:"/assets/images/shepard.webp",alt:"Pond on the East side of Wimbledon Common"}],cdata:`<p>This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.</p>
<p><img src="/assets/images/shepard.webp" alt="Pond on the East side of Wimbledon Common"></p>`},{id:8,title:"This site",date:"Saturday, 24 June 2017",tags:[{id:0,tag:"express"},{id:1,tag:"react"},{id:2,tag:"reactrouter"},{id:3,tag:"markdown"},{id:4,tag:"journal"}],link:"this-site-7",body:[{id:0,type:"para",html:'This site is <a href="https://github.com/andywillis/uws">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.'},{id:1,type:"para",html:"In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about."},{id:2,type:"h3",text:"Process breakdown"},{id:3,type:"para",html:"All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account."},{id:4,type:"para",html:"I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data."},{id:5,type:"para",html:"Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface."},{id:6,type:"para",html:"This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site."}],cdata:`<p>This site is <a href="https://github.com/andywillis/uws">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.</p>
<p>In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about.</p>
<h3>Process breakdown</h3>
<p>All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account.</p>
<p>I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data.</p>
<p>Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface.</p>
<p>This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site.</p>`},{id:9,title:"A Tuesday Wander",date:"Tuesday, 16 May 2017",tags:[{id:0,tag:"kensingtonchurch"},{id:1,tag:"greenpark"},{id:2,tag:"london"},{id:3,tag:"hydepark"}],link:"a-tuesday-wander-8",body:[{id:0,type:"para",html:"A walk from Embankment, up The Mall to Buckingham Palace, along Green Park, up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and finally out on to the road and on to Earl's Court."},{id:2,type:"image",src:"/assets/images/wandermap.webp",alt:"Map of the walk from Embankment to Earl's Court"}],cdata:`<p>A walk from Embankment, up The Mall to Buckingham Palace, along Green Park, up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and finally out on to the road and on to Earl's Court.</p>
<p><img src="/assets/images/wandermap.webp" alt="Map of the walk from Embankment to Earl's Court"></p>`},{id:10,title:"Broadstairs",date:"Wednesday, 28 December 2016",tags:[{id:0,tag:"broadstairs"},{id:1,tag:"northsea"},{id:2,tag:"beach"},{id:3,tag:"ocean"}],link:"broadstairs-9",body:[{id:0,type:"para",html:"It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea."},{id:2,type:"image",src:"/assets/images/broadstairs1.webp",alt:"Photo of the North Sea from the coast near Broadstairs"},{id:3,type:"para",html:"If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel."},{id:5,type:"image",src:"/assets/images/broadstairs2.webp",alt:"Photo of the North Sea from the coast near Broadstairs"}],cdata:`<p>It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.</p>
<p><img src="/assets/images/broadstairs1.webp" alt="Photo of the North Sea from the coast near Broadstairs"></p>
<p>If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.</p>
<p><img src="/assets/images/broadstairs2.webp" alt="Photo of the North Sea from the coast near Broadstairs"></p>`},{id:11,title:"Wimbledon Common",date:"Saturday, 31 December 2016",tags:[{id:0,tag:"wimbledon"},{id:1,tag:"wimbledoncommon"}],link:"wimbledon-common-10",body:[{id:1,type:"image",src:"/assets/images/wimbledontree.webp",alt:"The sun's rays shine through the foliage of a tree on the Common"}],cdata:`<p><img src="/assets/images/wimbledontree.webp" alt="The sun's rays shine through the foliage of a tree on the Common"></p>`},{id:12,title:"Montevideo, Uruguay",date:"Thursday, July 16 2015",tags:[{id:0,tag:"uruguay"},{id:1,tag:"beach"},{id:2,tag:"ocean"}],link:"montevideo-uruguay-11",body:[{id:1,type:"image",src:"/assets/images/uruguay.webp",alt:"The beach North of Montevideo, Uruguay"}],cdata:'<p><img src="/assets/images/uruguay.webp" alt="The beach North of Montevideo, Uruguay"></p>'},{id:13,title:"Disney's The Black Hole",date:"Tuesday, 3 April 2012",tags:[{id:0,tag:"theblackhole"},{id:1,tag:"spotmaps"}],link:"disneys-the-black-hole-12",body:[{id:0,type:"para",html:'This is one of the many images rendered by my <a href="https://github.com/andywillis/spotmaps">spotmaps</a> application.'},{id:1,type:"para",html:"From the original site:"},{id:3,type:"blockquote",html:`Spotmaps, based on Brendan Dawes' <a href="http://brendandawes.com/projects/cinemaredux">Cinema Redux</a>, is an on-going project to map the colour narratives of different films.`},{id:5,type:"blockquote",html:"Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames."},{id:7,type:"blockquote",html:"Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film."},{id:9,type:"blockquote",html:"A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap."},{id:11,type:"image",src:"/assets/images/blackhole.webp",alt:"Black Hole spotmap"},{id:12,type:"para",html:'More images can be found <a href="https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787">here on Flickr</a>.'},{id:13,type:"para",html:'There are also a couple of online articles about the spotmaps website on <a href="http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels">FastCoDesign</a>, and <a href="http://gizmodo.com/5972740/the-color-of-movies-visualized">Gizmodo</a>.'}],cdata:`<p>This is one of the many images rendered by my <a href="https://github.com/andywillis/spotmaps">spotmaps</a> application.</p>
<p>From the original site:</p>
<blockquote>
<p>Spotmaps, based on Brendan Dawes' <a href="http://brendandawes.com/projects/cinemaredux">Cinema Redux</a>, is an on-going project to map the colour narratives of different films.</p>
</blockquote>
<blockquote>
<p>Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames.</p>
</blockquote>
<blockquote>
<p>Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.</p>
</blockquote>
<blockquote>
<p>A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.</p>
</blockquote>
<p><img src="/assets/images/blackhole.webp" alt="Black Hole spotmap"></p>
<p>More images can be found <a href="https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787">here on Flickr</a>.</p>
<p>There are also a couple of online articles about the spotmaps website on <a href="http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels">FastCoDesign</a>, and <a href="http://gizmodo.com/5972740/the-color-of-movies-visualized">Gizmodo</a>.</p>`},{id:14,title:"Nan",date:"Sunday, 1 January 2006",tags:[{id:0,tag:"nan"},{id:1,tag:"war"},{id:2,tag:"hospital"}],link:"nan-13",body:[{id:0,type:"para",html:"Nan is on the right."},{id:2,type:"image",src:"/assets/images/nan.webp",alt:"Nan in an operating theatre (black and white)"}],cdata:`<p>Nan is on the right.</p>
<p><img src="/assets/images/nan.webp" alt="Nan in an operating theatre (black and white)"></p>`},{id:15,title:"My Great Grandad, George W. Smith.",date:"Sunday, 1 January 2006",tags:[{id:0,tag:"greatgranddad"},{id:1,tag:"miner"},{id:2,tag:"kent"},{id:3,tag:"dover"}],link:"my-great-grandad-george-w-smith-14",body:[{id:0,type:"para",html:"Organised the first Kent miner's strike."},{id:2,type:"image",src:"/assets/images/george.webp",alt:"My great-grandfather, George"}],cdata:`<p>Organised the first Kent miner's strike.</p>
<p><img src="/assets/images/george.webp" alt="My great-grandfather, George"></p>`},{id:16,title:"Dirty Cow",date:"Sunday, 1 January 2000",tags:[{id:0,tag:"cow"},{id:1,tag:"dirtycow"},{id:2,tag:"newyear"}],link:"dirty-cow-15",body:[{id:1,type:"image",src:"/assets/images/dirtycow.webp",alt:"Massive papier-mache cow on the roof of Fortress Studios"}],cdata:'<p><img src="/assets/images/dirtycow.webp" alt="Massive papier-mache cow on the roof of Fortress Studios"></p>'}],se=["parkes-operation-center-apollo-11-0","towards-sandwich-bay-1","sandwich-bay-kent-2","dungeness-3","flickr-images-for-responsive-sites-4","akule-5","wimbledon-common-6","this-site-7","a-tuesday-wander-8","broadstairs-9","wimbledon-common-10","montevideo-uruguay-11","disneys-the-black-hole-12","nan-13","my-great-grandad-george-w-smith-14","dirty-cow-15"],oe={undefined:53},ie={entries:ne,links:se,tags:oe},re=ae(ie);document.body.innerHTML=re;
//# sourceMappingURL=index.js.map
