import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import projectsData from "./data/projects.js"

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div className='cards-container'>{
        projectsData.map((project) => {
          return (
            <Card project={project} />
          )
        })
      }
      </div>
      <Footer/>

    </>
  )
}

export default App
