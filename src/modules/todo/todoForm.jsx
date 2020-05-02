import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoAdd } from './_actions/todoActions';

function TodoForm(props) {

  const [name, setName] = useState('');

  const addTodo = e => {
    e.preventDefault();
    props.todoAdd(name);
    setName('');
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button type="submit">Add todo</button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  todoAdd: todoName => dispatch(todoAdd(todoName))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
