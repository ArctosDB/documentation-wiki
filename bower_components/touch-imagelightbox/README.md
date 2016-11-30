Touch Imagelightbox
==============
Imagelightbox was originly created by [Osvaldas Valutis](http://osvaldas.info/image-lightbox-responsive-touch-friendly), though it was only accesible through his site. I put it here to make it more maintainable.

#How to get it
Via bower.io `bower install touch-imagelightbox`

Or with git `git clone https://github.com/victorhaggqvist/touch-imagelightbox.git`

Or download the [zip](https://github.com/victorhaggqvist/touch-imagelightbox/archive/master.zip).

#Requirements
jQuery (or maby Zepto.js, though unteststed)

#How to build
Image Lightbox is buildt using the Grunt toolchain. The CSS is build using SASS and Compass, which means you need Ruby, the SASS and Compass gems to make it. 

Note: Remenber that you ATM need a alpha build of Compass to make it work with Grunt (`gem install compass --pre`).

If you have Node just do a `npm install` then `grunt` and you will have a new build in the `dist/` directory.

#License
MIT
