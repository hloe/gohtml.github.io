'use strict';

(function () {
  let dropdowns = [];
  dropdowns = document.getElementsByClassName('dropdown');

  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('mouseover', showSubmenu);
    dropdowns[i].removeEventListener('mouseout', showSubmenu);
    dropdowns[i].addEventListener('mouseout', hideSubmenu);
    dropdowns[i].removeEventListener('mouseover', hideSubmenu);


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
        } else {
          pixels -= 10;
          hide.style.clip = 'rect(0, 245px, ' + pixels + 'px, 0)';
        }
      }, 10);
    }
  }

})();