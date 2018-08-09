import React from 'react';
import { merge } from 'lodash';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();

    const updatedTodo = merge({}, this.props.todo, {
      done: !this.props.todo.done
    })
    this.props.receiveTodo(updatedTodo);
  }

  deleteTodo(e) {
    e.preventDefault();

    const { todo, removeTodo } = this.props;
    removeTodo(todo);
  }

  render() {
    const { title, body, done } = this.props.todo;

    return (
      <li>
        <h3>{title} - {done ? 'completed' : 'in progress'}</h3>
        <p>{body}</p>
        <button onClick={this.toggleTodo}>
          {done ? 'Undo' : 'Done'}
        </button>
        <button onClick={this.deleteTodo}>Delete</button>
      </li>
    );
  }
}