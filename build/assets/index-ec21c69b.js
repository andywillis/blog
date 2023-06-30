import{c as p}from"./vendor-f67a6b30.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const g="_icon_pyxs2_1",u="_active_pyxs2_10",r={icon:g,active:u};function h(t){return`
    <button
      class="${p(r.icon,t.active&&r.active)}"
      data-type="${t.name}"
      type="button"
    ></button>
  `}const f="_iconStrip_1mqre_1",y={iconStrip:f};function b(t){return`
    <div class="${y.iconStrip}">
      ${t.map(h).join("")}
    </div>
  `}const x=[{name:"tagcloud",active:!0},{name:"email",active:!0},{name:"flickr",active:!0},{name:"rss",active:!1}],w="_header_11y77_3",k="_nav_11y77_13",d={header:w,nav:k};function _(){return`
    <header class="${d.header}">
      <nav class="${d.nav}">
        ${h({name:"home",active:!0})}
        ${b(x)}
        </nav>
    </header>
  `}const v="_date_1fzen_3",$={date:v};function S(t){return`<p class=${$.date}>${t}</p>`}const j="_blockquote_bct3v_5",I={blockquote:j};function T(t){return`
    <p class=${I.blockquote}>
      ${t}
    </p>
  `}const P="_h1_1gmff_3",C="_h2_1gmff_10",B={h1:P,h2:C};function m({level:t,text:n}){return`
    <div class="${B[t]}">
      ${n}
    </div>
  `}const z="_imageContainer_12gzo_1",q="_image_12gzo_1",R="_fadeIn_12gzo_1",l={imageContainer:z,image:q,fadeIn:R};function D({src:t,alt:n}){return`
    <div class="${l.imageContainer}">
      <img
        class="${l.image}"
        src="${t}"
        alt="${n}"
      >
    </div>
  `}const A="_paragraph_12jjm_5",M={paragraph:A};function N(t){return`
    <p class="${M.paragraph}">
      ${t}
    </p>
  `}const O="_table_xrx28_7",E={table:O};function L(t){return`
    <table class="${E.table}">
      ${t}
    </table>
  `}function F(t){switch(t.type){case"blockquote":return T(t.html);case"heading":return m({level:t.level,text:t.text});case"image":return D({src:t.src,alt:t.alt});case"table":return L(t.html);default:return N(t.html)}}function W(t){return`${F(t)}`}const G="_body_1l82z_1",H={body:G};function K(t){return`
    <div class="${H.body}">
      ${t.map(W).join("")}
    </div>
  `}const J="_tag_yzv5t_3",U={tag:J};function V(t){return`
    <li class="${U.tag}">
      ${t.text}
    </li>
  `}const Y="_tags_48fcp_1",Q={tags:Y};function X(t){return`
    <ul class=${Q.tags}>
      ${t.map(V).join("")}
    </ul> 
  `}function Z(t){return m({level:"h1",text:t})}const tt="_entry_2e3fn_1",et={entry:tt};function at(t){const{date:n,title:o,body:i,tags:e}=t;return`
    <div class="${et.entry}">
      ${Z(o)}
      ${S(n)}
      ${K(i)}
      ${X(e)}
    </div>
  `}const nt="_entries_5jri3_1",it={entries:nt};function ot(t){return`
    <main class="${it.entries}">
      ${t.map(at).join("")}
    </main>
  `}const st="_footer_1l705_3",c={footer:st};function rt(t){return`
    <footer class="${c.footer}">
      <h2 class="${c.heading}">${t}</h2>
    </footer>
  `}const dt="_journal_1phc2_1",lt="_fadeIn_1phc2_1",ct={journal:dt,fadeIn:lt};function ht(t){return`
    <div class="${ct.journal}">
      ${_()}
      ${ot(t.entries)}
      ${rt(`© Andy Willis ${new Date().getFullYear()}`)}
    </div>
  `}const mt=[{id:16,title:"Parkes Operation Center (Apollo 11)",date:"Tuesday, 26 July 2022",tags:[{id:0,text:"thedish"},{id:1,text:"parkes"},{id:2,text:"apollo11"}],link:"parkes-operation-center-16",body:[{id:0,type:"para",html:'Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">"The Dish"</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.'},{id:1,type:"para",html:'But I managed to <a href="https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html">unearth this brilliant photo of the actual operations team</a>. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front)'},{id:2,type:"image",src:"https://www.parkes.atnf.csiro.au/news_events/apollo11/images/nasa_technicians.jpg",alt:"Parkes Operations Team 1969 512x425"}]},{id:15,title:"Ramsgate Sands",date:"Tuesday, 18 December 2018",tags:[{id:0,text:"ramsgatesands"},{id:1,text:"sunset"}],link:"ramsgate-sands-15",body:[{id:0,type:"para",html:"This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here."},{id:2,type:"image",src:"https://farm5.staticflickr.com/4911/31469292557_c51423babb.jpg",alt:"Ramsgate Sands 800x449"}]},{id:14,title:"Sandwich Bay, Kent",date:"311018",tags:[{id:0,text:"sandwichbay"},{id:1,text:"beach"},{id:2,text:"autumn"},{id:3,text:"lowtide"}],link:"sandwich-bay-kent-13",body:[{id:0,type:"para",html:"Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."},{id:2,type:"image",src:"https://farm2.staticflickr.com/1953/30710154627_8a80c81bfe.jpg",alt:"Sandwich Bay 800x449"},{id:3,type:"image",src:"https://farm2.staticflickr.com/1975/45651025001_56a69daaf2.jpg",alt:"Sandwich Bay 800x449"}]},{id:13,title:"Dungeness",date:"300917",tags:[{id:0,text:"dungeness"},{id:1,text:"beach"},{id:2,text:"windswept"}],link:"dungeness-12",body:[{id:1,type:"image",src:"https://farm5.staticflickr.com/4497/36861332483_823053a587.jpg",alt:"Dungeness beach 800x449"},{id:2,type:"image",src:"https://farm5.staticflickr.com/4479/37530502011_35f391476d.jpg",alt:"Ship high on the beach 480x800"}]},{id:12,title:"Flickr images for responsive sites",date:"210817",tags:[{id:0,text:"images"},{id:1,text:"responsive"},{id:2,text:"flickr"}],link:"flickr-images-for-responsive-sites-11",body:[{id:0,type:"para",html:"Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr."},{id:1,type:"para",html:"When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>."},{id:2,type:"para",html:"For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site."},{id:3,type:"table",html:`
<thead>
<tr>
<th style="text-align:center">Type</th>
<th style="text-align:center">Dimensions</th>
<th style="text-align:center">ID</th>
</tr>
</thead>
<tparagraphs>
<tr>
<td style="text-align:center">Square</td>
<td style="text-align:center">75x75</td>
<td style="text-align:center">s</td>
</tr>
<tr>
<td style="text-align:center">Thumbnail</td>
<td style="text-align:center">100x56</td>
<td style="text-align:center">t</td>
</tr>
<tr>
<td style="text-align:center">Square</td>
<td style="text-align:center">150x150</td>
<td style="text-align:center">q</td>
</tr>
<tr>
<td style="text-align:center">Small</td>
<td style="text-align:center">240x135</td>
<td style="text-align:center">m</td>
</tr>
<tr>
<td style="text-align:center">Small*</td>
<td style="text-align:center">320x180</td>
<td style="text-align:center">n</td>
</tr>
<tr>
<td style="text-align:center">Medium*</td>
<td style="text-align:center">500x281</td>
<td style="text-align:center">n/a</td>
</tr>
<tr>
<td style="text-align:center">Medium</td>
<td style="text-align:center">640x359</td>
<td style="text-align:center">z</td>
</tr>
<tr>
<td style="text-align:center">Medium*</td>
<td style="text-align:center">800x449</td>
<td style="text-align:center">c</td>
</tr>
<tr>
<td style="text-align:center">Large</td>
<td style="text-align:center">1024x575</td>
<td style="text-align:center">b</td>
</tr>
<tr>
<td style="text-align:center">Large</td>
<td style="text-align:center">1600x899</td>
<td style="text-align:center">h</td>
</tr>
<tr>
<td style="text-align:center">Large</td>
<td style="text-align:center">2048x1150</td>
<td style="text-align:center">k</td>
</tr>
<tr>
<td style="text-align:center">Original</td>
<td style="text-align:center">2592x1456</td>
<td style="text-align:center">o</td>
</tr>
</tparagraphs>
`}]},{id:11,title:"Akule",date:"150817",tags:[{id:0,text:"ocean"},{id:1,text:"photography"},{id:2,text:"underwater"},{id:3,text:"hawaii"}],link:"akule-10",body:[{id:1,type:"blockquote",html:'"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href="http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii/">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>" - Wayne Levin'},{id:3,type:"image",src:"https://farm5.staticflickr.com/4372/35782338684_6e03d00bc6.jpg",alt:"Pretty school of fish 535x800"}]},{id:10,title:"Wimbledon Common",date:"310717",tags:[{id:0,text:"wimbledoncommon"},{id:1,text:"pond"},{id:2,text:"samshepard"}],link:"wimbledon-common-9",body:[{id:0,type:"para",html:"This is the pond I was lazing by when I heard the sad news that Sam Shepard had died."},{id:2,type:"image",src:"https://farm5.staticflickr.com/4291/36160259971_b9bdc0331a.jpg",alt:"Pond on the East side of Wimbledon Common 800x449"}]},{id:9,title:"This site",date:"240617",tags:[{id:0,text:"express"},{id:1,text:"react"},{id:2,text:"reactrouter"},{id:3,text:"markdown"},{id:4,text:"journal"}],link:"this-site-8",body:[{id:0,type:"para",html:'This site is <a href="https://github.com/andywillis/uws">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.'},{id:1,type:"para",html:"In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about."},{id:2,type:"heading",level:"h2",text:"Process breakdown"},{id:3,type:"para",html:"All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account."},{id:4,type:"para",html:"I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data."},{id:5,type:"para",html:"Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface."},{id:6,type:"para",html:"This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site."}]},{id:8,title:"A Tuesday Wander",date:"160517",tags:[{id:0,text:"kensingtonchurch"},{id:1,text:"greenpark"},{id:2,text:"london"},{id:3,text:"hydepark"}],link:"a-tuesday-wander-7",body:[{id:0,type:"para",html:`A walk from Embankment, up The Mall to Buckingham Palace, along <a href="https://c1.staticflickr.com/5/4194/33905597993_40dcd32263.jpg">Green Park</a> up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace <a href="http://www.metafilter.com">Gardens</a>, and out on to the road via <a href="https://c1.staticflickr.com/5/4185/34330714870_ae972fe467.jpg">the church</a>, finally heading down to Earl's Court.`},{id:2,type:"image",src:"https://c1.staticflickr.com/5/4175/34335985270_811e152740.jpg",alt:"Map of the walk from Embankment to Earl's Court 800x384"}]},{id:7,title:"Broadstairs",date:"281216",tags:[{id:0,text:"broadstairs"},{id:1,text:"northsea"},{id:2,text:"beach"},{id:3,text:"ocean"}],link:"broadstairs-6",body:[{id:0,type:"para",html:"It comes as a surprise to many people, even to those who have lived in the area, that the water that plays alongs the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea."},{id:2,type:"image",src:"https://c1.staticflickr.com/1/602/31912173126_bbdfc7aee1.jpg",alt:"Photo of the North Sea from the coast near Broadstairs 800x449"},{id:3,type:"para",html:"If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel."},{id:5,type:"image",src:"https://c1.staticflickr.com/1/568/31912171456_8cbdda4cd8.jpg",alt:"Photo of the North Sea from the coast near Broadstairs 800x450"}]},{id:6,title:"Wimbledon Common",date:"200915",tags:[{id:0,text:"wimbledon"},{id:1,text:"wimbledoncommon"}],link:"wimbledon-common-5",body:[{id:1,type:"image",src:"https://c1.staticflickr.com/1/329/31893590755_8a00661ac1.jpg",alt:"The sun's rays shine through the foliage of a tree on the Common 800x449"}]},{id:5,title:"Montevideo, Uruguay",date:"160715",tags:[{id:0,text:"uruguay"},{id:1,text:"beach"},{id:2,text:"ocean"}],link:"montevideo-uruguay-4",body:[{id:1,type:"image",src:"https://c1.staticflickr.com/1/460/19731108126_c55eec191a.jpg",alt:"The beach North of Montevideo, Uruguay 800x449"}]},{id:4,title:"Disney's The Black Hole",date:"030412",tags:[{id:0,text:"theblackhole"},{id:1,text:"spotmap"}],link:"disneys-the-black-hole-3",body:[{id:0,type:"para",html:'This is one of the many images rendered by my <a href="https://github.com/andywillis/spotmaps">spotmaps</a> <a href="https://github.com/andywillis/spotmap-pipeline">application</a>.'},{id:1,type:"para",html:"From the original site:"},{id:3,type:"blockquote",html:`Spotmaps, based on Brendan Dawes' <a href="http://brendandawes.com/projects/cinemaredux">Cinema Redux</a>, is an on-going project to map the colour narratives of different films.`},{id:4,type:"blockquote",html:"Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames."},{id:5,type:"blockquote",html:"Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film."},{id:6,type:"blockquote",html:"A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap."},{id:8,type:"image",src:"https://farm5.staticflickr.com/4366/35888008014_d2941d2375.jpg",alt:"Black Hole spotmap 532x800"},{id:9,type:"para",html:'More images can be found <a href="https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787/">here on Flickr</a>.'},{id:10,type:"para",html:'There are also a couple of online articles about the spotmaps website on <a href="http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels">FastCoDesign</a>, and <a href="http://gizmodo.com/5972740/the-color-of-movies-visualized">Gizmodo</a>.'}]},{id:3,title:"Nan",date:"010106",tags:[{id:0,text:"nan"},{id:1,text:"war"},{id:2,text:"hospital"}],link:"nan-2",body:[{id:0,type:"para",html:"Nan is on the right."},{id:2,type:"image",src:"https://farm1.staticflickr.com/35/71621166_34f71281e7.jpg",alt:"Nan in an operating theatre (black and white) 800x474"}]},{id:2,title:"My Great Grandad, George W. Smith.",date:"010106",tags:[{id:0,text:"greatgranddad"},{id:1,text:"miner"},{id:2,text:"kent"},{id:3,text:"dover"}],link:"my-great-grandad-george-w-smith-1",body:[{id:0,type:"para",html:"Organised the first Kent miner's strike."},{id:2,type:"image",src:"https://farm1.staticflickr.com/20/72584528_bb9fe13cde.jpg",alt:"My great-grandfather, George 500x431"}]},{id:1,title:"Dirty Cow",date:"010100",tags:[{id:0,text:"cow"},{id:1,text:"dirtycow"},{id:2,text:"2000"},{id:3,text:"newyear"}],link:"dirty-cow-0",body:[{id:1,type:"image",src:"https://farm1.staticflickr.com/40/90764612_de3f3bef39.jpg",alt:"Massive papier-mache cow on the roof of Fortress Studios 569x800"}]}],pt=["ramsgate-sands-14","sandwich-bay-kent-13","dungeness-12","flickr-images-for-responsive-sites-11","akule-10","wimbledon-common-9","this-site-8","a-tuesday-wander-7","broadstairs-6","wimbledon-common-5","montevideo-uruguay-4","disneys-the-black-hole-3","nan-2","my-great-grandad-george-w-smith-1","dirty-cow-0"],gt={2e3:1,ramsgatesands:1,sunset:1,sandwichbay:1,beach:4,autumn:1,lowtide:1,dungeness:1,windswept:1,images:1,responsive:1,flickr:1,ocean:3,photography:1,underwater:1,hawaii:1,wimbledoncommon:2,pond:1,samshepard:1,express:1,react:1,reactrouter:1,markdown:1,journal:1,kensingtonchurch:1,greenpark:1,london:1,hydepark:1,broadstairs:1,northsea:1,wimbledon:1,uruguay:1,theblackhole:1,spotmap:1,nan:1,war:1,hospital:1,greatgranddad:1,miner:1,kent:1,dover:1,cow:1,dirtycow:1,newyear:1},ut={entries:mt,links:pt,tags:gt};document.body.innerHTML=ht(ut);
//# sourceMappingURL=index-ec21c69b.js.map
