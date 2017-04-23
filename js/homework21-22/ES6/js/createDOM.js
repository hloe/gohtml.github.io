'use strict';

//// Take object from localStorage
let test = localStorage.getItem('test');
let data = JSON.parse(test);

// Create page content
let container = document.getElementsByClassName('container')[0];
container.innerHTML =
  `<form name="test">
<h1 class="h1 text-center">Тест по программированию</h1>
<ol class="list col-lg-8 col-lg-offset-2">
</ol>
<input type="submit" value="Проверить мои результаты" class="btn btn-lg btn-default center-block">
</form>`;

for (let i = 0; i < data.length; i++) {
  let ol = document.getElementsByClassName('list')[0];
  let li = document.createElement('li');
  li.className = 'question';
  li.innerHTML = data[i]['question'];
  let ul = document.createElement('ul');
  ul.className = 'list-unstyled';

  ol.appendChild(li);
  li.appendChild(ul);

  if (data[i]['right answers'].length === 1) {
    for (let j = 0; j < data[i]['answers'].length; j++) {

      let smallLi = document.createElement('li');
      smallLi.className = 'answer';
      smallLi.innerHTML = `<li class="answer">
<div>
<label>
<input type="radio" name="answer ${i}" value="${j}">
${data[i]['answers'][j]}
</label>
</div>
</li>`;

      ul.appendChild(smallLi);

    }
  } else {
    for (let j = 0; j < data[i]['answers'].length; j++) {

      let smallLi = document.createElement('li');
      smallLi.className = 'answer';
      smallLi.innerHTML = `<li class="answer">
<div>
<label>
<input type="checkbox" name="answer ${i}" value="${j}">
${data[i]['answers'][j]}
</label>
</div>
</li>`;

      ul.appendChild(smallLi);
    }
  }
}