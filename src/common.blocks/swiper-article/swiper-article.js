import GLightbox from 'glightbox';
/* eslint-disable */
new Swiper ('.swiper-article > .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  threshold: 5,
  navigation: {
    prevEl: '.swiper-article > .swiper-button-prev',
    nextEl: '.swiper-article > .swiper-button-next',
  },
  pagination: {
    el: '.swiper-article > .swiper-container > .swiper-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  }
});

const lightBox = new GLightbox;


