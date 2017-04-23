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


// Save object in localStorage
localStorage.setItem('test', JSON.stringify(questions));