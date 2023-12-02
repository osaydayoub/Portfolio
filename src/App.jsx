import { useState } from 'react'
import './App.css'
import projectsData from "./data/projects.js"
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import Contact from './components/Contact.jsx'
import Examples from './components/Examples.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div className='cards-container'>{
        projectsData.map((project) => {
          return (
            <Card key={project.id} project={project} />
          )
        })
      }
      </div>
      <Contact/>
      <Examples/>
      <Footer/>

    </>
  )
}

export default App
