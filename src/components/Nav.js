import React from 'react'
import '../css/nav.css'

function Nav() {
    
  return (
    <>

        <div className='nav'>
            <div className='left-nav'>
                <img src='https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y' width="50" />
            </div>

            <div className='mid-nav'>
                <ul className='header-link'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='right-nav'>
                <i className='fa-brands fa-google'></i>
                <i className='fa-brands fa-facebook'></i>
                <i className='fa-brands fa-twitter'></i>
            </div>
        </div>
        <div className='home'>
            <span className='home-active'>Home/</span>
        </div>
        <div className='triangle'></div>
    </>
  )
}


export default Nav