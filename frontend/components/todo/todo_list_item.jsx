import React from 'react';

export default class TodoListItem extends React.Component {

  render() {
    const { title, body, done } = this.props;

    return (
      <li>
        <h3>{title} - {body}</h3>
      </li>
    );
  }
}