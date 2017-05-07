import React, { Component } from 'react';

import ListItem from './ListItem';
import './PortfolioItem.css';

class PortfolioList extends Component {
  render() {

    let createListItem = (object, index) => {
      return <ListItem key={index + object} id={index} object={object} />;
    }

    return (
      <div>
        {this.props.items.map(createListItem)}
      </div>
    );
  }
}

export default PortfolioList;
