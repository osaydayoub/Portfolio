import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className='contact-container'>
            <h2>Contact Us</h2>
            <form id="user-form">
                <label for="username">Name:</label>
                <input type="text" id="username" name="username" required />
                <div class="error-message" id="usernameError"></div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <textarea rows="4" cols="40" name="description">
                    Enter your message here...
                </textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact