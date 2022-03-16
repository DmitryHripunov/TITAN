$('.js-close-popup').click((e) => {
  $(e.target).closest('.popup-frame').removeClass('is-open');
  $('.body').removeClass('is-unscrolled');
  $('body').css('padding-right', 0);
  $('html').removeClass('is-unscrolled');
});

const popupList = $('.popup');
const popupAreaList = $('.js-popup-area');
const popupFrameList = $('.popup-frame');
const openPopup = $('.js-open-popup');

openPopup.click((e) => {
  // считаем ширину скрола
  const scrollSize = $(window).outerWidth() - $('main').outerWidth();
  $('body').css('padding-right', scrollSize);
  // открываем модельное окно
  const target = $(e.currentTarget);
  popupList.removeClass('.is-open');
  const targetPopup = target.attr('data-target-popup');
  $(`#${targetPopup}`).addClass('is-open');
  $('.body').addClass('is-unscrolled');
  $('html').addClass('is-unscrolled');
  $('.js-hamburger').removeClass('active');
  $('.js-hamburger__menu').removeClass('active');
});

$(document).mouseup((e) => {
  if (!popupAreaList.is(e.target) && popupAreaList.has(e.target).length === 0) {
    if (popupFrameList.hasClass('is-open')) {
      console.log('close modal');
      popupFrameList.removeClass('is-open');
      $('.body').removeClass('is-unscrolled');
      $('body').css('padding-right', 0);
      $('html').removeClass('is-unscrolled');
    }
  }
});
