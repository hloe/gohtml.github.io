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

  self.changeItem = function (oldValue, newValue) {
    let index = self.data.indexOf(oldValue);
    self.data[index] = newValue;
  }

}

function View(model) {
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
}

function Controller(model, view) {
  let self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  view.elements.listContainer.on('click', '.item-change', changeItem);


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

  function changeItem() {
    let newValue = '';

    let oldValue = $(this).attr('data-value');
    $(this).css('background', '#22272D');

    // Save changes when input losts the focus
    $(this).blur(function () {
      model.changeItem(oldValue, newValue);
      view.renderList(model.data);

      // Clear newValue for next changeItem()
      newValue = '';
      return;
    });

    // Save changes if Enter is pressed
    view.elements.listContainer.on('keypress', saveChanges);

    function saveChanges(event) {
      if (event.keyCode > 32) {
        newValue = newValue + String.fromCharCode(event.keyCode);
      }

      event = event || window.event;

      if (event.keyCode === 13) {
        model.changeItem(oldValue, newValue);
        view.renderList(model.data);

        // Clear newValue for next changeItem()
        newValue = '';
        return;
      }

      return newValue;
    }
  }



}

$(function () {
  let firstToDoList = ['Learn JavaScript', 'Buy beer', 'Conquer the Galaxy'];
  let model = new Model(firstToDoList);
  let view = new View(model);
  let controller = new Controller(model, view);
});