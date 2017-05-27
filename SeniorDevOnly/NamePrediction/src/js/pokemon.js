(function () {

  'use strict';

  // If there isn't names array yet
  if (localStorage.getItem('pokemonsNames') === null) {
    // Take names from public API
    getPokemonsList();
  }

  // Take names from localStorage
  let names = localStorage.pokemonsNames ? JSON.parse(localStorage.pokemonsNames) : [];

  let input = document.getElementById('input');

  //Call selectSuitable function every time when input is changed
  input.oninput = function () {
    selectSuitable(input.value.toLowerCase());
  }

  // Choose name with keyboard
  input.addEventListener('keyup', handleKey);

  let select = document.getElementById('autocomplete');

  // Choose name with mouse
  select.addEventListener('click', showClickedOption);

  let options = document.getElementById('autocomplete').getElementsByTagName('option');


  // **************  
  // All functions are below
  // **************
  function getPokemonsList() {
    // As there are 811 pokemons in www.pokeapi.co, limit=811
    let url = 'http://www.pokeapi.co/api/v2/pokemon/?limit=811';

    // Create new object XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // Confige object XMLHttpRequest
    xhr.open('GET', url, true);
    xhr.onreadystatechange = receiveResponse;
    xhr.send();


    function receiveResponse(e) {
      if (this.readyState == 4) {
        // xhr.readyState == 4, so we've received the complete server response
        if (this.status == 200) { // xhr.status == 200, so the response is good
          let result = JSON.parse(xhr.responseText);
          handleNames(result);
        } else {
          noNames();
        }
      }
    }
  }

  function handleNames(result) {

    // Get pokemons array
    let pokemonsArr = result.results;

    // Get pokemons' names
    let pokemonsNames = pokemonsArr.map(function (item) {
      return item.name;
    });

    // Delete not unique names if there are
    pokemonsNames = unique(pokemonsNames);

    // Sort names by alphabet
    pokemonsNames = pokemonsNames.sort();

    // In case if API returns results with capital letters
    pokemonsNames = pokemonsNames.map(function (item) {
      return item.toLocaleLowerCase();
    });

    // Write names array into localStorage
    localStorage.pokemonsNames = JSON.stringify(pokemonsNames);
  }

  // It there's some trouble with the response from API
  function noNames() {
    let sorry = document.createElement('p');
    sorry.innerHTML = 'Sorry, service is unavailable. No pokemons\' names for the prediction is at the moment.';
    sorry.className = 'sorry';

    let section = document.getElementsByClassName('container')[0];
    let form = document.getElementsByClassName('form')[0];
    section.insertBefore(sorry, form);
  }

  function unique(arr) {
    // Create subsidiary object
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      let str = arr[i]; // Make string from each array element
      obj[str] = true; // Remember each string like object property
    }

    return Object.keys(obj);
  }

  function selectSuitable(text) {
    if (text.length === 0) {
      clearPredictions();
      return;
    }
    let amount = 0;
    let suitNames = [];

    for (let i = 0; i < names.length; i++) {
      // Compare every array element with input text
      let rigthLength = 0;
      for (let j = 0; j < text.length; j++) {
        if (names[i][j] === text[j]) {
          rigthLength++;
        }
      }

      // If length of right symbol is equal text (input.value) length
      if (rigthLength === text.length) {
        suitNames[amount] = names[i];
        amount++;
      }

      // If there's already 5 predictions, stop
      if (amount === 5) {
        break;
      }
    }

    showPredictions(suitNames);
  }

  function clearPredictions() {
    let select = document.getElementById('autocomplete');
    select.innerHTML = '';
  }

  function showPredictions(arr) {
    clearPredictions();

    let select = document.getElementById('autocomplete');

    for (let i = 0; i < arr.length; i++) {
      let option = document.createElement('option');
      option.innerHTML = arr[i];
      option.value = arr[i];
      option.className = 'option';
      select.appendChild(option);
    }
  }


  function handleKey(event) {
    let options = document.getElementById('autocomplete').getElementsByTagName('option');
    let selected = -1;
    switch (event.keyCode) {
    case 40: // Key Down arrow is pressed
      selected = -1;
      for (let i = 0; i < options.length; i++) {
        if ((i in options) && (options[i].className === 'selected')) {
          options[i].className = 'non-selected';
          selected = i;
        }
      }
      selected++;
      for (let i = 0; i < options.length; i++) {
        if ((i in options) && (i === selected)) {
          options[i].className = 'selected';
        }
      }
      break;
    case 38: // Key Up arrow is pressed
      selected = options.length;
      for (let i = 0; i < options.length; i++) {
        if ((i in options) && (options[i].className === 'selected')) {
          options[i].className = 'non-selected';
          selected = i;
        }
      }
      selected--;
      for (let i = 0; i < options.length; i++) {
        if (i in options && i === selected) {
          options[i].className = 'selected';
        }
      }
      break;
    case 13: // Key Enter is pressed
      for (let i = 0; i < options.length; i++) {
        if ((i in options) && (options[i].className == 'selected')) {
          input.value = options[i].innerHTML;
          document.getElementById('autocomplete').innerHTML = '';
        }
      }
      break;
    }
  }

  function showClickedOption() {
    let index = document.getElementById('autocomplete').selectedIndex;
    input.value = options[index].innerHTML;
    document.getElementById('autocomplete').innerHTML = '';
  }

})();