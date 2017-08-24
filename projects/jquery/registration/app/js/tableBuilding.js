// Build table
$(function tableBuild() {
  'use strict';
  var catalogue = (localStorage.getItem('catalogue') === null) ? [] : JSON.parse(localStorage.getItem('catalogue'));

  if (catalogue.length !== 0) {
    catalogue.forEach(function (item) {
      $('#table').append('<tr><td>' + item[0] + '</td><td>' + item[1] + '</td><td>' + item[2] + '</td></tr>');
    });
  }
});
