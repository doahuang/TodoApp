import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

export default class StepList extends React.Component {

  render() {
    const { steps, receiveStep, todoId } = this.props;
    const stepsItems = steps.map((step, order) => (
      <StepListItemContainer 
        key={step.id}
        step={step}
        order={order}
      />
    ));
    
    return (
      <div>
        <ul style={{padding: '10px', listStyle: 'none'}}>
          { stepsItems }
        </ul>
        <StepForm todoId={todoId} receiveStep={receiveStep}/>
      </div>
    );
  }
}