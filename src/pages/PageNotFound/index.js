import React, { Component } from 'react';

import './PageNotFound.css';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="not-found-message">
        <h1>404</h1>
        <p>
          Sorry, no page found.
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
