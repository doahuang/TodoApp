import React from 'react';
import { merge } from 'lodash';
import TodoDetailViewContainer from './todo_detail_view_container';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();

    const { todo, receiveTodo } = this.props;
    const updatedTodo = merge({}, todo, {
      done: !todo.done
    });
    receiveTodo(updatedTodo);
  }

  deleteTodo(e) {
    e.preventDefault();

    const { todo, removeTodo } = this.props;
    removeTodo(todo);
  }

  render() {
    const { id, title, body, done } = this.props.todo;

    return (
      <li style={{margin: '10px 0'}}>
        <strong>{title} - {body} </strong>
        <button onClick={this.toggleTodo}>
          {done ? 'Undo' : 'Done'}
        </button>
        &nbsp;
        <button onClick={this.deleteTodo}>Delete</button>
        <TodoDetailViewContainer todoId={id} />
      </li>
    );
  }
}