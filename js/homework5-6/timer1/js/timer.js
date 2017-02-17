'use strict';

firstTimer();

function firstTimer() {

  var buttonStart = document.getElementsByClassName('start')[0];
  buttonStart.addEventListener('click', start);


  var milliSeconds = 0;
  var seconds = 0;
  var minutes = 0;
  var hours = 0;


  function start() {

    var buttonClear = document.getElementsByClassName('clear')[0];

    buttonStart.removeEventListener('click', start);
    buttonStart.addEventListener('click', pause);
    buttonClear.addEventListener('click', clear);


    buttonStart.innerHTML = 'Pause';

    var span = document.getElementsByClassName('time');

    var timerMilliSeconds = setInterval(function () {
      milliSeconds++;
      if (milliSeconds < 10) {
        span[3].innerHTML = '00' + String(milliSeconds);
      } else if (milliSeconds < 100) {
        span[3].innerHTML = '0' + String(milliSeconds);
      } else if (milliSeconds < 1000) {
        span[3].innerHTML = String(milliSeconds);
      } else {
        milliSeconds = 0;
      }
    }, 1);

    var timerSeconds = setInterval(function () {
      seconds++;
      if (seconds < 10) {
        span[2].innerHTML = '0' + String(seconds);
      } else if (seconds < 60) {
        span[2].innerHTML = String(seconds);
      } else {
        seconds = 0;
      }
    }, 1000);

    var timerMinutes = setInterval(function () {
      minutes++;
      if (minutes < 10) {
        span[1].innerHTML = '0' + String(minutes);
      } else if (minutes < 60) {
        span[1].innerHTML = String(minutes);
      } else {
        minutes = 0;
      }
    }, 60000);

    var timerHours = setInterval(function () {
      hours++;
      if (hours < 10) {
        span[0].innerHTML = '0' + String(hours);
      } else if (hours < 23) {
        span[0].innerHTML = String(hours);
      } else {
        hours = 0;
      }
    }, 3600000);

    function pause() {
      buttonStart.innerHTML = 'Continue';

      clearInterval(timerMilliSeconds);
      clearInterval(timerSeconds);
      clearInterval(timerMinutes);
      clearInterval(timerHours);

      buttonStart.addEventListener('click', start);
    }

    function clear() {

      buttonStart.innerHTML = 'Start';

      clearInterval(timerMilliSeconds);
      clearInterval(timerSeconds);
      clearInterval(timerMinutes);
      clearInterval(timerHours);

      milliSeconds = 0;
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

}