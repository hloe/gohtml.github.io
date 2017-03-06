$(function () {

  // Show hidden submenu
  $('.dropdown').hover(function () {
    $(this).children('.submenu').slideDown(500);
  }, function () {
    $(this).children('.submenu').slideUp(500);
  });

  //Change menu items view
  $('.menu-item').hover(function () {
    $(this).animate({
      backgroundColor: '#dac96a',
      color: '#554c00',
    }, 500);

    $(this).children('.menu-link').animate({
      color: '#554c00',
    }, 500);

  }, function () {
    $(this).animate({
      backgroundColor: '#492e74',
      color: '#1a053a',
    }, 500);
    $(this).children('.menu-link').animate({
      color: '#1a053a',
    }, 500);

  });

  //  // Change submenu items view
  $('.submenu-item').hover(function () {
    $(this).animate({
      backgroundColor: '#dac96a',
    }, 500);
    $(this).children('.menu-link').animate({
      color: '#554c00',
    }, 500);
  }, function () {
    $(this).animate({
      backgroundColor: '#492e74',
    }, 500);
    $(this).children('.menu-link').animate({
      color: '#1a053a',
    }, 500);
  });


});