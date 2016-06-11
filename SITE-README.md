wp-arctos-theme
===============

Theme for arctosdb.org and WordPress 3.9.0 +

Refer to http://codex.wordpress.org/Theme_Development for theme parameters.

The test status can be seen on http://velociraptorsystems.com/samples/mvz_tests/arctosdb/ , running the dev branch of WordPress.

## Building

Run `grunt build` from the top level directory to prepare everything. The Gruntfile has a few more details.

**Important Note**: Before final release, the `b` in the `build` and `wjm` tasks in `Cakefile` should be removed, and `bare` removed from `Gruntfile.coffee`.

For easy upgrades, I recommend installing [this Wordpress plugin](https://wordpress.org/plugins/easy-theme-and-plugin-upgrades/)

### CoffeeScript

The scripts for this project are written in [CoffeeScript](http://coffeescript.org/). The files in [the `coffee/` directory](coffee/), rather than the compiled output Javascript, should be edited if the scripts need editing.

### LESS

The styles are compiled from the [LESS source](http://lesscss.org/features/#features-overview-feature) . The `.less` files in [the `less/` directory](less/) should be modified, rather than the `arctosdb.org/style.css` file directly.

### Homepage Carousel

Edit [the file `homepage-carousel-data.json` in the template directory](arctosdb.org/homepage-carousel-data.json) to update the carousel. The code will take care of the rest! It can take an arbitrary number of images.

The JSON should look something like the following:

```javascript
  {
    "0": { // The nth image. Start at zero, proceed in order, as valid JSON
        "image":"images/img_15614.jpg", // Path to the image. Relative paths will assume relative to the theme directory.
        "image-description":"image description", // A description for screen readers, etc. (The "alt" and "aria-" attributes)
        "caption":"From https://www.flickr.com/photos/tigerhawkvok/9449565450/" // The photo caption, displayed beneath. HTML OK.
    }
```

## Shortcut Classes

These are generally going to be better to use than manually attempting these effects.

- Adding the class `newwindow` to a link will have it open in a new window.
- Adding the class `sciname` to any text (eg, `<span class='sciname'>Crotalus cerastes</span>`) will correctly format it; make it italic when in a block of normal text, and de-italicize when in a block of italic text.


## Inserting a subtree

To insert a subtree of all child pages, insert this code into the page:

```
[php]

/***
# Look at subpages
# Return them in a list
***/

$functions_path = get_template_directory() . "/functions.php";
require_once($functions_path);

echo get_descendant_pages(get_the_ID());
[/php]
```

`get_descendant_pages` takes the arguments:

```php
get_descendant_pages(
PAGE_ID, # required
RAW, # Boolean, default false; give just an array rather than HTML
NEST, # Boolean, default true; show nested heirarchy, otherwise, children won't be nested
DEBUG # Boolean, default false; show debugging output
);
```

## ImageLightbox

Images will be lightboxed using the [Github / Bower fork](https://github.com/victorhaggqvist/touch-imagelightbox) of [ImageLightbox](http://osvaldas.info/image-lightbox-responsive-touch-friendly). Until a [jQuery selector issue is resolved](https://github.com/victorhaggqvist/touch-imagelightbox/issues/1), it applies to all linked images (eg, `<a href='large_image.jpg'><img src='small_img.jpg'/></a>`).

Once the issue is resolved, the attribute `nolightbox` will prevent the lightbox from appearing.

## Picturefill

Check the documentation on https://scottjehl.github.io/picturefill/ for how to responsively fill images.
