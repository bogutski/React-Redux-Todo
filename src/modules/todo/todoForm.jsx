import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoAdd } from './_actions/todoActions';

class TodoForm extends Component {
  state = {
    name: ''
  };

  addTodo = e => {
    e.preventDefault();

    this.props.todoAdd_(this.state.name);

    this.setState({
      name: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          type="text"
          value={this.state.name}
          onChange={e =>
            this.setState({
              name: e.target.value
            })
          }
        />

        <button type="submit">Add todo</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  todoAdd_: todoName => dispatch(todoAdd(todoName))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
