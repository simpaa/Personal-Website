import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CoverImage from './../CoverImage';
import { EXCERPT_LENGHT } from './../../Constants';

class ListItem extends Component {
  render() {
    const object = this.props.object;
    const descriptionExcerpt = object.description.substr(0, EXCERPT_LENGHT) + '...';
    const itemLink = `/portfolio/${this.props.id}`;

    return (
      <li className="portfolio-item">
        <Link to={itemLink}>
          <CoverImage src={object.image} />
          <div className="portfolio-text-col">
            <h1>{object.title}</h1>
            <p>{descriptionExcerpt}</p>
          </div>
        </Link>
      </li>
    );
  }
}

export default ListItem;
