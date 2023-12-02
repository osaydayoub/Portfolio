import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer-container'>
        <h3>Copyright Osayd Ayoub 2023</h3>
        <a href="https://www.linkedin.com/"><FaLinkedin/></a>
        <a href="https://github.com/osaydayoub"><FaGithub /></a>
        <a href="https://twitter.com/home"><FaXTwitter /></a>



        
    </div>
  )
}

export default Footer