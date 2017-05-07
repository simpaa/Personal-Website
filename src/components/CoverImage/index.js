import React, { Component } from 'react';

import './CoverImage.css';

class CoverImage extends Component {
  render() {
    const props = this.props;
    const height = props.height;

    let coverHeight = "200px";

    if (height) {
      coverHeight = height;
    }

    const coverStyle = {
      height: coverHeight,
      backgroundImage: "url(" + props.src + ")"
    }

    return (
      <div className="cover-image" style={coverStyle}></div>
    );
  }
}

export default CoverImage;
