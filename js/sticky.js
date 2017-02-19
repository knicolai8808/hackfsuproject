$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 178) {
      $('#bs-example-navbar-collapse-1').addClass('navbar-fixed');
      $('#bs-example-navbar-collapse-2').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 179) {
      $('#bs-example-navbar-collapse-1').removeClass('navbar-fixed');
      $('#bs-example-navbar-collapse-2').removeClass('navbar-fixed');
    }
  });
});