import React, { Component } from 'react';

import TextCard from './../../components/TextCard';
import { getContactContent } from './../../data/Contact';

const ContactContent = getContactContent();

class Contact extends Component {
  render() {
    return (
      <div>
        <TextCard title={ContactContent.title}>
          {ContactContent.text}
        </TextCard>
      </div>
    );
  }
}

export default Contact;
