import React from 'react'
import './Hero.css'
import softwareImg from '../assets/software.webp'

function Hero() {
  return (

    <div className='message-container'>
      <div className='message'>Welcome to my Portfolio,<br/> My name is Osayd Ayoub ,programmer lately interested in frontend programming.
        You can see and visit some of the last websites I have worked on!
      </div>
      <img className='software-img' src={softwareImg} alt="img" />



    </div>


  )
}

export default Hero