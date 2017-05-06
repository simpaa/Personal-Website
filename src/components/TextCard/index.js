import React, { Component } from 'react';
import './textcard.css';

class TextCard extends Component {
  render() {
    return (
      <div className="text-card">
        <h1>{this.props.title}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default TextCard;
