 (function () {
   'use strict';

   fetch('https://newsapi.org/v1/articles?source=techcrunch&apiKey=2f1a53b7b01b475ba1415923b3a9a7e8')
     // Check status
     .then(function (response) {
       if (response.status === 200) {
         // Parse response
         return response.json();
       }
     })
     .then(function (response) {
       // Take articles array from response
       return response.articles;
     })
     .then(function (data) {
       // Create template
       var tmpl = document.getElementById('news-template').innerHTML.trim();
       tmpl = _.template(tmpl);

       document.getElementById('news-container').innerHTML = tmpl({
         data: data
       });
     })
     .catch(function () {
       $('#news-container').append('<p>Новости сейчас недоступны:(</p>');
     });

 })();
