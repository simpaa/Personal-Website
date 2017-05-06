import React, { Component } from 'react';
import { getPortfolioData } from './../../data/Portfolio';
import './PortfolioDetail.css';
var PortfolioContent = getPortfolioData();

class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {currentPortfolioItem: this.getDataFromId()}
  }

  getDataFromId() {
    return PortfolioContent[this.props.match.params.id];
  }

  render() {
    const currentPortfolioItem = this.state.currentPortfolioItem;
    return (
      <div className="portfolio-detail">
        <h1>{currentPortfolioItem.title}</h1>
        <p>{currentPortfolioItem.description}</p>
        <div className="item-link">
          <a href={currentPortfolioItem.link} target="_blank">Link to {currentPortfolioItem.type}</a>
        </div>
      </div>
    );
  }
}

export default PortfolioDetail;
