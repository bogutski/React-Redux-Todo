import React from 'react';
import { connect } from 'react-redux';

function TodoLIst(props) {
  return (
    <div>

      <ul>
        {
          props.todoList.map(el =>
            <li key={el.id}>{el.name}</li>)
        }
      </ul>

    </div>
  );
}

const mapStateToProps = state => ({
  todoList: state.todo.todoList,
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoLIst);
