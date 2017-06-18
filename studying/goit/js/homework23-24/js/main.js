requirejs.config({
  paths: {
    'jquery': 'https://code.jquery.com/jquery-1.12.4.min'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'lodash': {
      exports: 'lodash'
    }
  }
});

require(
	[
		'model',
		'view',
		'controller',
		'jquery'
	],
  function (Model, View, Controller, $) {
    let firstToDoList = ['Learn JavaScript', 'Buy beer', 'Conquer the Galaxy'];
    let model = new Model(firstToDoList);
    let view = new View(model);
    let controller = new Controller(model, view);
  }
);