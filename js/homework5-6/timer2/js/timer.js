'use strict';

firstTimer();

function firstTimer() {

  var buttonStart = document.getElementsByClassName('start')[0];
  buttonStart.addEventListener('click', start);

  var seconds = 0;
  var minutes = 0;
  var hours = 0;

  // Set number of inserted strings
  var count = 1;

  var span = document.getElementsByClassName('time');
  
  //Start button
  function start() {

    var div = document.getElementsByClassName('buttons')[0];
    var divSplit = document.createElement('div');
    divSplit.className = 'div-split';
    div.appendChild(divSplit);

    var buttonReset = document.getElementsByClassName('reset')[0];

    buttonStart.removeEventListener('click', start);
    buttonStart.addEventListener('click', stop);
    buttonReset.addEventListener('click', reset);

    buttonStart.innerHTML = 'Stop';

    var buttonSplit = document.getElementsByClassName('split')[0];
    buttonSplit.addEventListener('click', split);

    // Set seconds
    var timerSeconds = setInterval(function() {
      seconds++;
      if (seconds < 10) {
        span[2].innerHTML = '0' + String(seconds);
      } else if (seconds < 60) {
        span[2].innerHTML = String(seconds);
      } else {
        seconds = 0;
      }
    }, 1000);

    // Set minutes
    var timerMinutes = setInterval(function() {
      minutes++;
      if (minutes < 10) {
        span[1].innerHTML = '0' + String(minutes);
      } else if (minutes < 60) {
        span[1].innerHTML = String(minutes);
      } else {
        minutes = 0;
      }
    }, 60000);

    // Set hours
    var timerHours = setInterval(function() {
      hours++;
      if (hours < 10) {
        span[0].innerHTML = '0' + String(hours);
      } else if (hours < 23) {
        span[0].innerHTML = String(hours);
      } else {
        hours = 0;
      }
    }, 3600000);

    
    //As we can't simply use setInterval for milliseconds:
    var timerMilliSeconds = setInterval(function () {
      var date = new Date();
      var ms = Date.now() - Date.parse(date);

      ms = String(ms % 1000);
      while (ms.length < 2) {
        ms = '00' + ms;
      };
      while (ms.length < 3) {
        ms = '0' + ms;
      };

      span[3].innerHTML = ms;
    }, 1);

    // Stop button
    function stop() {

      buttonStart.innerHTML = 'Start';

      clearInterval(timerMilliSeconds);
      clearInterval(timerSeconds);
      clearInterval(timerMinutes);
      clearInterval(timerHours);

      insert();

      buttonStart.removeEventListener('click', stop);
      buttonStart.addEventListener('click', start);

    }


    // Reset button
    function reset() {

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

      buttonStart.removeEventListener('click', reset);
      buttonStart.removeEventListener('click', stop);
      buttonStart.addEventListener('click', start);

      //Delete all paragraphs
      div.removeChild(divSplit);

      //Set count to one
      count = 1;
      return (count);
    }
    return (span);

  }

  // Insert text when pressing Stop button
  function insert() {
    var divSplit = document.getElementsByClassName('div-split')[0];
    var p = document.createElement('p');
    p.className = 'splited';
    p.innerHTML = String(count) + ' Stop: ' + span[0].innerHTML + ':' + span[1].innerHTML + ':' + span[2].innerHTML + ':' + span[3].innerHTML;
    divSplit.appendChild(p);

    count++;
  }

  // Split
  function split() {
    var divSplit = document.getElementsByClassName('div-split')[0];
    var p = document.createElement('p');
    p.className = 'splited';
    p.innerHTML = String(count) + ' Split: ' + span[0].innerHTML + ':' + span[1].innerHTML + ':' + span[2].innerHTML + ':' + span[3].innerHTML;
    divSplit.appendChild(p);

    count++;
  }

}