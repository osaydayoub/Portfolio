import React from 'react'
import { useState } from 'react';
import examplesData from '../data/examples.js'
import './Examples.css'

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
      <div className='buttons-container'>
        <button onClick={() => handleSelect('HTML')}>HTML</button>
        <button onClick={() => handleSelect('Javascript')}>Javascript</button>
        <button onClick={() => handleSelect('React')}>React</button>
      </div>
      <div className='show-box'>{selectedTopic}</div>
    </section>
  )
}

export default Examples