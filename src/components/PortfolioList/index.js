import React, { Component } from 'react';

import ListItem from './ListItem';
import './PortfolioItem.css';

class PortfolioList extends Component {
  render() {

    let createListItem = (object, index) => {
      return <ListItem key={index + object} id={index} object={object} />;
    }

    return (
      <ul>
        {this.props.items.map(createListItem)}
      </ul>
    );
  }
}

export default PortfolioList;
