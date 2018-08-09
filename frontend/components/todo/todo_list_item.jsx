import React from 'react';
import { merge } from 'lodash';
import TodoDetailViewContainer from './todo_detail_view_container';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      detail: false
    };

    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    
    this.setState({
      detail: !this.state.detail
    });
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
    let detail;
    if (this.state.detail) detail = <TodoDetailViewContainer todoId={id} />;

    return (
      <li style={{margin: '20px 0'}}>
        <strong style={{ cursor: 'pointer' }} onClick={this.toggleDetail}>{title} - {body} </strong>
        <button onClick={this.toggleTodo}>
          {done ? 'Undo' : 'Done'}
        </button>
        &nbsp;
        <button onClick={this.deleteTodo}>Delete</button>
        { detail }
      </li>
    );
  }
}