import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className='contact-container'>
            <h2>Contact Us</h2>
            <form id="user-form">
                <label htmlFor="username">Name:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="text-id">Enter your message here...</label>
                <textarea id="text-id" rows="4" cols="40" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact