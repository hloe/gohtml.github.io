define(
  'view', ['jquery', 'lodash'],
  function () {

    return function View(model) {
      let self = this;

      function init() {
        let container = _.template($('#container-template').html());

        $('body').append(container);
        self.elements = {
          input: $('.item-value'),
          addBtn: $('.item-add'),
          listContainer: $('.item-list')
        };
        self.renderList(model.data);
      };

      self.renderList = function (data) {

        let list = _.template($('#list-template').html())({
          data: data
        });

        self.elements.listContainer.html(list);
      };

      init();
    };
  }
);