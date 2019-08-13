# SuperSimple Carousel

A super simple JS carousel with a fade effect.

The [Hammer.js](https://hammerjs.github.io/) library is integrated for touch/swipe gestures.


## Install

**npm**

`npm install super-simple-carousel --save`

**yarn**

`yarn add super-simple-carousel`


## Getting started

### Import the JS

`import 'super-simple-carousel'`

### Add a carousel component

```javascript
document.querySelectorAll('.carousel').forEach(element => {
  new Carousel(element).start()
})
```

The default delay between autoplay slides is 5 seconds (5000 ms).

This can be overridden by adding the option `{delay: 2000}`.  
Example: `new Carousel(element, {delay: 2000}).start()`.

### Import the base styles

`@import '~/super-simple-carousel/lib/scss/carousel'`

### HTML structure

```HTML
<div class="carousel">

  <div class="carousel-slide">Slide content 1</div>
  <div class="carousel-slide">Slide content 2</div>

  <div class="carousel-arrows">
    <button class="carousel-arrow carousel-arrow-left" data-carousel-direction="-1" role="button">&lt;</button>
    <button class="carousel-arrow carousel-arrow-right" data-carousel-direction="1" role="button">&gt;</button>
  </div>

  <div class="carousel-dots">
    <span class="carousel-dot" data-slide-index="1"></span>
    <span class="carousel-dot" data-slide-index="2"></span>
  </div>

</div>
```

### License

This package is available as open source under the terms of the MIT License.