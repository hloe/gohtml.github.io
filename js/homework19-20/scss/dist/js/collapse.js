'use strict';

$('.accordion').click(function () {
  $('.visible').toggleClass('hidden visible');
  $('.open').toggleClass('open closed');
  $(this).toggleClass('open closed');
  $(this).next().toggleClass('hidden visible');
});