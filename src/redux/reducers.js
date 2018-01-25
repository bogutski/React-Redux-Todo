import { combineReducers } from 'redux';
import todo from './../modules/todo/_reducers/todoReducers';

// Combine Reducers
const reducers = combineReducers({
  todo,
});

export default reducers;
