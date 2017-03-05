$(function () {
  $('.menu-item').mouseover(function () {
    $(this).css('background-color', '#dac96a');
    $(this).children('.menu-link').css('color', '#554c00');
  });
  $('.menu-item').mouseout(function () {
    $(this).css('background-color', '#492e74');
    $(this).children('.menu-link').css('color', '#1a053a');
  });

  $('.submenu-item').mouseover(function () {
    $(this).css('background-color', '#dac96a');
    $(this).children('.menu-link').css('color', '#554c00');
  });
  $('.submenu-item').mouseout(function () {
    $(this).css('background-color', '#492e74');
    $(this).children('.menu-link').css('color', '#1a053a');
  });


  $('.dropdown').mouseover(function () {
    $(this).children('.submenu').css('display', 'block');
  });
  $('.dropdown').mouseout(function () {
    $(this).children('.submenu').css('display', 'none');
  });


});