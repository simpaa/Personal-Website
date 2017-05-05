import React, { Component } from 'react';

import PortfolioList from './../../components/PortfolioList';
import { getPortfolioData } from './../../data/Portfolio';
var PortfolioContent = getPortfolioData();

class Portfolio extends Component {
  render() {
    return (
      <div>

        <PortfolioList items={PortfolioContent} />

      </div>
    );
  }
}

export default Portfolio;
