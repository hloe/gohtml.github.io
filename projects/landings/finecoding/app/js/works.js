(function () {
  'use strict';

  // Take names from public API
  requestWorks();


  function requestWorks() {

    fetch('https://api.myjson.com/bins/1fddvx')
      // Check status
      .then(function (response) {
        if (response.status === 200) {
          // Parse response
          response = response.json();
          return response;
        }
      })
      .then(function (response) {
        // Take works array from response
        response = response.works;
        // Show results
        showWorks(response);
      })
      //     .catch(console.log);
      .catch(function () {
        ups();
      });
  }

  function showWorks(data) {
    // Create template
    let tmpl = document.getElementById('template').innerHTML.trim();
    tmpl = _.template(tmpl);

    document.getElementById('container').innerHTML = tmpl({
      data: data
    });
  }

  function ups() {
    let container = document.getElementById('container');
    let p = document.createElement('p');
    p.classList = 'works__text';
    p.innerHTML = 'Sorry, works aren\'t available at the moment.';
    container.appendChild(p);
  }

})();