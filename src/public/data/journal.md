## CSS Nesting
### Wednesday, 02 August 2023
#### Nesting has landed in Firefox 117

* CSS
* Nesting
* Firefox

From Stephanie Eckles' CSS newsletter:

> CSS Nesting will be in all evergreen browsers as of Firefox 117, landing August 29... the nesting syntax has been relaxed and will eventually not require nested selectors to begin with a symbol, meaning "&" is not necessary before an element selector.

---

## DX vs UX
### Friday, 14 July 2023
#### An experiment in finding a personal balance between DX and UX

* DX
* UX
* React
* Preact
* RenderPipeline

Over the last few weeks I decided to revisit the code and markup for this site to try to address an issue that [a lot of developers are having][addy] this year - whether the last decade of prioritising front-end development tooling and developer experience (DX) has had an inverse effect on user experience (UX), and whether we now just pay lip-serice to accessibility and performance.

In my personal projects I'm generally very frugal when it comes to introducing new libraries into a tech stack. In order to do this I do a _lot_ of experimentation. For example, this site in particular has undergone various iterations over the last few of years with markdown as the only consistent component.

### Initial stage

React, Redux, and an Express server hooked up to Google Drive. The journal markdown was stored on GD which allowed me to access and update it easily from any device.

### Second stage

Preact, Signals, Express, Google Drive. This was really a test of Preact's capabilities, to work out how Signals worked, and to see whether they were a decent alternative to other popular state management libraries. Preact's added value was a significantly reduced bundle size.

### Current stage

Here I wanted to strip back all the technology to the bare minimum and achieve a good balance between DX and UX. I wanted to use the capabilities of component-based design but with a renewed focus on performance and accessibility. In short I wanted a way to design the front end with today's component-centric technology but then be able to export that into plain HTML/CSS to keep performance costs low, and retain good UX and performance.

To keep things minimal:

* I created a JS script to convert the journal markdown to JSON.
* I wrote a component library using template strings. The parsed JSON is imported and passed into the `Journal` component, and the layers of components built from each entry in the data.
* I used CSS modules that I could extract out into a minified core CSS file.
* No client-side JS.
* Images are now hosted locally, and they are converted to `webp` format. 
* A Rollup configuration builds and gzips the developed code and CSS, and a separate JS script minifies the HTML, and merges all the relevant files into one folder ready for deployment.

Total minified HTML/CSS size: 33K.

The next stage will be to use the component library and some templates to create separate entry pages.

[addy]: https://addyosmani.com/blog/software-value/

---

## Parkes Operation Center (Apollo 11)
### Tuesday, 26 July 2022
#### Unearthing the true faces of the Parkes Apollo 11 NASA crew

* TheDish
* Parkes
* Apollo11

Just finished watching [The Dish][wikipedia] - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.

But I managed to [unearth this brilliant photo of the actual operations team][parkes].

Back row left to right: Alfred Stella, George Kropp, William Reytar (back). Seated: Robert Taylor.

![Parkes Operations Team 1969][original-team]

[wikipedia]: https://en.wikipedia.org/wiki/The_Dish
[parkes]: https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html
[original-team]: /assets/images/parkes.webp

---

## Towards Sandwich Bay
### Tuesday, 18 December 2018
#### Photo archive

* SandwichBay
* Ramsgate
* Sunset

This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.

![Ramsgate Sands][sandwichbay]

[sandwichbay]: /assets/images/towardssandwichbay.webp

---

## Sandwich Bay, Kent
### Wednesday, 31 October 2018
#### Photo archive

* SandwichBay
* Beach
* Autumn
* LowTide

Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."

![Sandwich Bay][bay1]
![Sandwich Bay][bay2]

[bay1]: /assets/images/sandwichbay1.webp
[bay2]: /assets/images/sandwichbay2.webp

---

## Dungeness
### Saturday, 30 September 2017
#### Photo archive

* Dungeness
* Beach
* Windswept

![Dungeness beach][beach]
![Ship high on the beach][ship]

[beach]: /assets/images/dungeness1.webp
[ship]: /assets/images/dungeness2.webp

---

## Flickr images for responsive sites
### Monday, 21 August 2017
#### Flickr responsive images investigation

* Images
* Responsive
* Flickr

Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr.

When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: `filename[_sizeId].jpg`.

For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site.

| Type      | Dimensions | ID  |
| ----------|------------|-----|
| Square    | 75x75      | s   |
| Thumbnail | 100x56     | t   |
| Square    | 150x150    | q   |
| Small     | 240x135    | m   |
| Small*    | 320x180    | n   |
| Medium*   | 500x281    | n/a |
| Medium    | 640x359    | z   |
| Medium*   | 800x449    | c   |
| Large     | 1024x575   | b   |
| Large     | 1600x899   | h   |
| Large     | 2048x1150  | k   |
| Original  | 2592x1456  | o   |

---

## Akule
### Tuesday, 15 August 2017
#### Photo archive

* Ocean
* Photography
* Underwater
* Hawaii

> "When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, [I want to make images, not to explain or clarify that world, but to deepen the mystery.][hawaii]" - Wayne Levin

![Pretty school of fish][school]

[hawaii]: http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii
[school]: /assets/images/akule.webp

---

## Wimbledon Common
### Monday, 31 July 2017
#### Photo archive

* WimbledonCommon
* Pond
* SamShepard

This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.

![Pond on the East side of Wimbledon Common][common]

[common]: /assets/images/shepard.webp

---

## This site
### Saturday, 24 June 2017
#### Details of the changes to the journal

* Express
* React
* ReactRouter
* Markdown
* Journal

This site is [an on-going React/Redux project][uws] to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.

In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about.

### Process breakdown

All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account.

I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route `/entries` that React uses to get the data.

Once the site is loaded I use `redux-thunk` to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface.

This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site.

[uws]: https://github.com/andywillis/uws

---

## A Tuesday Wander
### Tuesday, 16 May 2017
#### Walk archive

* KensingtonChurch
* GreenPark
* London
* HydePark

A walk from Embankment, up The Mall to Buckingham Palace, along Green Park, up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and finally out on to the road and on to Earl's Court.

![Map of the walk from Embankment to Earl's Court][walk]

[walk]: /assets/images/wandermap.webp

---

## Broadstairs
### Wednesday, 28 December 2016
#### Photo archive

* Broadstairs
* NorthSea
* Beach
* Ocean

It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.

![Photo of the North Sea from the coast near Broadstairs][north-sea]

If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.

![Photo of the North Sea from the coast near Broadstairs][north-sea2]

[north-sea]: /assets/images/broadstairs1.webp
[north-sea2]: /assets/images/broadstairs2.webp

---

## Wimbledon Common
### Saturday, 31 December 2016
#### Photo archive

* WimbledonCommon

![The sun's rays shine through the foliage of a tree on the Common][tree]

[tree]: /assets/images/wimbledontree.webp

---

## Montevideo, Uruguay
### Thursday, July 16 2015
#### Photo archive

* Uruguay
* Beach
* Ocean

![The beach North of Montevideo, Uruguay][uruguay]

[uruguay]: /assets/images/uruguay.webp

---

## Disney's The Black Hole
### Tuesday, 3 April 2012
#### Introduction to my Spotmaps project

* TheBlackHole
* Spotmaps

This is one of the many images rendered by my [spotmaps][spotmaps] application.

From the original site:

> Spotmaps, based on Brendan Dawes' [Cinema Redux][redux], is an on-going project to map the colour narratives of different films.

> Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames.

> Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.

> A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.

![Black Hole spotmap][blackhole]

More images can be found [here on Flickr][flickr].

There are also a couple of online articles about the spotmaps website on [FastCoDesign][fastco], and [Gizmodo][gizmodo].

[spotmaps]: https://github.com/andywillis/spotmaps
[redux]: http://brendandawes.com/projects/cinemaredux
[flickr]: https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787
[fastco]: http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels
[gizmodo]: http://gizmodo.com/5972740/the-color-of-movies-visualized
[blackhole]: /assets/images/blackhole.webp

---

## Nan
### Sunday, 1 January 2006
#### Photo archive

* Nan
* War
* Hospital

Nan is on the right.

![Nan in an operating theatre (black and white)][nan]

[nan]: /assets/images/nan.webp

---

## My Great Grandad, George W. Smith.
### Sunday, 1 January 2006
#### Photo archive

* GreatGranddad
* Miner
* Kent
* Dover

Organised the first Kent miner's strike.

![My great-grandfather, George][george]

[george]: /assets/images/george.webp

---

## Dirty Cow
### Sunday, 1 January 2000
#### Photo archive

* Cow
* Dirtycow
* NewYear

![Massive papier-mache cow on the roof of Fortress Studios][cow]

[cow]: /assets/images/dirtycow.webp
