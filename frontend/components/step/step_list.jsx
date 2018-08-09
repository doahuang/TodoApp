import React from 'react';

export default class StepList extends React.Component {

  render() {
    const { steps, receiveStep, removeStep } = this.props;
    const stepsItems = steps.map(step => {
      return <li key={step.id}>{step.title}</li>;
    });
    
    return (
      <ol style={{padding: '20px'}}>{ stepsItems }</ol>
    );
  }
}