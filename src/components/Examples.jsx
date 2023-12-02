import React from 'react'
import { useState } from 'react';
import TabButton from './TabButton.jsx'
import examplesData from '../data/examples.js'

function Examples() {
  const [selectedTopic, setselectedTopic] = useState('Please click a button');
  function handleSelect(selectedButton) {
    switch (selectedButton) {
      case 'HTML':
        setselectedTopic(examplesData[0].description);
        break;
      case 'Javascript':
        setselectedTopic(examplesData[1].description);
        break;
      case 'React':
        setselectedTopic(examplesData[2].description);
        break;
    }
    
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={() => handleSelect('HTML')}>HTML</TabButton>
        <TabButton onSelect={() => handleSelect('Javascript')}>Javascript</TabButton>
        <TabButton onSelect={() => handleSelect('React')}>React</TabButton>
      </menu>
      <p>{selectedTopic}</p>
    </section>
  )
}

export default Examples