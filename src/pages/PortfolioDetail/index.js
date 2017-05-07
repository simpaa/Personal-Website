import React, { Component } from 'react';

import { getPortfolioData } from './../../data/Portfolio';
import './PortfolioDetail.css';
import CoverImage from './../../components/CoverImage';
import LinkButton from './../../components/LinkButton';
import SkillsList from './../../components/SkillsList';
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
    const ButtonText = `Go to ${currentPortfolioItem.type}`
    return (
      <div className="portfolio-detail">
        <CoverImage src={currentPortfolioItem.image} height="300px" />
        <div className="portfolio-detail-text-col">
          <h1>{currentPortfolioItem.title}</h1>
          <p>{currentPortfolioItem.description}</p>
          <SkillsList title="Skills" list={currentPortfolioItem.skills} />
          <LinkButton link={currentPortfolioItem.link} text={ButtonText} />
        </div>
      </div>
    );
  }
}

export default PortfolioDetail;
