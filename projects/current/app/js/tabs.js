(function () {
  'use strict';

  // Click effects
  // Colorful panels
  $('.panel').click(function () {
    $(this).next('.togglePanel').collapse('toggle');

    // Change titles' styles
    $(this).children('.panel-title').toggleClass('panel-title-hover');
    $(this).children('.panel-subtitle').toggleClass('panel-subtitle-hover');
    correctHeight();
  });

  // Inside subpoints
  $('.subpoint').click(function () {
    $(this).parent('.list-unstyled').children('.subpoint').children('.toggleSubpoint').removeClass('in');
    $(this).children('p').collapse('toggle');
    correctHeight()
  });

  // Hover effects
  $('.tab').hover(function () {
    // Change div width
    $('.tab').addClass('narrow');
    $(this).removeClass('narrow').addClass('wide');
    correctHeight()
  }, function () {
    $('.tab').removeClass('narrow');
    $(this).removeClass('wide');
    $('.tab').stop(true);
    correctHeight()
  });

  // Correct tabs heigth in case of long content
  function correctHeight() {
    // Change functionality for larger screens
    if ($(window).width() > 768) {
      var height = 0;

      $('.tab').each(function () {
        var h = $(this).height();
        if (h > height) {
          height = h;
        }
      });
      $('.tab').height(height);
    }
  }

})();