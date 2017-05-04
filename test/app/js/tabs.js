'use strict';

$('.tabs__link').click(function () {
  $('.tabs__link').removeClass('active-tab');
  $(this).addClass('active-tab');
  var id = $(this).attr('href');
  $(id).removeClass('hidden');
  $(id).siblings('.tabs__content').addClass('hidden');

  return false;
})

$('.tabs__link').focus(function () {
  $('.tabs__link').removeClass('active-tab');
  $(this).addClass('active-tab');
  var id = $(this).attr('href');
  $(id).removeClass('hidden');
  $(id).siblings('.tabs__content').addClass('hidden');

  return false;
})