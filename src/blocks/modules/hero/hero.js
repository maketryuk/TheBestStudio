var galleryMain = new Swiper('.hero-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  speed: 1500,
  loop: true,
  loopedSlides: 50,
  pagination: {
    el: '.hero-pagination',
  },
  navigation: {
    nextEl: '.hero-slider-next',
    prevEl: '.hero-slider-prev',
  },
  breakpoints: {
    992: {
      allowTouchMove: false,
      pagination: {
        el: ".fraction-pagination",
        type: "fraction",
      },
    }
  }
});

var galleryThumbs = new Swiper('.hero-thumbs', {
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: 10,
  initialSlide: 1,
  loopedSlides: 50,
  autoplay: true,
  loop: true,
  speed: 1500,
  navigation: {
    nextEl: '.hero-slider-next',
    prevEl: '.hero-slider-prev',
  },
});

// galleryMain.controller.control = galleryThumbs;
// galleryThumbs.controller.control = galleryMain;