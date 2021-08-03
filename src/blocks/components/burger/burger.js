$(function() {
  $('.burger').click(function() {
    $('.burger').toggleClass('burger--active');
    $('#header-nav').toggleClass('nav_active');
    $('body').toggleClass('lock');
  });
});