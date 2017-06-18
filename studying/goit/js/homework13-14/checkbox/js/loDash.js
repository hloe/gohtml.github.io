'use strict';

// Take object from localStorage
let test = localStorage.getItem('test');
let data = JSON.parse(test);

// Create template
let tmpl = document.getElementById('test').innerHTML.trim();
tmpl = _.template(tmpl);

document.getElementsByClassName('container')[0].innerHTML = tmpl({
  list: data
});