function pow() {

  'use strict';

  var integerNumber = takeNumber();
  if (integerNumber) {
    var integerPower = takePower();
    if (integerPower) {
      var result = calculate(integerNumber, integerPower);

      alert('Число ' + integerNumber + ' в степени ' + integerPower + ' равно ' + result);
    }
  }

  function takeNumber() {

    var num = prompt('Введите целое число', '');

    while (true) {
      if (Number.isInteger(+num)) {
        break;
      } else if (num === null) {
        alert('Программа завершена');
        return '';
      } else {
        num = prompt('Все же введите целое число', '');
      }
    }
    return +num;
  }

  function takePower() {

    var power = prompt('Введите степень (целое значение)', '');

    while (true) {
      if (Number.isInteger(+power)) {
        break;
      } else if (power === null) {
        alert('Программа завершена');
        break;
      } else {
        power = prompt('Все же введите целое значение', '');
      }
    }
    return +power;
  }

  function calculate(number, power) {

    if (power === 0) {
      return 1;
    } else if (power > 0) {
      var serviceVariable = 1;
      var i;
      for (i = 1; i <= power; i++) {
        serviceVariable = serviceVariable * number;
      }
    } else {
      var serviceVariable = 1;
      var i;
      var servicePower = Math.abs(power);
      for (i = 1; i <= servicePower; i++) {
        serviceVariable = serviceVariable / number;
      }
    }

    return serviceVariable;
  }


}