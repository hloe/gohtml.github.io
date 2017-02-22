'use strict';

(function() {

  var buttonStart = document.getElementsByClassName('start')[0];
  buttonStart.addEventListener('click', start);

  var seconds = 0;
  var minutes = 0;
  var hours = 0;

  // Start button
  function start() {

    var buttonClear = document.getElementsByClassName('clear')[0];

    buttonStart.removeEventListener('click', start);
    buttonStart.addEventListener('click', pause);
    buttonClear.addEventListener('click', clear);

    buttonStart.innerHTML = 'Pause';

    var span = document.getElementsByClassName('time');

    // Set seconds
    var timerSeconds = setInterval(function() {
      seconds++;

      seconds = addZeros(seconds % 60, 2);

      span[2].innerHTML = seconds;
    }, 1000);

    // Set minutes
    var timerMinutes = setInterval(function() {
      minutes++;

      minutes = addZeros(minutes % 60, 2);

      span[1].innerHTML = minutes;

    }, 60 * 1000);

    // Set hours
    var timerHours = setInterval(function() {
      hours++;

      hours = addZeros(hours % 24, 2);

      span[0].innerHTML = hours;

    }, 60 * 60 * 1000);


    //As we can't simply use setInterval for milliseconds,
    // use Date
    var timerMilliSeconds = setInterval(function() {
      var date = new Date();
      var ms = Date.now() - Date.parse(date);

      ms = addZeros(ms % 1000, 3);

      span[3].innerHTML = ms;
    }, 1);

    // Format numbers
    function addZeros(n, needLength) {

      needLength = needLength || 2;
      n = String(n);
      while (n.length < needLength) {
        n = "0" + n;
      }
      return n;
    }

    // Pause button
    function pause() {
      buttonStart.innerHTML = 'Continue';

      clearInterval(timerMilliSeconds);
      clearInterval(timerSeconds);
      clearInterval(timerMinutes);
      clearInterval(timerHours);

      buttonStart.addEventListener('click', start);
    }

    // Clear button
    function clear() {

      buttonStart.innerHTML = 'Start';

      clearInterval(timerMilliSeconds);
      clearInterval(timerSeconds);
      clearInterval(timerMinutes);
      clearInterval(timerHours);

      seconds = 0;
      minutes = 0;
      hours = 0;

      span[0].innerHTML = '00';
      span[1].innerHTML = '00';
      span[2].innerHTML = '00';
      span[3].innerHTML = '000';

      buttonStart.removeEventListener('click', clear);
      buttonStart.addEventListener('click', start);

    }

  }

})();