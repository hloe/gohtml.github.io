'use strict';

let arrowDown = document.getElementsByClassName('arrow-down')[0];
arrowDown.onerror = function () {
  arrowDown.setAttribute('src', 'images/yellow-arrow.png');
  arrowDown.setAttribute('data-rjs', '2');
};