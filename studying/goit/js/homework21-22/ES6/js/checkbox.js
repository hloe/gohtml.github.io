// This file loads object into localStorage

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
    "right answers": [1,4]
  },
  {
    "question": "Как получить полную ширину блочного DOM-элемента, если у него есть border и padding?",
    "answers": [
      "parseInt(elem.style.width)",
      "parseInt(getComputedStyle(elem).width)",
      "elem.offsetWidth",
      "elem.clientWidth"
    ],
    "right answers": [1,2]
  },
  {
    "question": "Браузер вызывает setInterval и setTimeout гораздо реже, чем обычно, если…",
    "answers": [
      "Вкладка, в которой работает JavaScript, не видна и находится в фоновом режиме.",
      "Посетитель зашёл с ноутбука, с питанием от батареи.",
      "В обоих этих случаях."
    ],
    "right answers": [2]
  },
  {
    "question": "Можно ли скриптом перевести посетителя на другую страницу сайта?",
    "answers": [
      "Да, куда угодно.",
      "Да, но только в рамках текущего сайта.",
      "Нет, нельзя."
    ],
    "right answers": [0]
  },
  {
    "question": "Какое событие не может быть вызвано кликом мыши?",
    "answers": [
      "onfocus",
      "onclick",
      "onkeydown",
      "onmousedown"
    ],
    "right answers": [2]
  }
];


// Save object in localStorage
localStorage.setItem('test', JSON.stringify(questions));