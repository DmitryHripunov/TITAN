const menuBtn = document.querySelector('.js-hamburger');
const menuContainer = document.querySelector('.js-hamburger__menu');
const activeStateClass = 'active';

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle(activeStateClass);
  menuContainer.classList.toggle(activeStateClass);
  $('.body').toggleClass('is-unscrolled');
  $('html').toggleClass('is-unscrolled');
});
