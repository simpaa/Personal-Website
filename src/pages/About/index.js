import React, { Component } from 'react';

import { getAboutContent } from './../../data/About';
import TextCard from './../../components/TextCard';

const AboutContent = getAboutContent();

class About extends Component {
  render() {
    return (
      <div>
        <TextCard title={AboutContent.title} >
          {AboutContent.text}
        </TextCard>
      </div>
    );
  }
}

export default About;
