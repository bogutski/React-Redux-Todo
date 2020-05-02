import React from 'react';
import TodoLIst from './modules/todo/todoList';
import TodoForm from './modules/todo/todoForm';
import TodoControls from './modules/todo/todoControls';

function App() {
  return (
    <div className="App">
      <TodoControls />
      <TodoForm />
      <TodoLIst />
    </div>
  );
}

export default App;
