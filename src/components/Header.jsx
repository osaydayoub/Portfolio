import React from 'react'
import './Header.css'
import Link from './Link.jsx'
function Header() {
    return (
        <>
            <div className="navbar">
                <div className="header">OSAYD AYOUB</div>
                <div className="container">
                    {/* <Link href="./HOME/">HOME</Link> */}
                    <a className="box-1" href="./HOME/">HOME</a>
                    {/* <a class="box-2" href="./ABOUT/">ABOUT</a>
                    <a class="box-3" href="./PORTFOLIO/">PORTFOLIO</a>
                    <a class="box-4" href="./CONTACT/">CONTACT</a> */}
                </div>
            </div>
        </>

    )
}

export default Header