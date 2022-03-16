// eslint-disable-next-line no-unused-vars
const mainSlider = new Swiper('.main-slider__container', {
  // Optional parameters
  loop: true,

  pagination: {
    el: '.main-slider__pagination',
    clickable: true,
  },

  navigation: {
    prevEl: '.main-slider__control-btn_prev',
    nextEl: '.main-slider__control-btn_next',
  },
});
