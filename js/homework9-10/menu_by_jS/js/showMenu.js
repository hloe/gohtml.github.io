'use strict';

(function () {
  let dropdowns = [];
  dropdowns = document.getElementsByClassName('dropdown');

  // Show and hide submenu
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('mouseenter', showSubmenu);
    dropdowns[i].addEventListener('mouseleave', hideSubmenu);

    function showSubmenu() {
      var show = dropdowns[i].children[1];
      show.style.display = 'block';
      var pixels = 0;

      var timer = setInterval(function () {
        if (pixels === 340) {
          clearInterval(timer);
        } else {
          pixels += 10;
          show.style.clip = 'rect(0, 245px, ' + pixels + 'px, 0)';
        }
      }, 10);
    }

    function hideSubmenu() {
      var hide = dropdowns[i].children[1];
      var pixels = 340;

      var timer = setInterval(function () {
        if (pixels === 0) {
          clearInterval(timer);
          hide.style.display = 'none';

        } else {
          pixels -= 10;
          hide.style.clip = 'rect(0, 245px, ' + pixels + 'px, 0)';
        }
      }, 10);
    }
  }

  // Change elements view on mouseout
  let li = document.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseover', changeColors);
    li[i].addEventListener('mouseout', returnColors);

    function changeColors() {
      li[i].style.transitionProperty = 'background-color';
      li[i].style.transitionDuration = '.5s';
      li[i].style.backgroundColor = '#dac96a';

      var link = li[i].children[0];
      link.style.color = '#554c00';
    }

    function returnColors() {
      li[i].style.transitionProperty = 'background-color';
      li[i].style.transitionDuration = '.5s';
      li[i].style.backgroundColor = '#492e74';

      var link = li[i].children[0];
      link.style.color = '#1a053a';

    }

  }

})();