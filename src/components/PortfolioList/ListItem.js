import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li className="portfolio-item">
        <h1>{this.props.object.title}</h1>
        <p>{this.props.object.description}</p>
      </li>
    );
  }
}

export default ListItem;
