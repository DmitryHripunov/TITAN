/* eslint-disable */

new Swiper('.gallery .swiper-container', {
  threshold: 5,
  spaceBetween: 10,
  loop: false,
  navigation: {
    prevEl: '.gallery .swiper-container .swiper-button-prev',
    nextEl: '.gallery .swiper-container .swiper-button-next',
  },
});

