'use strict';

let questions = [
  {
    "question": "Какие из этих свойств элемента могут указывать на текстовый узел?",
    "answers": [
      "firstElementChild",
      "firstChild",
      "parentNode",
      "parentElement",
      "nextSibling"
    ],
    "right answers": [
      "firstChild",
      "nextSibling"
    ]
  },
  {
    "question": "Как получить полную ширину блочного DOM-элемента, если у него есть border и padding?",
    "answers": [
      "parseInt(elem.style.width)",
      "parseInt(getComputedStyle(elem).width)",
      "elem.offsetWidth",
      "elem.clientWidth"
    ],
    "right answers": [
      "parseInt(getComputedStyle(elem).width)",
      "elem.offsetWidth"
    ]
  },
  {
    "question": "Браузер вызывает setInterval и setTimeout гораздо реже, чем обычно, если…",
    "answers": [
      "Вкладка, в которой работает JavaScript, не видна и находится в фоновом режиме.",
      "Посетитель зашёл с ноутбука, с питанием от батареи.",
      "В обоих этих случаях."
    ],
    "right answers": [
      "В обоих этих случаях."
    ]
  },
  {
    "question": "Можно ли скриптом перевести посетителя на другую страницу сайта?",
    "answers": [
      "Да, куда угодно.",
      "Да, но только в рамках текущего сайта.",
      "Нет, нельзя."
    ],
    "right answers": [
      "Да, куда угодно."
    ]
  },
  {
    "question": "Какое событие не может быть вызвано кликом мыши?",
    "answers": [
      "onfocus",
      "onclick",
      "onkeydown",
      "onmousedown"
    ],
    "right answers": [
      "onkeydown"
    ]
  }
];


// LoDash. Write template
let tmpl = document.getElementById('test').innerHTML.trim();
tmpl = _.template(tmpl);

document.getElementsByClassName('container')[0].innerHTML = tmpl({
  list: questions
});

let submit = document.getElementsByClassName('btn')[0];
let answeredQuestions = document.getElementsByClassName('question');

//Check answers
function checkResults() {
  let sum = 0;

  for (let i = 0; i < answeredQuestions.length; i++) {
    //Get right answer position
    let answers = questions[i]['answers'];
    let rightAnswer = questions[i]['right answers'];

    //Get selected answer position
    let inputs = answeredQuestions[i].getElementsByTagName('input');

    let selectedValue;

    // Count correct answers in questions with 1 correct answer
    if (rightAnswer.length === 1) {
      let rightAnswerString = rightAnswer[0];
      let rightAnswerPosition = answers.indexOf(rightAnswerString);

      for (let j = 0; j < inputs.length; j++) {
        if (inputs[j].checked) {
          selectedValue = +inputs[j].value;
        }
      }

      //Check not answering questions
      if (selectedValue === undefined) {
        sum = -1;
        break;
      }

      //  Count right answers
      if (rightAnswerPosition === selectedValue) {
        sum++;
      }


      // Count correct answers in questions with several correct answers
    } else {
      let amount = 0;
      let inputsChoose = [];
      for (let j = 0; j < inputs.length; j++) {
        if (inputs[j].checked) {
          inputsChoose[j] = answers[j];
          amount++;
        }
      }

      //Check not answering questions
      if (amount === 0) {
        sum = -1;
        break;
      }


      if (amount === rightAnswer.length) {
        let correctSum = 0;

        for (let n = 0; n < inputsChoose.length; n++) {
          for (let j = 0; j < rightAnswer.length; j++) {
            if (rightAnswer[j] === inputsChoose[n]) {
              correctSum++;
            }
          }
        }

        if (correctSum === amount) {
          sum++;
        }
      }
    }

  }

  return (sum);
}

// Create modal window
submit.addEventListener('click', showModalWin);

function showModalWin(event) {

  event.preventDefault();

  let shadow = document.createElement('div');
  shadow.className = 'shadow';
  document.body.appendChild(shadow);

  let modalWin = document.createElement('div');
  modalWin.className = 'modalwin';
  document.body.appendChild(modalWin);

  //Show modal win
  modalWin.style.display = 'block';

  event.preventDefault();

  // Count results
  let sum = checkResults();


  // Show results
  let paragraph = document.createElement('p');
  paragraph.className = 'paragraph';
  if (sum !== -1) {
    paragraph.innerHTML = 'Правильных ответов ' + sum + ' из ' + answeredQuestions.length;
  } else {
    paragraph.innerHTML = 'Выберите ответ на каждый вопрос';
  }
  modalWin.appendChild(paragraph);


  //Add close button
  let buttonClose = document.createElement('button');
  buttonClose.classList = 'btn btn-success btn-close';
  buttonClose.innerHTML = 'Закрыть';
  modalWin.appendChild(buttonClose);

  // Hide modal window
  shadow.addEventListener('click', clearForm);
  buttonClose.addEventListener('click', clearForm);

  // Clear form
  shadow.addEventListener('click', hide);
  buttonClose.addEventListener('click', hide);


  function hide() {
    shadow.parentNode.removeChild(shadow);
    modalWin.style.display = 'none';
    return false;
  };

  function clearForm() {
    document.getElementsByTagName('form')[0].reset();
  }
}