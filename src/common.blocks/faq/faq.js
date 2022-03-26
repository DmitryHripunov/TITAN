// eslint-disable-next-line func-names
$(document).on('click', '.faq__item-top', function () {
  $(this).closest('.faq__item').toggleClass('is-active');
  $(this).siblings('.faq__dropdown').slideToggle(300);
});
