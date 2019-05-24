# clique
Recreation of the Clique Studios homepage

## Overview

First off: this is such a beautiful, bold, modern, intuitive site. It’s what made me look to see if you were hiring. Which you are, which is why we are here. So please know that I am viewing things with the utmost respect for the designers and developers who made it real. It’s stupid hard to put an objectively great-looking website out into the world, and it requires a bunch of super talented people to pull it off. And you all killed it. I’d be honored to be counted among your ranks. Thus this stuff:

I spent between 7 and 8 hours over three evenings recreating the Clique homepage. My goal was to build things as light as I could, using semantic and accessible HTML, and as little JavaScript as possible. (Not that I’m afraid of JavaScript. I’m pretty good at It. But I believe if you can do it without JavaScript, you should.) I would normally use Sass and all of the benefits it bestows, but incorporating a build process into a single static page is for sure overkill, so I present you with unsullied, unadorned, basic-assed CSS. As this is essentially proof-of-concept, I haven’t polyfilled, and I’ve used a couple attributes that are maybe not 100% IE-friendly, so please read this as a disclaimer that those are things I normally consider. “It Works In Chrome.” 

In the sake of brevity, I didn’t include every single Case Study or Recent Project Tile displayed on the live site. I hope what’s here is sufficient to show the essential chops. 

## Assets

While a Sketch file was provided, I ended up finding it faster to harvest assets from the live site. I took the opportunity to resize and optimize images, and convert PNGs to JPGs where appropriate. This resulted in a considerable lightening of image weight. For example, the Civis homepage screenshot is a 1.6MB PNG on the live site, but I was able to convert it to a 65KB JPG with little discernible loss of quality. 

The Sketch file didn’t provide a proper Clique logo, so I made my own SVG by harvesting the data available from the background-image attribute url being pulled into the logo element on the live site. 

I didn't have acces to Brandon Grotesque for the headers, but I did find a nice Google Font analogue in Josefin Sans.

## Nav

A while back a colleague shared a neat trick of adding a ‘scroll’ data attribute to the document with JavaScript, and accessing that value in CSS to manipulate styles based on scroll position. The main site nav looked to be a nice use case, and I was able to achieve the dual styles with just a couple lines of JavaScript and some fancy CSS targeting. I think it’s pretty cool. 

## Buttons

I noticed the two nifty button styles as being similar to ones found on the [Tympanus.net Button Styles Inspiration page](https://tympanus.net/Development/ButtonStylesInspiration/), so I cribbed what I could from their CSS and modified as necessary.

## The Hero

I’d never had to deal with a 100vh hero that becomes a fixed height after page scroll. So this was a neat challenge, but I believe there are smarter ways to do it than what I ended up with. It works fine, but I would love to talk with one of your veteran Front-Enders to learn a better way of achieving this effect. 

## Case Studies

There are a lot of deceptive layout challenges here that I tackled with some (hopefully) smart CSS targeting. I imagine a section like this in a WordPress site being populated by an ACF repeating flexible-content field-environment, so I used even/odd CSS selectors to ensure a proper layout no matter how projects are added and/or rearranged. 

## The Link Grid

I made a decision to make the entirety of each tile a link, rather than reveal the little clickable link element on hover. This just felt like a nice usability upgrade, as I prefer larger clickable areas, and the mobile experience of having to hunt for the tiny link icon make Hulk Fat Fingers Mad. 

## Notable Omissions

For the sake of time, I intentionally sidelined a few features for future forays (writing 101: always avoid alliteration.) 

The most egregious omission is the projects sidebar nav. This is clearly a highlight of the homepage experience, but it’s also pretty complex, given the animated page-scroll and animated active-state within the nav itself. I have ideas of doing this with CSS counters, a small amount of JavaScript, and a sticky UI component, but the LOE vs. MVP quotient convinced me to icebox it at this stage, as it isn’t absolutely essential to page usability. 

Next are the hero animations. I would love to rebuild those groovy semi-transparent movin’n’shakin’ quadrilaterals with some rad transformin’ keyframe animations. There are some subtle page-scroll animations that didn’t make the cut.

Last is the cool slinky animated underline on the main nav items. I’m gonna wanna do it. But even more, I want to get this thing to you quickly so that we can have further discussions about how I can help y’all build lots of neat internet stuff. So this one’s also on the bucket list. 
