import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';

const msp = (_, { todoId }) => ({
  todoId
});

const mdp = null;

export default connect(msp, mdp)(TodoDetailView);