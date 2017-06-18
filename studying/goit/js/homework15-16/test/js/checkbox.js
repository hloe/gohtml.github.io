'use strict';

let questionsArr = [
  {
    "question": "Какие из этих свойств элемента могут указывать на текстовый узел?",
    "answers": [
      "firstChild",
      "parentNode",
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
  }
];