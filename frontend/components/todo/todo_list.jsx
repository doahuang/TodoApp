import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem 
        key={todo.id}
        todo={todo}
        receiveTodo={receiveTodo}
        removeTodo={removeTodo}
      />
    ));

    return (
      <div style={{display: 'grid', justifyContent: 'center'}}>
        <h1>Todo List</h1>
        <TodoForm receiveTodo={receiveTodo}/>
        <ul style={{padding: '0', listStyle: 'none'}}>{ todoItems }</ul>
      </div>
    );
  }
}

export default TodoList;