import React, { Component } from 'react';
import TodoLIst from './modules/todo/todoList';
import TodoForm from './modules/todo/todoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoLIst />
      </div>
    );
  }
}

export default App;
