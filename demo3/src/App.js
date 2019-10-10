import React from 'react';
import TodoList from './TodoList.js'
import {Provider} from 'react-redux'
import store from './store/index.js'

function App() {
  return (
    <div>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
