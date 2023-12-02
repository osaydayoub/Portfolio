import React from 'react'
import './Header.css'
import Link from './Link.jsx'
function Header() {
    return (
        <>
            <div className="navbar" id='home-id'>
                <h1>OSAYD AYOUB</h1>
                {/* <div className="header">OSAYD AYOUB</div> */}
                <div className="container">
                    {/* <Link href="./HOME/">HOME</Link> */}
                    <a className="box-1" href="#home-id">HOME</a>
                    <a className="box-1" href="#cards-id">Projects</a>
                    <a className="box-1" href="#contact-id">Contact Us</a>


                    {/* <a class="box-2" href="./ABOUT/">ABOUT</a>
                    <a class="box-3" href="./PORTFOLIO/">PORTFOLIO</a>
                    <a class="box-4" href="./CONTACT/">CONTACT</a> */}
                </div>
            </div>
        </>

    )
}

export default Header