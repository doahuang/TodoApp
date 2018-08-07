import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
} from '../actions/todo_actions';
import { merge } from 'lodash';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS:
      const nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO: 
      const newTodo = {
        [action.todo.id]: action.todo
      };
      return merge({}, state, newTodo);
    default:
      return state;
  }
};

export default todosReducer;