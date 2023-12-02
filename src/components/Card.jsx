import React from 'react'
import './Card.css'

function Card({project}) {
  return (
    <div className='card-container'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href={project.link}><img className='card-img' src={project.img} alt="img" /></a>
        {/* <a href={project.link}>visit my website</a>
        <img className='card-img' src={project.img} alt="img" /> */}
        
    </div>
  )
}

export default Card