var photographerMain = new Swiper('.photographer-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  loopedSlides: 50,
  speed: 1500,
  pagination: {
    el: '.photographer-pagination',
  },
  navigation: {
    nextEl: '.photographer-slider-next',
    prevEl: '.photographer-slider-prev',
  },
});


var photographerThumbs = new Swiper('.photographer-thumbs', {
  slidesPerView: 5,
  slideToClickedSlide: true,
  loopedSlides: 50,
  loop: true,
  speed: 1500,
  spaceBetween: 30,
  breakpoints: {
    1351: {
      spaceBetween: 56,
    },
    1151: {
      spaceBetween: 30,
    },
  }
});

photographerMain.controller.control = photographerThumbs;
photographerThumbs.controller.control = photographerMain;