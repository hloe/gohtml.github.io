'use strict';

function Model(data) {
  let self = this;

  self.data = data;

  self.addItem = function (item) {
    if (item.length === 0) {
      return;
    }

    self.data.push(item);

    return self.data;
  };

  self.removeItem = function (item) {
    let index = self.data.indexOf(item);

    if (index === -1) {
      return;
    }

    self.data.splice(index, 1);

    return self.data;
  };

}

function View(model) {
  let self = this;

  function init() {
    let wrapper = _.template($('#wrapper-template').html());

    $('body').append(wrapper);
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
}

function Controller(model, view) {
  let self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.item-delete', removeItem);

  function addItem() {
    let newItem = view.elements.input.val();

    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  }

  function removeItem() {
    let item = $(this).attr('data-value');

    model.removeItem(item);
    view.renderList(model.data);
  }
}

$(function () {
  let firstToDoList = ['Learn JavaScript', 'Drink coffee', 'Conquer the Galaxy'];
  let model = new Model(firstToDoList);
  let view = new View(model);
  let controller = new Controller(model, view);
});