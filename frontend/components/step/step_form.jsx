import React from 'react';
import { merge } from 'lodash';
import timestampId from '../../util/id_generator';

export default class StepForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      done: false,
      todoId: this.props.todoId
    };

    this.submitStep = this.submitStep.bind(this);
  }

  update(input) {
    return e => this.setState({ [input]: e.currentTarget.value });
  }

  submitStep(e) {
    e.preventDefault();

    const newStep = merge({}, this.state, { id: timestampId() });
    this.props.receiveStep(newStep);

    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.submitStep}>
        <input 
          type="text"
          value={title}
          placeholder='New Step'
          onChange={this.update('title')}
          required
        />
        <button>Add Step</button>
      </form>
    );
  }
}