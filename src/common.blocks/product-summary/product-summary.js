import GLightbox from 'glightbox';
/*
$('.scheme-lightgallery').lightGallery({
  thumbnail: true,
  animateThumb: true,
  showThumbByDefault: true,
  hideBarsDelay: 9000000,
  download: false,
  selector: '.scheme-lightgallery-item',
});
*/
/*
$('.scheme-video-lightgallery').lightGallery({
  thumbnail: false,
  hideBarsDelay: 9000000,
  download: false,
  selector: '.scheme-video-lightgallery-item',
});
*/
GLightbox({
  selector: 'glightbox',
});

GLightbox({
  selector: 'glightbox-video',
  autoplayVideos: true,
});
