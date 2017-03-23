'use strict';


let button = document.getElementsByClassName('search__button')[0];
button.addEventListener('click', request);

let input = document.getElementsByClassName('search__text')[0];

let question = document.getElementsByClassName('search__text')[0].value;

input.addEventListener('keypress', function (event) {

  let key = event.which || event.keyCode;
  if (key === 13) {
    event.preventDefault();
    request();
  }
});



function request() {

  // Create request
  question = encodeURIComponent(question);
  let requestedUrl = 'http://webhose.io/search?token=93fe5996-cc4c-4174-8444-f9503a120f9c&format=json&q=' + question;

  let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

  let xhr = new XHR();

  // Cross-domain request
  xhr.open('GET', requestedUrl, true);

  xhr.onload = function () {
    let response = JSON.parse(this.responseText);

    let resultsField = document.getElementsByClassName('results')[0];
    // Delete previous results
    resultsField.innerHTML = '';

    // Create results list
    let ul = document.createElement('ul');
    ul.classList.add('results__list');
    resultsField.appendChild(ul);


    for (let i = 0; i < response.posts.length; i++) {
      let responseObject = response.posts[i];

      // Don't show results without title
      if (!responseObject.title) {
        continue;
      }

      let li = document.createElement('li');
      let title = document.createElement('h3');
      title.classList.add('results__title');

      let link = document.createElement('a');
      link.classList.add('results__link');
      link.setAttribute('href', responseObject.url);
      let niceTitle = responseObject.title.substr(0, 60);
      link.innerHTML = niceTitle;

      let cite = document.createElement('cite');
      cite.classList.add('results__url');
      let niceUrl = responseObject.url.substr(0, 60);
      cite.innerHTML = niceUrl;

      let text = document.createElement('div');
      text.classList.add('results__text');
      let niceText = responseObject.text.substr(0, 135) + '...';
      text.innerHTML = niceText;

      title.appendChild(link);
      li.appendChild(title);
      li.appendChild(cite);
      li.appendChild(text);
      ul.appendChild(li);

    }
  }

  xhr.onerror = function () {
    console.log('Error ' + this.status);
  }

  xhr.send();
};