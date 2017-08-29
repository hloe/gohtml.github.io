$(function () {
  'use strict';

  $(window).scroll(function () {
    var scroll = window.pageYOffset;
    if (scroll => window.innerHeight * 2) {
      $('.arrow-up').removeClass('hidden-arrow');
    }
    if (scroll < window.innerHeight * 2) {
      $('.arrow-up').addClass('hidden-arrow');
    }
  });
  
  $('arrow-up').click(function() {});

});
