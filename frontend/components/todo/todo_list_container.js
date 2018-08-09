import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { 
  receiveTodo,
  removeTodo
} from '../../actions/todo_actions';

const msp = state => ({
  todos: allTodos(state)
});

const mdp = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(msp, mdp)(TodoList);