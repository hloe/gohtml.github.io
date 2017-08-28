$(function () {
  'use strict';

  $('#send').click(function (e) {
    if ($("textarea").val() === "") {
      e.preventDefault();
      $("textarea").addClass("red");
    }
    if ($("input[type='email']").val() === "") {
      e.preventDefault();
      $("input[type='email']").addClass("red");
    }
    if ($("input[type='text']").val() === "") {
      e.preventDefault();
      $("input[type='text']").addClass("red");
    }
  });

  $("textarea").focus(function () {
    if ($(this).hasClass('red')) {
      $(this).removeClass('red');
    }
  });

  $("input[type='email']").focus(function () {
    if ($(this).hasClass('red')) {
      $(this).removeClass('red');
    }
  });

  $("input[type='text']").focus(function () {
    if ($(this).hasClass('red')) {
      $(this).removeClass('red');
    }
  });


});
