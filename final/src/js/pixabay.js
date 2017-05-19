(function () {
  'use strict';

  initialRequest();


  // Initiate form submitting
  var form = document.getElementsByClassName('form')[0];
  form.addEventListener('submit', requestPixabay);

  function initialRequest() {

    // Get request from input and encode it
    var request = document.getElementsByClassName('input')[0].value;
    console.log(request);

    // Create url for request
    var requestedUrl = 'https://pixabay.com/api/?key=5329767-c1e7be6357fccc39d535e11ce&per_page=7&image_type=photo';

    makeRequest(requestedUrl);

    // Clear input field after sending request
    var form = document.getElementsByClassName('form')[0];
    form.reset();


    function makeRequest(url) {
      // Create new object XMLHttpRequest
      var xhr = new XMLHttpRequest();
      // Confige object XMLHttpRequest
      xhr.open('GET', url, true);
      xhr.onreadystatechange = receiveResponse;
      xhr.send();


      function receiveResponse(e) {
        if (this.readyState == 4) {
          // xhr.readyState == 4, so we've received the complete server response
          if (this.status == 200) { // xhr.status == 200, so the response is good

            var result = JSON.parse(xhr.responseText);
            var links = takeLinks(result);
            showPictures(links);
          } else {
            ups();
          }
        } else {
          ups();
        }
      }

    }

    // Get images links from object
    function takeLinks(data) {
      var links = _.map(data.hits, 'webformatURL');
      links = _.flatten(links);
      return links;
    };

    // Show images in HTML
    function showPictures(data) {
      // Create template
      var tmpl = document.getElementById('pictures').innerHTML.trim();
      tmpl = _.template(tmpl);

      document.getElementsByClassName('images-container')[0].innerHTML = tmpl({
        data: data
      });
    }

    // Show that images aren't accessible
    function ups() {
      var ups = document.createElement('p');
      ups.innerHTML = 'Sorry, images search is\'n available at the moment';
      var container = document.getElementsByClassName('images-container')[0];
      container.appendChild(ups);
    }
  }


  function requestPixabay(event) {

    event.preventDefault();

    // Get request from input and encode it
    var request = document.getElementsByClassName('input')[0].value;
    console.log(request);

    // Create url for request
    var requestedUrl;
    if ((request === undefined) || (request === '')) {
      requestedUrl = 'https://pixabay.com/api/?key=5329767-c1e7be6357fccc39d535e11ce&per_page=7&image_type=photo';
    } else {
      requestedUrl = 'https://pixabay.com/api/?key=5329767-c1e7be6357fccc39d535e11ce&per_page=7&image_type=photo&q=' + encodeURIComponent(request);
    }

    makeRequest(requestedUrl);

    // Clear input field after sending request
    var form = document.getElementsByClassName('form')[0];
    form.reset();


    function makeRequest(url) {
      // Create new object XMLHttpRequest
      var xhr = new XMLHttpRequest();
      // Confige object XMLHttpRequest
      xhr.open('GET', url, true);
      xhr.onreadystatechange = receiveResponse;
      xhr.send();


      function receiveResponse(e) {
        if (this.readyState == 4) {
          // xhr.readyState == 4, so we've received the complete server response
          if (this.status == 200) { // xhr.status == 200, so the response is good

            var result = JSON.parse(xhr.responseText);
            var links = takeLinks(result);
            showPictures(links);
          } else {
            ups();
          }
        } else {
          ups();
        }
      }

    }

    // Get images links from object
    function takeLinks(data) {
      var links = _.map(data.hits, 'webformatURL');
      links = _.flatten(links);
      return links;
    };

    // Show images in HTML
    function showPictures(data) {
      // Create template
      var tmpl = document.getElementById('pictures').innerHTML.trim();
      tmpl = _.template(tmpl);

      document.getElementsByClassName('images-container')[0].innerHTML = tmpl({
        data: data
      });
    }

    // Show that images aren't accessible
    function ups() {
      var ups = document.createElement('p');
      ups.innerHTML = 'Sorry, images search is\'n available at the moment';
      var container = document.getElementsByClassName('images-container')[0];
      container.appendChild(ups);
    }
  }

})();