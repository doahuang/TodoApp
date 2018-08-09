import React from 'react';
import { merge } from 'lodash';
import timestampId from '../../util/id_generator';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '', 
      body: '',
      done: false
    }

    this.submitTodo = this.submitTodo.bind(this);
  }

  submitTodo(e) {
    e.preventDefault();

    const newTodo = merge({}, this.state, {id: timestampId()});
    this.props.receiveTodo(newTodo);

    this.setState({
      title: '',
      body: ''
    });
  }

  update(input) {
    return e => this.setState({
      [input]: e.currentTarget.value
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <form onSubmit={this.submitTodo}>
        <input 
          type="text" 
          value={title} 
          placeholder='Title' 
          onChange={this.update('title')} 
          required
        />
        <input 
          type="text" 
          value={body} 
          placeholder='Body' 
          onChange={this.update('body')} 
          required
        />
        <button>Add Todo</button>
      </form>
    );
  }
}