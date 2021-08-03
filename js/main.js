"use strict";

window.onload = function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
};
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";

if (window.matchMedia("(min-width: 992px)").matches) {
  $(function () {
    $('.dropdown').mouseover(function () {
      $('.dropdown-list').slideDown();
    });
    $('.dropdown').mouseleave(function () {
      setTimeout(function () {
        $('.dropdown-list').slideUp();
      }, 1000);
    });
  });
} else {
  $(function () {
    $('.dropdown__trigger').click(function () {
      $('.dropdown-list').slideToggle();
    });
  });
}
"use strict";

var photographerMain = new Swiper('.photographer-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  loopedSlides: 50,
  speed: 1500,
  pagination: {
    el: '.photographer-pagination'
  },
  navigation: {
    nextEl: '.photographer-slider-next',
    prevEl: '.photographer-slider-prev'
  }
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
      spaceBetween: 56
    },
    1151: {
      spaceBetween: 30
    }
  }
});
photographerMain.controller.control = photographerThumbs;
photographerThumbs.controller.control = photographerMain;
"use strict";

var galleryMain = new Swiper('.hero-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  speed: 1500,
  loop: true,
  loopedSlides: 50,
  pagination: {
    el: '.hero-pagination'
  },
  navigation: {
    nextEl: '.hero-slider-next',
    prevEl: '.hero-slider-prev'
  },
  breakpoints: {
    992: {
      allowTouchMove: false,
      pagination: {
        el: ".fraction-pagination",
        type: "fraction"
      }
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
    prevEl: '.hero-slider-prev'
  }
}); // galleryMain.controller.control = galleryThumbs;
// galleryThumbs.controller.control = galleryMain;
"use strict";
"use strict";

var studioMain = new Swiper('.studio-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  loopedSlides: 50,
  speed: 1500,
  pagination: {
    el: '.studio-pagination'
  },
  navigation: {
    nextEl: '.studio-slider-next',
    prevEl: '.studio-slider-prev'
  },
  breakpoints: {
    992: {
      direction: 'vertical'
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
      spaceBetween: 50
    },
    1151: {
      spaceBetween: 30
    }
  }
});
studioMain.controller.control = studioThumbs;
studioThumbs.controller.control = studioMain;
"use strict";
"use strict";

$(function () {
  $('.burger').click(function () {
    $('.burger').toggleClass('burger--active');
    $('#header-nav').toggleClass('nav_active');
    $('body').toggleClass('lock');
  });
});