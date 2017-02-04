createTest();

function createTest() {
  
  'use strict';

  var data = {
  
    divCreate: function() {
      var div = document.createElement('div');
      div.className = 'container';
      document.body.appendChild(div);
    },

    titleCreate: function() {
      var div = document.getElementsByClassName('container');
      var title = document.createElement('h1');
      title.className = 'h1 text-center';
      title.innerHTML = 'Тест по программированию';
      div[0].appendChild(title);
    },

    listCreate: function(n, m) {
      var div = document.getElementsByClassName('container');
      var list = document.createElement('ol');
      list.className = 'list-unstyled col-lg-9 col-lg-offset-3';
      div[0].appendChild(list);

      var li = [];
      for (var i = 1; i < n + 1; i++) {
        li[i] = document.createElement('li');
        li[i].innerHTML = i + '. Вопрос №' + i;
        list.appendChild(li[i]);

        data.checkboxCreate(li[i], m, i - 1);
      }
    },
    
    checkboxCreate: function(li, m, j) {
      var innerList = document.createElement('ul');
      innerList.className = 'list-unstyled';
      li.appendChild(innerList);

      for (var i = 1; i < m + 1; i++) {
        var div = document.createElement('div');
        div.className = "checkbox";

        var innerLi = document.createElement('li');

        var label = document.createElement('label');

        var input = document.createElement('input');
        input.type = 'checkbox';
        input.value = i;

        innerList.appendChild(innerLi);
        innerLi.appendChild(div);
        div.appendChild(label);
        label.appendChild(input);

        input.insertAdjacentHTML('afterEnd', 'Вариант ответа №' + i);
      }

    },

    buttonCreate: function() {
      var div = document.getElementsByClassName('container');
      var button = document.createElement('button');
      button.className = 'btn btn-lg btn-default center-block';
      button.innerHTML = 'Проверить мои результаты';
      div[0].appendChild(button);
    }
    
  }

  data.divCreate();
  data.titleCreate();
  // Первое значение - количество вопросов. Второе - количество вариантов
  // ответа на каждый вопрос.
  data.listCreate(3, 3);
  data.buttonCreate();

}