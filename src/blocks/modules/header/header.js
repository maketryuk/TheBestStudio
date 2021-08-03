if (window.matchMedia("(min-width: 992px)").matches) {
  $(function() {
    $('.dropdown').mouseover(function() {
      $('.dropdown-list').slideDown()
    });
    $('.dropdown').mouseleave(function () {
      setTimeout(function() {
        $('.dropdown-list').slideUp()
      }, 1000);
    });
  });
} else {
  $(function() {
    $('.dropdown__trigger').click(function() {
      $('.dropdown-list').slideToggle()
    });
  });
}