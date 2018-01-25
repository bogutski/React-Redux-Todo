import React, { Component } from 'react';
import TodoLIst from './modules/todo/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoLIst />
      </div>
    );
  }
}

export default App;
