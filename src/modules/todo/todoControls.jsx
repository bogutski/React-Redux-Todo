import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodo } from './_actions/todoActions';
import loader from './../../loader.svg';

class TodoControls extends Component {
  loadTodo = () => {
    this.props.loadTodo();
  };

  render() {
    return (
      <button
        disabled={this.props.buttonDisable}
        onClick={this.loadTodo}
        type="submit"
      >
        Load todos
        {this.props.loading && <img src={loader} height={15} />}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  buttonDisable: state.todo.buttonDisable,
  loading: state.todo.loading
});

const mapDispatchToProps = dispatch => ({
  loadTodo: () => dispatch(loadTodo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoControls);
