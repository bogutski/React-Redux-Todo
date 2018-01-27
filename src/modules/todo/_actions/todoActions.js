import axios from 'axios';

export function todoAdd(todo) {
  return dispatch =>
    dispatch({
      type: 'TODO_ADD',
      payload: todo,
    });
}

export function todoLoad() {
  return dispatch =>
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        dispatch({
          type: 'TODO_LOAD',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
}
