const splashScreen = $('.splashscreen');

$(document).ready(() => {
  splashScreen.removeClass('is-active');
});

function timeout() {
  splashScreen.removeClass('timeout');
}

setTimeout(timeout, 3000);
