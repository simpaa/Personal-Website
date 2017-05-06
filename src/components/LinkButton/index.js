import React, { Component } from 'react';

import './LinkButton.css';

class LinkButton extends Component {
  render() {
    return (
      <div className="link-button">
        <a href={this.props.link} target="_blank">{this.props.text}</a>
      </div>
    );
  }
}

export default LinkButton;
