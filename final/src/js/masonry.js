(function () {
  'use strict';
  var elem = document.querySelector('.images');
  var msnry = new Masonry(elem, {
    // options
    itemSelector: '.images__item',
    columnWidth: '.images__gridsize',
    percentPosition: true
  });

  imagesLoaded(elem).on('progress', function () {
    // layout Masonry after each image loads
    msnry.layout();
  });

})();