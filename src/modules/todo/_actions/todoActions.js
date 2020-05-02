import axios from 'axios';

export function todoAdd(todoName) {
  return dispatch =>
    dispatch({
      type: 'TODO_ADD',
      payload: todoName
    });
}

export function loadTodo() {
  return dispatch => {
    dispatch({
      type: 'LOADING'
    });

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        dispatch({
          type: 'TODO_LOAD',
          payload: res.data
        });

        dispatch({
          type: 'LOADED'
        });
      });
  };
}
