import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <p>
          &copy; Simon Andersson 2017. See the source of this web page on <a href="https://github.com/simpaa/Personal-Website" target="_blank">GitHub</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;
