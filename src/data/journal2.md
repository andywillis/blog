## Parkes Operation Center (Apollo 11)
### Tuesday, 26 July 2022

Just finished watching [The Dish][wikipedia] - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.

But I managed to [unearth this brilliant photo of the actual operations team][parkes]. (L-R) Alfred Stella, George Kropp, William Reytar (back) and Robert Taylor (seated at front).

![Parkes Operations Team 1969 512x425][original-team]

[wikipedia]: https://en.wikipedia.org/wiki/The_Dish
[parkes]: https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html
[original-team]: https://www.parkes.atnf.csiro.au/news_events/apollo11/images/nasa_technicians.jpg

Tags: thedish, parkes, apollo11

---

## Ramsgate Sands
### Tuesday, 18 December 2018

This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.

![Ramsgate Sands 800x449][sands]

[sands]: https://farm5.staticflickr.com/4911/31469292557_c51423babb.jpg

Tags: ramsgatesands, sunset

---

## Sandwich Bay, Kent
### Wednesday, 31 October 2018

Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."

![Sandwich Bay 800x449][bay1]
![Sandwich Bay 800x449][bay2]

[bay1]: https://farm2.staticflickr.com/1953/30710154627_8a80c81bfe.jpg
[bay2]: https://farm2.staticflickr.com/1975/45651025001_56a69daaf2.jpg

Tags: sandwichbay, beach, autumn, lowtide

---

## Dungeness
### Saturday, 30 September 2017

![Dungeness beach 800x449][beach]
![Ship high on the beach 480x800][ship]

[beach]: https://farm5.staticflickr.com/4497/36861332483_823053a587.jpg
[ship]: https://farm5.staticflickr.com/4479/37530502011_35f391476d.jpg

Tags: dungeness, beach, windswept

---

## Flickr images for responsive sites
### Monday, 21 August 2017

Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr.

When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>.

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

Tags: images, responsive, flickr

---

## Akule
### Tuesday, 15 August 2017

"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, [I want to make images, not to explain or clarify that world, but to deepen the mystery.][hawaii]" - Wayne Levin"

![Pretty school of fish 535x800][school]

[hawaii]: http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii
[school]: https://farm5.staticflickr.com/4372/35782338684_6e03d00bc6.jpg

Tags: ocean, photography, underwater, hawaii

---

## Wimbledon Common
### Monday, 31 July 2017

This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.

![Pond on the East side of Wimbledon Common 800x449][common]

[common]: https://farm5.staticflickr.com/4291/36160259971_b9bdc0331a.jpg

Tags: wimbledoncommon, pond, samshepard

---

## This site
### Saturday, 24 June 2017

This site is [an on-going React/Redux project][uws] to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.

In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about.

### Process breakdown

All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account.

I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data.

Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface.

This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site.

[uws]: https://github.com/andywillis/uws

Tags: express, react, reactrouter, markdown, journal

---

## A Tuesday Wander
### Tuesday, 16 May 2017

A walk from Embankment, up The Mall to Buckingham Palace, along [Green Park][greenpark] up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and out on to the road via [the church][church], finally heading down to Earl's Court.

![Map of the walk from Embankment to Earl's Court 800x384][walk]

[greenpark]: https://c1.staticflickr.com/5/4194/33905597993_40dcd32263.jpg
[church]: https://c1.staticflickr.com/5/4185/34330714870_ae972fe467.jpg
[walk]: https://c1.staticflickr.com/5/4175/34335985270_811e152740.jpg

Tags: kensingtonchurch, greenpark, london, hydepark

---

## Broadstairs
### Wednesday, 28 December 2016

It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.

![Photo of the North Sea from the coast near Broadstairs 800x449][north-sea]

If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.

![Photo of the North Sea from the coast near Broadstairs 800x450][north-sea2]

[north-sea]: https://c1.staticflickr.com/1/602/31912173126_bbdfc7aee1.jpg
[north-sea2]: https://c1.staticflickr.com/1/568/31912171456_8cbdda4cd8.jpg

Tags: broadstairs, northsea, beach, ocean

---

## Wimbledon Common
### Saturday, 31 December 2016

![The sun's rays shine through the foliage of a tree on the Common 800x449][sun]

[sun]: https://c1.staticflickr.com/1/329/31893590755_8a00661ac1.jpg

Tags: wimbledon, wimbledoncommon

---

## Montevideo, Uruguay
## Thursday, July 16 2015

![The beach North of Montevideo, Uruguay 800x449][uruguay]

[uruguay]: https://c1.staticflickr.com/1/460/19731108126_c55eec191a.jpg

Tags: uruguay, beach, ocean

---

## Disney's The Black Hole
### Tuesday, 3 April 2012

This is one of the many images rendered by my [spotmaps][spotmaps] application.

From the original site:

> Spotmaps, based on Brendan Dawes' [Cinema Redux][redux], is an on-going project to map the colour narratives of different films.

> Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames.

> Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.

> A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.

![Black Hole spotmap 532x800][blackhole]

More images can be found [here on Flickr][flickr].

There are also a couple of online articles about the spotmaps website on [FastCoDesign][fastco], and [Gizmodo][gizmodo].

[spotmaps]: https://github.com/andywillis/spotmaps
[redux]: http://brendandawes.com/projects/cinemaredux
[flickr]: https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787
[fastco]: http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels
[gizmodo]: http://gizmodo.com/5972740/the-color-of-movies-visualized
[blackhole]: https://farm5.staticflickr.com/4366/35888008014_d2941d2375.jpg

Tags: theblackhole, spotmaps

---

## Nan
### Sunday, 1 January 2006

Nan is on the right.

![Nan in an operating theatre (black and white) 800x474][nan]

[nan]: https://farm1.staticflickr.com/35/71621166_34f71281e7.jpg

Tags: nan, war, hospital

---

## My Great Grandad, George W. Smith.
### Sunday, 1 January 2006

Organised the first Kent miner's strike.

![My great-grandfather, George 500x431][george]

[george]: https://farm1.staticflickr.com/20/72584528_bb9fe13cde.jpg

Tags: greatgranddad, miner, kent, dover

---

## Dirty Cow
### Sunday, 1 January 2000

![Massive papier-mache cow on the roof of Fortress Studios 569x800][cow]

[cow]: https://farm1.staticflickr.com/40/90764612_de3f3bef39.jpg

Tags: cow, dirtycow, 2000, newyear
