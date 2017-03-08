$(function () {

  // Show hidden submenu
  $('.dropdown').hover(function () {
    $(this).children('.submenu').stop(false, true).slideDown(500);
  }, function () {
    $(this).children('.submenu').stop(false, true).slideUp(500);
  });

  //Change menu items view
  $('.menu-item').hover(function () {
    $(this).stop(false, true).animate({
      backgroundColor: '#dac96a',
      color: '#554c00',
    }, 500);

    $(this).children('.menu-link').stop(false, true).animate({
      color: '#554c00',
    }, {
      queue: false,
      duration: 500
    });

  }, function () {
    $(this).stop(false, true).animate({
      backgroundColor: '#492e74',
      color: '#1a053a',
    }, 500);
    $(this).children('.menu-link').stop(false, true).animate({
      color: '#1a053a',
    }, {
      queue: false,
      duration: 500
    });
  });

  // Change submenu items view
  $('.submenu-item').hover(function () {
    $(this).stop(false, true).animate({
      backgroundColor: '#dac96a',
    }, 500);
    $(this).stop(false, true).children('.menu-link').animate({
      color: '#554c00',
    }, {
      queue: false,
      duration: 500
    });
  }, function () {
    $(this).stop(false, true).animate({
      backgroundColor: '#492e74',
    }, 500);
    $(this).stop(false, true).children('.menu-link').animate({
      color: '#1a053a',
    }, {
      queue: false,
      duration: 500
    });
  });


});