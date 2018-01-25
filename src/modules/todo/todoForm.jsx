import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoAdd } from './_actions/todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {
        name: '',
        done: false,
      },
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();

    this.props.todoAdd(this.state.todo);

    this.setState({
      todo: {
        name: '',
        done: false,
      },
    });
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>

        <input
          type="text"
          value={this.state.todo.name}
          onChange={e => this.setState({
            todo: {
              name: e.target.value,
              done: false,
            },
          })}
        />

        <button type="submit">Add todo</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todo.todoList,
});

const mapDispatchToProps = dispatch => ({
  todoAdd: todo => dispatch(todoAdd(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
