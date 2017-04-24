'use strict';

$('.panel').click(function (event) {
  $(this).children('.accordion').toggleClass('open closed');
  $(this).children('.accordion-content').slideToggle('slow');
});