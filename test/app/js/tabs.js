'use strict';

$('.tabs__link').click(function () {
  $('.tabs__link').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('href');
  $(id).removeClass('hidden');
  $(id).siblings('.tabs__content').addClass('hidden');

  return false;
})