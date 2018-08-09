import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from '../actions/step_actions';
import { merge } from 'lodash';

const stepsReducer = (state = testState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_STEPS:
      nextState = merge({}, state);
      action.steps.forEach(step => nextState[step.id] = step);
      return nextState;
    case RECEIVE_STEP:
      const newStep = {
        [action.step.id]: action.step
      };
      return merge({}, state, newStep);
    case REMOVE_STEP:
      nextState = merge({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;

var testState = {
  1: {
    id: 1,
    title: 'walk to store',
    done: false,
    todoId: 1
  },
  2: {
    id: 2,
    title: 'buy soap',
    done: false,
    todoId: 1
  }
};