import React from 'react';
import { merge } from 'lodash';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e) {
    e.preventDefault();

    const { step, receiveStep } = this.props;
    const updatedStep = merge({}, step, {
      done: !step.done
    });
    receiveStep(updatedStep);
  }

  render() {
    const { title, done } = this.props.step;
    let style;
    if (done) style = { textDecoration: 'line-through' };

    return (
      <li style={style}>
        <span onClick={this.toggleStep}>
          { title } </span>
        <button>delete</button>
      </li>
    );
  }
}