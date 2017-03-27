function checkLogin() {

  'use strict';

  var amount = 5;
  var arrNames = takeNames(amount);

  if (arrNames.length === amount) {

    var name = prompt('Введите имя пользователя для входа', '');

    check(name, arrNames);

  }

  function takeNames(n) {
    var i;
    var array = [];
    for (i = 0; i < n; i++) {
      array[i] = prompt('Введите имя', '');
      if (array[i] === null) {
        var deleted;
        deleted = array.pop();
        alert('Выполнение программы прервано');
        break;
      }
      if (array[i] === '') {
        var deleted;
        deleted = array.pop();
        alert('Введено пустое значение. Выполнение программы прервано');
        break;
      }
    }
    return array;
  }

  function check(name, array) {
    var i;
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] === name) {
        alert(name + ', вы успешно вошли.');
        return;
      }
    }
    alert('Ошибка: в доступе отказано');
    return;
  }

}