export function todoAdd(todoName) {
  return dispatch =>
    dispatch({
      type: 'TODO_ADD',
      payload: todoName,
    });
}
