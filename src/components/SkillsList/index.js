import React, { Component } from 'react';

import ListItem from './ListItem';
import './SkillsList.css';

class SkillsList extends Component {
  render() {

    const createListItem = (text, index) => {
      return <ListItem key={index + text} text={text} />;
    }

    const title = this.props.title;
    let titleLabel = null;
    if (title) {
      titleLabel = <h3>{title}</h3>;
    }

    return (
      <div>
        {titleLabel}
        <ul>
          {this.props.list.map(createListItem)}
        </ul>
      </div>
    );
  }
}

export default SkillsList;
