import React from 'react'
import './Header.css'
import Link from './Link.jsx'
function Header() {
    return (
        <>
            <div className="navbar" id='home-id'>
                <h1>OSAYD AYOUB</h1>
                <div className="container">
                    <a className="box-1" href="#home-id">HOME</a>
                    <a className="box-1" href="#cards-id">Projects</a>
                    <a className="box-1" href="#contact-id">Contact Us</a>
                </div>
            </div>
        </>

    )
}

export default Header