import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoLIst extends Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todo.todoList
});

export default connect(
  mapStateToProps,
  null
)(TodoLIst);
