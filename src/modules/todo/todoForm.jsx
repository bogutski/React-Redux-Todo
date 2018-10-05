import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoAdd } from './_actions/todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();

    this.props.todoAdd(this.state.name);

    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>

        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({
            name: e.target.value,
          })}
        />

        <button type="submit">Add todo</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  todoAdd: todoName => dispatch(todoAdd(todoName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
