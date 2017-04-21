'use strict';

$('.panel').hover(function (event) {
  event.preventDefault();
  $(this).children('.accordion-content').slideDown('slow');
}, function (event) {
  event.preventDefault();
  $(this).children('.accordion-content').slideUp('slow');
});