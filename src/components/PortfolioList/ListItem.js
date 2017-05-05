import React, { Component } from 'react';
import { EXCERPT_LENGHT } from './../../Constants';

class ListItem extends Component {
  render() {

    let description = this.props.object.description

    return (
      <li className="portfolio-item">
        <h1>{this.props.object.title}</h1>
        <p>{description.substr(0, EXCERPT_LENGHT) + '...'}</p>
      </li>
    );
  }
}

export default ListItem;
