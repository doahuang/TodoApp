import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';

const msp = (state, { todoId }) => ({
  steps: stepsByTodoId(state, todoId),
  todoId
});

const mdp = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(msp, mdp)(StepList);