import {createStore, compose} from 'redux';

import rootReducer from './reducers/index';
import tasks from './data/tasks';


const defaultState = (localStorage.getItem('tasks') === null) ? {tasks} : {tasks: JSON.parse(localStorage.getItem('tasks'))};

// Add initial tasks into localStorage
if (localStorage.getItem('tasks') === null) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;