/* eslint-disable */

new Swiper ('.swiper-diplom > .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 20,
  loop: false,
  threshold: 5,
  navigation: {
    prevEl: '.swiper-diplom > .swiper-button-prev',
    nextEl: '.swiper-diplom > .swiper-button-next',
  },
  pagination: {
    el: '.swiper-diplom > .swiper-container > .swiper-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 48,
    },
  }
});
