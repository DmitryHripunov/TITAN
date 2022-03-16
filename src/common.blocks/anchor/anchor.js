$('.anchor').on('click', (e) => {
  e.preventDefault();
  const target = $(e.currentTarget).attr('href');
  const position = $(target).offset().top;
  // console.log(target);
  // console.log(position);
  if (target !== undefined && target !== '') {
    $('html, body').animate({
      scrollTop: position - 50,
    }, 500);
  }
});
