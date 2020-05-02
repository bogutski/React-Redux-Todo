import React from 'react';
import { connect } from 'react-redux';

function TodoLIst(props) {
  return (
    <ul>
      {props.todoList.map(el => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  todoList: state.todo.todoList
});

export default connect(
  mapStateToProps,
  null
)(TodoLIst);
