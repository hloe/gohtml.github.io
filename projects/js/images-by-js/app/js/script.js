(function () {
  'use strict';

  fetch('https://unsplash.it/list')
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then(function (data) {
      showContent(data);
    })
    .catch(function () {
      showError();
    });


  function showContent(data) {
    const imagesAmountOnPage = 20;
    let pageNumber = 1;

    showImages(data, pageNumber);
    showPagination(data, pageNumber);
    showAuthorsList(data);
    fitlerBySize(data, pageNumber);


    // All functions
    function showImages(data, pageNumber) {
      let fragment = document.createDocumentFragment();

      let maxLimit = ((imagesAmountOnPage * pageNumber) > data.length) ? data.length : imagesAmountOnPage * pageNumber;

      for (let i = imagesAmountOnPage * (pageNumber - 1); i < maxLimit; i++) {
        let li = document.createElement('li');
        li.className = 'images__item';

        let img = document.createElement('img');
        img.setAttribute('src', 'https://unsplash.it/' + data[i].filename);
        img.setAttribute('alt', 'image by ' + data[i].author);
        img.className = 'images__img';

        img.addEventListener('click', function () {
          let div = document.createElement('div');
          div.className = 'modal';
          div.style.backgroundImage = 'url("https://unsplash.it/' + data[i].filename + '")';
          document.body.appendChild(div);

          window.onkeydown = function () {
            div.className = 'hidden';
          }

          div.onclick = function () {
            div.className = 'hidden';
          }

        });

        li.appendChild(img);
        fragment.appendChild(li);
      }

      let ul = document.getElementById('images-container');
      ul.innerHTML = '';
      ul.appendChild(fragment);
    }

    function showPagination(data, pageNumber) {
      let ul = document.getElementById('pagination');
      ul.className = 'hidden';

      if (data.length > imagesAmountOnPage) {
        ul.className = 'pagination';
        changePageNumber(pageNumber);

        // Add listeners to pagination buttons
        let next = document.getElementById('next');
        next.addEventListener('click', nextPage);

        let prev = document.getElementById('prev');
        prev.addEventListener('click', prevPage);

        function nextPage() {
          prev.classList = 'prev';

          if (pageNumber < Math.ceil(data.length / imagesAmountOnPage)) {
            ++pageNumber;
            changePageNumber(pageNumber);
            showImages(data, pageNumber);
          }

          if (pageNumber === Math.ceil(data.length / imagesAmountOnPage)) {
            next.classList = 'next disabled';
          }
        }

        function prevPage() {
          next.classList = 'next';

          --pageNumber;
          changePageNumber(pageNumber);
          showImages(data, pageNumber);

          if (pageNumber === 1) {
            prev.classList = 'prev disabled';
          }
        }
      }
    }


    function fitlerBySize(data, pageNumber) {

      let largeLink = document.getElementById('large');
      largeLink.addEventListener('click', filterLarge);

      let mediumLink = document.getElementById('medium');
      mediumLink.addEventListener('click', filterMedium);

      let smallLink = document.getElementById('small');
      smallLink.addEventListener('click', filterSmall);

      function filterLarge(e) {
        e.preventDefault();

        clearFilterLinks('size-link');
        this.classList = 'size-link filters__sublink filters__sublink--active';

        pageNumber = 1;
        let filteredData = data.filter(function (item) {
          return item.width > 1500;
        });
        showImages(filteredData, pageNumber);
        showPagination(filteredData, pageNumber);
      }

      function filterMedium(e) {
        e.preventDefault();

        clearFilterLinks('size-link');
        this.classList = 'size-link filters__sublink filters__sublink--active';

        pageNumber = 1;
        let filteredData = data.filter(function (item) {
          return item.width < 1499 && item.width > 800;
        });

        showImages(filteredData, pageNumber);
        showPagination(filteredData, pageNumber);
      }

      function filterSmall(e) {
        e.preventDefault();

        clearFilterLinks('size-link');
        this.classList = 'size-link filters__sublink filters__sublink--active';

        pageNumber = 1;
        let filteredData = data.filter(function (item) {
          return item.width < 799;
        });
        showImages(filteredData, pageNumber);
        showPagination(filteredData, pageNumber);
      }
    }

    function showAuthorsList(data) {
      let authorsArr = [];

      for (let i = 0; i < data.length; i++) {
        if (authorsArr.indexOf(data[i].author) === -1) {
          authorsArr.push(data[i].author);
        }
      }

      authorsArr.sort();

      let fragment = document.createDocumentFragment();

      for (let i = 0; i < authorsArr.length; i++) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.classList = 'author-link filters__sublink';
        link.setAttribute('href', '#');
        link.innerHTML = authorsArr[i];

        link.addEventListener('click', filterByAuthor);
        li.appendChild(link);
        fragment.appendChild(li);
      }

      let ul = document.getElementById('author-container');
      ul.appendChild(fragment);
    }

    function filterByAuthor(e) {
      e.preventDefault();

      let filteredData = data.filter(function (item) {
        return item.author === this.innerHTML;
      }, this);

      pageNumber = 1;
      showImages(filteredData, pageNumber);
      showPagination(filteredData, pageNumber);

      clearFilterLinks('author-link');
      this.classList = 'author-link filters__sublink filters__sublink--active';
    }

  }


  function clearFilterLinks(classStr) {
    let links = document.getElementsByClassName(classStr);
    for (let i = 0; i < links.length; i++) {
      links[i].classList = classStr + ' filters__sublink';
    }
  }

  function changePageNumber(pageNumber) {
    let span = document.getElementById('pag-number');
    span.innerHTML = pageNumber;
  }



  function showError() {
    let pagination = document.getElementById('pagination');
    pagination.className = 'hidden';

    let li = document.createElement('li');
    li.innerHTML = 'Sorry, images are not available at the moment';

    let ul = document.getElementById('images-container');
    ul.innerHTML = '';
    ul.appendChild(li);
  }

})();
