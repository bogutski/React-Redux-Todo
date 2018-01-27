const initialState = {
  todoList: [
    { id: 1.1, name: 'Task 1' },
    { id: 2.1, name: 'Task 2' },
  ],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            ...action.payload,
            id: Math.random(),
          }],
      };

    case 'TODO_LOAD':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          ...action.payload
            .map(el => ({ id: el.id, name: el.title })),
        ],
      };

    default:
      return state;
  }
};

export default todo;
