import React, { Component } from 'react';
import './textcard.css';

class TextCard extends Component {
  render() {
    return (
      <article className="text-card">
        <h1>{this.props.title}</h1>
        <p>{this.props.children}</p>
      </article>
    );
  }
}

export default TextCard;
