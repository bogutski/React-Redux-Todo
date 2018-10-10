import React, { Component } from 'react';
import TodoLIst from './modules/todo/todoList';
import TodoForm from './modules/todo/todoForm';
import TodoControls from './modules/todo/todoControls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoControls />
        <TodoForm />
        <TodoLIst />
      </div>
    );
  }
}

export default App;
