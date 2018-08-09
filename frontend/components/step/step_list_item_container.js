import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { 
  receiveStep,
  removeStep
} from '../../actions/step_actions';

const msp = null;

const mdp = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: step => dispatch(removeStep(step))
});

export default connect(msp, mdp)(StepListItem);