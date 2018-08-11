import React from 'react';
import { merge } from 'lodash';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleStep = this.toggleStep.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
  }

  toggleStep(e) {
    e.preventDefault();

    const { step, receiveStep } = this.props;
    const updatedStep = merge({}, step, {
      done: !step.done
    });
    receiveStep(updatedStep);
  }

  deleteStep(e) {
    e.preventDefault();

    const { step, removeStep } = this.props;
    removeStep(step);
  }

  render() {
    const { step: { title, done }, order } = this.props;
    let style;
    if (done) style = { textDecoration: 'line-through' };

    return (
      <li>
        <span 
          onClick={this.toggleStep} 
          style={style}
        >
          { order + 1 }. { title } 
        </span>
        &nbsp;
        <button onClick={this.deleteStep}>Delete</button>
      </li>
    );
  }
}