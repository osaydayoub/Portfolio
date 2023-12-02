import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { AiOutlineCopyright } from "react-icons/ai";
function Footer() {
    return (
        <div className='footer-container'>
            <p><AiOutlineCopyright /> Copyright Osayd Ayoub  2023</p>

            <div className='icon-list'>
                <a href="https://www.linkedin.com/"><FaLinkedin /></a>
                <RxDividerVertical />
                <a href="https://github.com/osaydayoub"><FaGithub /></a>
                <RxDividerVertical />
                <a href="https://twitter.com/home"><FaXTwitter /></a>
            </div>
        </div>
    )
}

export default Footer