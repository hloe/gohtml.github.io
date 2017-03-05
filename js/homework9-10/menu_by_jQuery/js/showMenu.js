$(function () {
  $('.menu-item').mouseover(function () {
    $(this).children('.menu-link').css('color', '#787878');
  });
  $('.menu-item').mouseout(function () {
    $(this).children('.menu-link').css('color', '#444444');
  });

  $('.submenu-item').mouseover(function () {
    $(this).children('.menu-link').css('color', '#787878');
  });
  $('.submenu-item').mouseout(function () {
    $(this).children('.menu-link').css('color', '#444444');
  });


  $('.dropdown').mouseover(function () {
    $(this).children('.submenu').css('display', 'block');
  });
  $('.dropdown').mouseout(function () {
    $(this).children('.submenu').css('display', 'none');
  });


});