(function () {
  'use strict';
  $('.menu-button').click(function () {
    $('.menu-list').toggleClass('menu-hide');
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.row').length) {
      $('.menu-list').addClass('menu-hide');
    }
    e.stopPropagation();
  });
})();