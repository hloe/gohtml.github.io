'use strict';

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
              console.log(inputsChoose[n]);
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