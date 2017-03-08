'use strict';

$(function () {
  var leftArrow = $('.carousel-arrow-left');
  var rightArrow = $('.carousel-arrow-right');
  var elementsList = $('.carousel-list');

  var pixelsOffset = 110;
  var currentLeftValue = 0;
  var elementsCount = elementsList.find('li').length;
  var minimumOffset = -((elementsCount - 6) * pixelsOffset);
  var maximumOffset = 0;

  leftArrow.click(function () {
    if (currentLeftValue !== maximumOffset) {
      currentLeftValue += pixelsOffset;
      elementsList.animate({
        left: currentLeftValue + 'px'
      }, 300);
    }
  });

  rightArrow.click(function () {
    if (currentLeftValue !== minimumOffset) {
      currentLeftValue -= pixelsOffset;
      elementsList.animate({
        left: currentLeftValue + 'px'
      }, 300);
    }
  });

  //  (function changeArrowView() {
  //    if (currentLeftValue === maximumOffset) {
  //      $('.carousel-arrow-right').removeClass('inactive').addClass('active');
  //    }
  //  })();

});