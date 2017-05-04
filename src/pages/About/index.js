import React, { Component } from 'react';

import { getAboutContent } from './../../data/About';
import TextCard from './../../components/TextCard';

var AboutContent = getAboutContent();

class About extends Component {
  render() {
    return (
      <div>
        <TextCard title={AboutContent.title} text={AboutContent.text}/>
      </div>
    );
  }
}

export default About;
