// Showing menu on mobile
$(function () {
  'use strict';
  $('.menu').click(function () {
    $('.tabs-list').toggleClass('hidden-mobile');
  });
});

// Switching between tabs
$(function () {
  'use strict';
  $('.tabs-link').click(function (e) {
    e.preventDefault();
    $('.tabs-link').removeClass('active-tab');
    $(this).addClass('active-tab');
    var a = $(this).attr('href');
    $(a).removeClass('hidden');
    $(a).siblings('.tabs-content').addClass('hidden');
  });
});

// Showing authorization form
$(function () {
  'use strict';
  $('.login').click(function () {
    $('.auth').toggleClass('hidden');
  });
  // Hidding by pressing Enter works automatically
});
