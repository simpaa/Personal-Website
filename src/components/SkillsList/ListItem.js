import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li className="skills-list-item">
        <span>{this.props.text}</span>
      </li>
    );
  }
}

export default ListItem;
