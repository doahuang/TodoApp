import React from 'react';
import StepListItemContainer from './step_list_item_container';

export default class StepList extends React.Component {

  render() {
    const { steps, receiveStep } = this.props;
    const stepsItems = steps.map(step => (
      <StepListItemContainer 
        key={step.id}
        step={step}
      />
    ));
    
    return (
      <div>
        <ol style={{padding: '10px 30px'}}>
          { stepsItems }
        </ol>
      </div>
    );
  }
}