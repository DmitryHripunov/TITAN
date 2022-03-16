/* eslint-disable */

const galleryThumbs = new Swiper('.thumbs .swiper-container', {
  threshold: 5,
  spaceBetween: 4,
  slidesPerView: 'auto',
  // centeredSlides: true,
  slideToClickedSlide: true,
  centerInsufficientSlides: true,
  loop: false,
  freeMode: false,
  watchSlidesVisibility: true,
});

new Swiper('.gallery .swiper-container', {
  threshold: 5,
  spaceBetween: 10,
  loop: false,
  navigation: {
    prevEl: '.gallery .swiper-container .swiper-button-prev',
    nextEl: '.gallery .swiper-container .swiper-button-next',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  on: {
    slideChange: function () {
      let activeIndex = this.activeIndex + 1;

      let activeSlide = document.querySelector(`.thumbs .swiper-slide:nth-child(${activeIndex})`);
      let nextSlide = document.querySelector(`.thumbs .swiper-slide:nth-child(${activeIndex + 1})`);
      let prevSlide = document.querySelector(`.thumbs .swiper-slide:nth-child(${activeIndex - 1})`);

      if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
        this.thumbs.swiper.slideNext()
      } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
        this.thumbs.swiper.slidePrev()
      }

    }
  },
});

$('.product-lightgallery').lightGallery({
  thumbnail: true,
  animateThumb: true,
  showThumbByDefault: true,
  hideBarsDelay: 9000000,
  download: false,
  selector: '.product-lightgallery-item',
});
