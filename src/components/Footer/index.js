import React, { Component } from 'react';

import './footer.css';
import './../../font-awesome/css/font-awesome.min.css';

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">

        <p>
          &copy; Simon Andersson 2017. See the source code of this website on <a href="https://github.com/simpaa/Personal-Website" target="_blank">GitHub</a>.
        </p>

        <ul className="social-media">
          <li><a href="https://twitter.com/simpa__" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/s_andersson_/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="https://github.com/simpaa" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="mailto:support@s-andersson.se"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
        </ul>

      </footer>
    );
  }
}

export default Footer;
