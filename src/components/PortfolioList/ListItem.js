import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EXCERPT_LENGHT } from './../../Constants';

class ListItem extends Component {
  render() {

    let description = this.props.object.description
    let descriptionExcerpt = description.substr(0, EXCERPT_LENGHT) + '...'

    return (
      <li className="portfolio-item">
        <Link to={`/portfolio/${this.props.id}`}>
          <div className="portfolio-text-col">
            <h1>{this.props.object.title}</h1>
            <p>{descriptionExcerpt}</p>
          </div>
        </Link>
      </li>
    );
  }
}

export default ListItem;
