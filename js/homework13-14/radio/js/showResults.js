'use strict';

let submit = document.getElementsByClassName('btn')[0];

//submit.addEventListener('click', showResults);

let answeredQuestions = document.getElementsByClassName('question');

//Check answers
function checkResults() {
  let sum = 0;

  for (let i = 0; i < answeredQuestions.length; i++) {
    //Get right answer position
    let answers = questions[i]['answers'];
    let rightAnswer = questions[i]['right answer'];
    let rightAnswerPosition = answers.indexOf(rightAnswer);


    //Get selected answer position
    let inputs = answeredQuestions[i].getElementsByTagName('input');
    let selectedValue;
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].type == 'radio' && inputs[j].checked) {
        selectedValue = +inputs[j].value;
      }
    }

    //
    if (selectedValue === undefined) {
      sum = -1;
      break;
    }

    // Count right answers
    if (rightAnswerPosition === selectedValue) {
      sum++;
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

  //  function showResults(event) {
  event.preventDefault();

  // Count results
  let sum = checkResults();


  // Show results
  let paragraph = document.createElement('p');
  paragraph.className = 'paragraph';
  if (sum !== -1) {
    paragraph.innerHTML = 'Правильных ответов ' + sum + ' из ' + answeredQuestions.length + '-ти';
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