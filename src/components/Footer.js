import React from 'react'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-icons'>
                    <i className='fa-brands fa-google'></i>
                    <i className='fa-brands fa-facebook'></i>
                    <i className='fa-brands fa-twitter'></i>
                </div>
                <div className='footer-links'>
                    <ul className='footer-link'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='footer-contact'>
                    <span>+91 1234567890</span><br></br>
                    <span>0800 0800 0800 0800</span><br></br>
                    <span>info@example.com</span>
                </div>
            </div>

            <div className='footer-bottom'>
                <span className='footer-detail'>The company warehouse ltd.</span>
                <span className='footer-detail'>Registered company number</span>
                <span className='footer-detail'>company address: lorem lorem lorem lorem</span>
            </div>
        </>
    )
}

export default Footer