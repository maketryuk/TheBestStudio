var studioMain = new Swiper('.studio-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  loopedSlides: 50,
  speed: 1500,
  pagination: {
    el: '.studio-pagination',
  },
  navigation: {
    nextEl: '.studio-slider-next',
    prevEl: '.studio-slider-prev',
  },
  breakpoints: {
    992: {
      direction: 'vertical',
    }
  }
});


var studioThumbs = new Swiper('.studio-thumbs', {
  direction: 'vertical',
  slidesPerView: 2,
  slideToClickedSlide: true,
  loopedSlides: 50,
  loop: true,
  speed: 1500,
  spaceBetween: 30,
  breakpoints: {
    1351: {
      spaceBetween: 50,
    },
    1151: {
      spaceBetween: 30,
    },
  }
});

studioMain.controller.control = studioThumbs;
studioThumbs.controller.control = studioMain;