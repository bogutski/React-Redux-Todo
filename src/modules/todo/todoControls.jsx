import React from 'react';
import { connect } from 'react-redux';
import { loadTodo } from './_actions/todoActions';
import loader from './../../loader.svg';

function TodoControls(props) {
  return (
    <button
      disabled={props.buttonDisable}
      onClick={props.loadTodo}
      type="submit"
    >
      Load todos
      {props.loading && <img src={loader} height={15} alt='loader' />}
    </button>
  );

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
