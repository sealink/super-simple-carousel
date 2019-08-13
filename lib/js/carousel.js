import 'hammerjs/hammer'

export default class Carousel {
  constructor(element, options) {
    options = options || {}

    this.element = element
    this.slides = this.element.querySelectorAll('.carousel-slide')
    this.dots = this.element.querySelectorAll('.carousel-dot')
    this.slideIndex = 1
    this.timer = null
    this.arrows = this.element.querySelectorAll('.carousel-arrow')
    this.delay = options.delay || 5000

    // Carousel left/right button navigation
    this.arrows.forEach(arrow => {
      arrow.addEventListener('click', (event) => {
        event.preventDefault()
        this.goToSlide(this.slideIndex + parseInt(event.target.dataset.carouselDirection))
      })
    })

    // Carousel dots button navigation
    this.dots.forEach(dot => {
      dot.addEventListener('click', (event) => {
        event.preventDefault()
        this.goToSlide(parseInt(event.target.dataset.slideIndex))
      })
    })

    // Device touch & gesture library - https://hammerjs.github.io
    const hammer = new Hammer(this.element)

    hammer.on('swipeleft', (event) => {
      this.goToSlide(this.slideIndex + 1)
    })

    hammer.on('swiperight', (event) => {
      this.goToSlide(this.slideIndex - 1)
    })
  }

  start() {
    this.goToSlide(1)
  }

  goToSlide(slideIndex) {
    clearTimeout(this.timer)

    this.slideIndex = slideIndex

    if (this.slideIndex > this.slides.length) this.slideIndex = 1

    if (this.slideIndex < 1) this.slideIndex = this.slides.length

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none'
    }

    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(' active', '')
    }

    this.slides[this.slideIndex - 1].style.display = 'block'
    this.dots[this.slideIndex - 1].className += ' active'

    // Duration between automatic slides
    this.timer = setTimeout(() => {
      this.goToSlide(this.slideIndex + 1)
    }, this.delay)
  }
}

