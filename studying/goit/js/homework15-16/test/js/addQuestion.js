'use strict';

// Create class "Test"
let obj = {
  question: "Вопрос не указан",
  answers: "Ответы не указан",
  "right answers": "Не указаны"
}

function Test(name) {
  this.name = name;
}

Test.prototype = obj;

// Create class TestRadio
let TestRadio = {
  type: 'radio'
}


TestRadio.prototype = Test;


// Create class TestCheckbox
let TestCheckbox = {
  type: 'checkbox'
}
TestCheckbox.prototype = Test;



// Set question from the form
let send = document.getElementsByClassName('btn')[0];

send.addEventListener('click', createObject);


function createObject() {
  let newObj = new Test;
  newObj["right answers"] = [];
  newObj.answers = [];

  // Set question
  let questionText = document.getElementById('question').value;
  if (questionText) {
    newObj.question = questionText;
  }

  //Set answer 1
  let answerText1 = document.getElementById('answer1').value;
  if (answerText1) {
    newObj.answers.push(answerText1);
  }
  // Check whether it's right answer
  let checkbox1 = document.getElementsByName('checkbox1');
  if (checkbox1[0].checked) {
    newObj["right answers"].push(answerText1);
  }

  //Set answer 2
  let answerText2 = document.getElementById('answer2').value;
  if (answerText2) {
    newObj.answers.push(answerText2);
  }
  // Check whether it's right answer
  let checkbox2 = document.getElementsByName('checkbox2');
  if (checkbox2[0].checked) {
    newObj["right answers"].push(answerText2);
  }

  // Set answer 3
  let answerText3 = document.getElementById('answer3').value;
  if (answerText3) {
    newObj.answers.push(answerText3);
  }
  // Check whether it's right answer
  let checkbox3 = document.getElementsByName('checkbox3');
  if (checkbox3[0].checked) {
    newObj["right answers"].push(answerText3);
  }

  // Check whether there are right answers
  if (newObj["right answers"].length == 0) {
    alert('Ошибка: не отмечен правильный ответ');
  }

  //Add object to array
  questionsArr.push(newObj);
  console.log(questionsArr);


  // Save array in localStorage
  localStorage.setItem('questionsArray', JSON.stringify(questionsArr));
}




// Take object from localStorage
let test = localStorage.getItem('questionsArray');
let data = JSON.parse(test);

//Show randow array element
let i = Math.floor(Math.random() * (data.length - 0 + 1)) + 0;

console.log(data[i]);