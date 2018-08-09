import React from 'react';
import StepListContainer from '../step/step_list_container';

export default class TodoDetailView extends React.Component {

  render() {
    const { todoId } = this.props;

    return (
      <div>
        <StepListContainer todoId={todoId} />
      </div>
    );
  }
}