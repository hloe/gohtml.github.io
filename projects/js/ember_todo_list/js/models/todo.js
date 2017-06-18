Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Buy milk',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Learn Ember.js',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Conquer the Galaxy',
    isCompleted: false
  }
];