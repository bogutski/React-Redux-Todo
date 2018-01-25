export function todoAdd(todo) {
  return dispatch =>
    dispatch({
      type: 'TODO_ADD',
      payload: todo,
    });
}
