(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const l="h1",c="h2",p="h3",m={h1:l,h2:c,h3:p};function i({level:t,text:o}){return`
		<${t} class="${m[t]}">
			${o}
		</${t}>
	`}const g="header",f="nav",u={header:g,nav:f};function y(){return`
		<header class="${u.header}">
			${i({level:"h1",text:"Journal"})}
		</header>
	`}function b(t){return`${i({level:"h3",text:t})}`}const w="blockquote",k={blockquote:w};function v(t){return`
		<p class=${k.blockquote}>
			${t}
		</p>
	`}const x="imageContainer",S="image",T="fadeIn",d={imageContainer:x,image:S,fadeIn:T};function I({src:t,alt:o}){return`
		<div class="${d.imageContainer}">
			<img
				class="${d.image}"
				src="${t}"
				alt="${o}"
			>
		</div>
	`}const j="paragraph",$={paragraph:j};function _(t){return`
		<p class="${$.paragraph}">
			${t}
		</p>
	`}const P="table",B={table:P};function R(t){return`
		<table class="${B.table}">
			${t}
		</table>
	`}function C(t){switch(t.type){case"blockquote":return v(t.html);case"heading":return i({level:t.level,text:t.text});case"image":return I({src:t.src,alt:t.alt});case"table":return R(t.html);default:return _(t.html)}}function A(t){return`${C(t)}`}const D="body",q={body:D};function M(t){return`
		<div class="${q.body}">
			${t.map(A).join("")}
		</div>
	`}const z="tag",N={tag:z};function E(t){return`
		<li class="${N.tag}">
			${t.tag}
		</li>
	`}const O="tags",W={tags:O};function F(t){return`
		<ul class=${W.tags}>
			${t.map(E).join("")}
		</ul> 
	`}function L(t){return i({level:"h2",text:t})}const G="entry",J={entry:G};function H(t,o){const{date:s,title:n,body:e,tags:a}=t;return`
		<div class="${J.entry}">
			${L(n)}
			${b(s)}
			${M(e)}
			${F(a)}
		</div>
	`}const K="entries",U={entries:K};function V(t){return`
		<main class="${U.entries}">
			${t.map(H).join("")}
		</main>
	`}const Y="footer",h={footer:Y};function Q(t){return`
		<footer class="${h.footer}">
			<h2 class="${h.heading}">${t}</h2>
		</footer>
	`}function X(t){return`
		${y()}
		${V(t.entries)}
		${Q(`© Andy Willis ${new Date().getFullYear()}`)}
	`}const Z=[{id:1,title:"Parkes Operation Center (Apollo 11)",date:"Tuesday, 26 July 2022",tags:[{id:0,tag:"thedish"},{id:1,tag:"parkes"},{id:2,tag:"apollo11"}],link:"parkes-operation-center-apollo-11-0",body:[{id:0,type:"para",html:'Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.'},{id:1,type:"para",html:'But I managed to <a href="https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html">unearth this brilliant photo of the actual operations team</a>. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front).'},{id:3,type:"image",src:"https://www.parkes.atnf.csiro.au/news_events/apollo11/images/nasa_technicians.jpg",alt:"Parkes Operations Team 1969 512x425"}],cdata:`<p>Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.</p>
<p>But I managed to <a href="https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html">unearth this brilliant photo of the actual operations team</a>. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front).</p>
<p><img src="https://www.parkes.atnf.csiro.au/news_events/apollo11/images/nasa_technicians.jpg" alt="Parkes Operations Team 1969 512x425"></p>`},{id:2,title:"Ramsgate Sands",date:"Tuesday, 18 December 2018",tags:[{id:0,tag:"ramsgatesands"},{id:1,tag:"sunset"}],link:"ramsgate-sands-1",body:[{id:0,type:"para",html:"This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here."},{id:2,type:"image",src:"https://farm5.staticflickr.com/4911/31469292557_c51423babb.jpg",alt:"Ramsgate Sands 800x449"}],cdata:`<p>This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.</p>
<p><img src="https://farm5.staticflickr.com/4911/31469292557_c51423babb.jpg" alt="Ramsgate Sands 800x449"></p>`},{id:3,title:"Sandwich Bay, Kent",date:"Wednesday, 31 October 2018",tags:[{id:0,tag:"sandwichbay"},{id:1,tag:"beach"},{id:2,tag:"autumn"},{id:3,tag:"lowtide"}],link:"sandwich-bay-kent-2",body:[{id:0,type:"para",html:'Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."'},{id:2,type:"image",src:"https://farm2.staticflickr.com/1953/30710154627_8a80c81bfe.jpg",alt:"Sandwich Bay 800x449"},{id:3,type:"image",src:"https://farm2.staticflickr.com/1975/45651025001_56a69daaf2.jpg",alt:"Sandwich Bay 800x449"}],cdata:`<p>Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."</p>
<p><img src="https://farm2.staticflickr.com/1953/30710154627_8a80c81bfe.jpg" alt="Sandwich Bay 800x449">
<img src="https://farm2.staticflickr.com/1975/45651025001_56a69daaf2.jpg" alt="Sandwich Bay 800x449"></p>`},{id:4,title:"Dungeness",date:"Saturday, 30 September 2017",tags:[{id:0,tag:"dungeness"},{id:1,tag:"beach"},{id:2,tag:"windswept"}],link:"dungeness-3",body:[{id:1,type:"image",src:"https://farm5.staticflickr.com/4497/36861332483_823053a587.jpg",alt:"Dungeness beach 800x449"},{id:2,type:"image",src:"https://farm5.staticflickr.com/4479/37530502011_35f391476d.jpg",alt:"Ship high on the beach 480x800"}],cdata:`<p><img src="https://farm5.staticflickr.com/4497/36861332483_823053a587.jpg" alt="Dungeness beach 800x449">
<img src="https://farm5.staticflickr.com/4479/37530502011_35f391476d.jpg" alt="Ship high on the beach 480x800"></p>`},{id:5,title:"Flickr images for responsive sites",date:"Monday, 21 August 2017",tags:[{id:0,tag:"images"},{id:1,tag:"responsive"},{id:2,tag:"flickr"}],link:"flickr-images-for-responsive-sites-4",body:[{id:0,type:"para",html:"Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr."},{id:1,type:"para",html:"When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>."},{id:2,type:"para",html:"For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site."},{id:3,type:"table",html:`
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
</table>`},{id:6,title:"Akule",date:"Tuesday, 15 August 2017",tags:[{id:0,tag:"ocean"},{id:1,tag:"photography"},{id:2,tag:"underwater"},{id:3,tag:"hawaii"}],link:"akule-5",body:[{id:0,type:"para",html:'"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href="http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>" - Wayne Levin'},{id:2,type:"image",src:"https://farm5.staticflickr.com/4372/35782338684_6e03d00bc6.jpg",alt:"Pretty school of fish 535x800"}],cdata:`<p>"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href="http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>" - Wayne Levin</p>
<p><img src="https://farm5.staticflickr.com/4372/35782338684_6e03d00bc6.jpg" alt="Pretty school of fish 535x800"></p>`},{id:7,title:"Wimbledon Common",date:"Monday, 31 July 2017",tags:[{id:0,tag:"wimbledoncommon"},{id:1,tag:"pond"},{id:2,tag:"samshepard"}],link:"wimbledon-common-6",body:[{id:0,type:"para",html:"This is the pond I was lazing by when I heard the sad news that Sam Shepard had died."},{id:2,type:"image",src:"https://farm5.staticflickr.com/4291/36160259971_b9bdc0331a.jpg",alt:"Pond on the East side of Wimbledon Common 800x449"}],cdata:`<p>This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.</p>
<p><img src="https://farm5.staticflickr.com/4291/36160259971_b9bdc0331a.jpg" alt="Pond on the East side of Wimbledon Common 800x449"></p>`},{id:8,title:"This site",date:"Saturday, 24 June 2017",tags:[{id:0,tag:"express"},{id:1,tag:"react"},{id:2,tag:"reactrouter"},{id:3,tag:"markdown"},{id:4,tag:"journal"}],link:"this-site-7",body:[{id:0,type:"para",html:'This site is <a href="https://github.com/andywillis/uws">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.'},{id:1,type:"para",html:"In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about."},{id:2,type:"h3",txt:"Process breakdown"},{id:3,type:"para",html:"All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account."},{id:4,type:"para",html:"I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data."},{id:5,type:"para",html:"Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface."},{id:6,type:"para",html:"This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site."}],cdata:`<p>This site is <a href="https://github.com/andywillis/uws">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.</p>
<p>In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about.</p>
<h3>Process breakdown</h3>
<p>All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account.</p>
<p>I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data.</p>
<p>Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface.</p>
<p>This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site.</p>`},{id:9,title:"A Tuesday Wander",date:"Tuesday, 16 May 2017",tags:[{id:0,tag:"kensingtonchurch"},{id:1,tag:"greenpark"},{id:2,tag:"london"},{id:3,tag:"hydepark"}],link:"a-tuesday-wander-8",body:[{id:0,type:"para",html:`A walk from Embankment, up The Mall to Buckingham Palace, along <a href="https://c1.staticflickr.com/5/4194/33905597993_40dcd32263.jpg">Green Park</a> up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and out on to the road via <a href="https://c1.staticflickr.com/5/4185/34330714870_ae972fe467.jpg">the church</a>, finally heading down to Earl's Court.`},{id:2,type:"image",src:"https://c1.staticflickr.com/5/4175/34335985270_811e152740.jpg",alt:"Map of the walk from Embankment to Earl's Court 800x384"}],cdata:`<p>A walk from Embankment, up The Mall to Buckingham Palace, along <a href="https://c1.staticflickr.com/5/4194/33905597993_40dcd32263.jpg">Green Park</a> up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and out on to the road via <a href="https://c1.staticflickr.com/5/4185/34330714870_ae972fe467.jpg">the church</a>, finally heading down to Earl's Court.</p>
<p><img src="https://c1.staticflickr.com/5/4175/34335985270_811e152740.jpg" alt="Map of the walk from Embankment to Earl's Court 800x384"></p>`},{id:10,title:"Broadstairs",date:"Wednesday, 28 December 2016",tags:[{id:0,tag:"broadstairs"},{id:1,tag:"northsea"},{id:2,tag:"beach"},{id:3,tag:"ocean"}],link:"broadstairs-9",body:[{id:0,type:"para",html:"It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea."},{id:2,type:"image",src:"https://c1.staticflickr.com/1/602/31912173126_bbdfc7aee1.jpg",alt:"Photo of the North Sea from the coast near Broadstairs 800x449"},{id:3,type:"para",html:"If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel."},{id:5,type:"image",src:"https://c1.staticflickr.com/1/568/31912171456_8cbdda4cd8.jpg",alt:"Photo of the North Sea from the coast near Broadstairs 800x450"}],cdata:`<p>It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.</p>
<p><img src="https://c1.staticflickr.com/1/602/31912173126_bbdfc7aee1.jpg" alt="Photo of the North Sea from the coast near Broadstairs 800x449"></p>
<p>If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.</p>
<p><img src="https://c1.staticflickr.com/1/568/31912171456_8cbdda4cd8.jpg" alt="Photo of the North Sea from the coast near Broadstairs 800x450"></p>`},{id:11,title:"Wimbledon Common",date:"Saturday, 31 December 2016",tags:[{id:0,tag:"wimbledon"},{id:1,tag:"wimbledoncommon"}],link:"wimbledon-common-10",body:[{id:1,type:"image",src:"https://c1.staticflickr.com/1/329/31893590755_8a00661ac1.jpg",alt:"The sun's rays shine through the foliage of a tree on the Common 800x449"}],cdata:`<p><img src="https://c1.staticflickr.com/1/329/31893590755_8a00661ac1.jpg" alt="The sun's rays shine through the foliage of a tree on the Common 800x449"></p>`},{id:12,title:"Montevideo, Uruguay",date:"Thursday, July 16 2015",tags:[{id:0,tag:"uruguay"},{id:1,tag:"beach"},{id:2,tag:"ocean"}],link:"montevideo-uruguay-11",body:[{id:1,type:"image",src:"https://c1.staticflickr.com/1/460/19731108126_c55eec191a.jpg",alt:"The beach North of Montevideo, Uruguay 800x449"}],cdata:'<p><img src="https://c1.staticflickr.com/1/460/19731108126_c55eec191a.jpg" alt="The beach North of Montevideo, Uruguay 800x449"></p>'},{id:13,title:"Disney's The Black Hole",date:"Tuesday, 3 April 2012",tags:[{id:0,tag:"theblackhole"},{id:1,tag:"spotmaps"}],link:"disneys-the-black-hole-12",body:[{id:0,type:"para",html:'This is one of the many images rendered by my <a href="https://github.com/andywillis/spotmaps">spotmaps</a> application.'},{id:1,type:"para",html:"From the original site:"},{id:3,type:"blockquote",html:`Spotmaps, based on Brendan Dawes' <a href="http://brendandawes.com/projects/cinemaredux">Cinema Redux</a>, is an on-going project to map the colour narratives of different films.`},{id:5,type:"blockquote",html:"Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames."},{id:7,type:"blockquote",html:"Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film."},{id:9,type:"blockquote",html:"A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap."},{id:11,type:"image",src:"https://farm5.staticflickr.com/4366/35888008014_d2941d2375.jpg",alt:"Black Hole spotmap 532x800"},{id:12,type:"para",html:'More images can be found <a href="https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787">here on Flickr</a>.'},{id:13,type:"para",html:'There are also a couple of online articles about the spotmaps website on <a href="http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels">FastCoDesign</a>, and <a href="http://gizmodo.com/5972740/the-color-of-movies-visualized">Gizmodo</a>.'}],cdata:`<p>This is one of the many images rendered by my <a href="https://github.com/andywillis/spotmaps">spotmaps</a> application.</p>
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
<p><img src="https://farm5.staticflickr.com/4366/35888008014_d2941d2375.jpg" alt="Black Hole spotmap 532x800"></p>
<p>More images can be found <a href="https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787">here on Flickr</a>.</p>
<p>There are also a couple of online articles about the spotmaps website on <a href="http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels">FastCoDesign</a>, and <a href="http://gizmodo.com/5972740/the-color-of-movies-visualized">Gizmodo</a>.</p>`},{id:14,title:"Nan",date:"Sunday, 1 January 2006",tags:[{id:0,tag:"nan"},{id:1,tag:"war"},{id:2,tag:"hospital"}],link:"nan-13",body:[{id:0,type:"para",html:"Nan is on the right."},{id:2,type:"image",src:"https://farm1.staticflickr.com/35/71621166_34f71281e7.jpg",alt:"Nan in an operating theatre (black and white) 800x474"}],cdata:`<p>Nan is on the right.</p>
<p><img src="https://farm1.staticflickr.com/35/71621166_34f71281e7.jpg" alt="Nan in an operating theatre (black and white) 800x474"></p>`},{id:15,title:"My Great Grandad, George W. Smith.",date:"Sunday, 1 January 2006",tags:[{id:0,tag:"greatgranddad"},{id:1,tag:"miner"},{id:2,tag:"kent"},{id:3,tag:"dover"}],link:"my-great-grandad-george-w-smith-14",body:[{id:0,type:"para",html:"Organised the first Kent miner's strike."},{id:2,type:"image",src:"https://farm1.staticflickr.com/20/72584528_bb9fe13cde.jpg",alt:"My great-grandfather, George 500x431"}],cdata:`<p>Organised the first Kent miner's strike.</p>
<p><img src="https://farm1.staticflickr.com/20/72584528_bb9fe13cde.jpg" alt="My great-grandfather, George 500x431"></p>`},{id:16,title:"Dirty Cow",date:"Sunday, 1 January 2000",tags:[{id:0,tag:"cow"},{id:1,tag:"dirtycow"},{id:2,tag:"newyear"}],link:"dirty-cow-15",body:[{id:1,type:"image",src:"https://farm1.staticflickr.com/40/90764612_de3f3bef39.jpg",alt:"Massive papier-mache cow on the roof of Fortress Studios 569x800"}],cdata:'<p><img src="https://farm1.staticflickr.com/40/90764612_de3f3bef39.jpg" alt="Massive papier-mache cow on the roof of Fortress Studios 569x800"></p>'}],tt=["parkes-operation-center-apollo-11-0","ramsgate-sands-1","sandwich-bay-kent-2","dungeness-3","flickr-images-for-responsive-sites-4","akule-5","wimbledon-common-6","this-site-7","a-tuesday-wander-8","broadstairs-9","wimbledon-common-10","montevideo-uruguay-11","disneys-the-black-hole-12","nan-13","my-great-grandad-george-w-smith-14","dirty-cow-15"],et={undefined:52},at={entries:Z,links:tt,tags:et},ot=X(at);document.body.innerHTML=ot;
