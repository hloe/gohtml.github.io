(function ($) {
  'use strict';

  $.fn.carousel = function (options) {

    // Set options
    var defaults = {
      'background-color': '#ffffff',
      'font-family': 'Arial, sans-serif',
      'font-size': '14px',
      'color': '#000000'
    };

    var settings = $.extend(defaults, options);

    $('.carousel-container').css('background-color', settings['background-color']);
    $('.carousel-element p').css('font-family', settings['font-family']);
    $('.carousel-element p').css('font-size', settings['font-size']);
    $('.carousel-element p').css('color', settings['color']);


    // Initial values
    var leftArrow = $('.carousel-arrow-left');
    var rightArrow = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 110;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = -((elementsCount - 6) * pixelsOffset);
    var maximumOffset = 0;


    // Move pictures
    leftArrow.click(function () {
      if (currentLeftValue !== maximumOffset) {
        currentLeftValue += pixelsOffset;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 300);
      };
    });

    rightArrow.click(function () {
      if (currentLeftValue !== minimumOffset) {
        currentLeftValue -= pixelsOffset;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 300);
      };
    });


    // Change arrow's view
    rightArrow.click(function () {
      // Right arrow
      if (currentLeftValue === minimumOffset) {
        $('.carousel-arrow-right').removeClass('active').addClass('inactive');
      };
      // Left arrow
      if (currentLeftValue === maximumOffset) {
        $('.carousel-arrow-left').removeClass('active').addClass('inactive');
      };
      if (currentLeftValue !== maximumOffset) {
        $('.carousel-arrow-left').removeClass('inactive').addClass('active');
      };
    });

    leftArrow.click(function () {
      // Left arrow    
      if (currentLeftValue === 0) {
        $('.carousel-arrow-left').removeClass('active').addClass('inactive');
      };
      // Right arrow
      if (currentLeftValue !== maximumOffset) {
        $('.carousel-arrow-right').removeClass('inactive').addClass('active');
      };
    });

    return this;


  };
})(jQuery);

//Call plugin with default settings
$().carousel();

//Set parameters
//$().carousel({
//  'background-color': 'yellow',
//  'font-family': 'Times New Roman',
//  'font-size': '10px',
//  'color': 'brown'
//});