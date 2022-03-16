const swiperProductArray = $('.swiper-products > .swiper-container');

swiperProductArray.each((i, el) => {
  // eslint-disable-next-line no-unused-vars
  const mainSwiper = new Swiper(el, {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    threshold: 5,
    navigation: {
      prevEl: $(el).parent().children('.swiper-button-prev')[0],
      nextEl: $(el).parent().children('.swiper-button-next')[0],
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    },
  });
});

/* eslint-disable */
/*
new Swiper ('.swiper-products > .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  loop: false,
  threshold: 5,
  navigation: {
    prevEl: '.swiper-products > .swiper-container > .swiper-button-prev',
    nextEl: '.swiper-products > .swiper-container > .swiper-button-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  }
});
*/