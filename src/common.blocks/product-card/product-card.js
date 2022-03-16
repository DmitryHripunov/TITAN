$('.product-card__favorite').click((e) => {
  const target = $(e.currentTarget);
  target.toggleClass('is-active');
});


/*
const swiperArray = document.querySelectorAll('.js-product-card-swiper');

swiperArray.forEach((item) => {
  // eslint-disable-next-line no-unused-vars
  const mainSwiper = new Swiper(item, {
    slidesPerView: 1,
    spaceBetween: 0,
    threshold: 5,
    loop: false,
    pagination: {
      el: item.parentElement.querySelector('.js-product-card__pagination'),
    },
  });
});
*/

/* eslint-disable */

const productCardGallery = new Swiper('.product-card__gallery > .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 25,
  threshold: 5,
  observer: true,
  observeParents: true,
  loop: false,
  pagination: {
    el: '.product-card__gallery > .swiper-container > .swiper-pagination',
  },
});

function rileyBulletsInit(bullets, swiperIndex) {
  bullets.mouseenter((e) => {
    const target = $(e.currentTarget);
    const index = target.index();
    productCardGallery[swiperIndex].slideTo(index, -100);
  });

  const bulletsContainer = $(bullets[0]).parent();
  bulletsContainer.mouseleave(() => {
    productCardGallery[swiperIndex].slideTo(0, -100);
  })
}

for (let i = 0; i < productCardGallery.length; i++) {
  const currentSwiper = $(productCardGallery[i].el);
  const currentSwiperSlides = currentSwiper.find('.swiper-slide');
  const currentSwiperSlidesQuantity = currentSwiperSlides.length;
  const rileyBulletsFrame = $('<div>', {
    class: 'riley-bullets'
  });

  currentSwiper.parent().css('position', 'relative');
  currentSwiper.parent().append(rileyBulletsFrame);
  let link = currentSwiperSlides.find('a')[0].getAttribute('href');
  for (let j = 0; j < currentSwiperSlidesQuantity; j++) {
    const rileyBullet = $('<a>', {
      class: 'riley-bullets__item',
      href: link,
      style: 'flex: 1 1 auto;',
    });
    rileyBulletsFrame.append(rileyBullet);
  }
  const rileyBullets = rileyBulletsFrame.find('.riley-bullets__item');
  // передаём элементы пагинации и индекс свайпера которому они принадлежат
  rileyBulletsInit(rileyBullets, i);
}

if (window.innerWidth > 1024) {
  $('.riley-bullets').css({ "display": "flex", "position": "absolute", "left": "0", "top": '0', "width": "100%", "height": "100%", "z-index": "1" });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    $('.riley-bullets').css({ "display": "flex", "position": "absolute", "left": "0", "top": '0', "width": "100%", "height": "100%", "z-index": "1" });
  }
  else {
    $('.riley-bullets').css({ "display": "none" });
  }
})