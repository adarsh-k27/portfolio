import React from 'react'
import './style.css'
import {AiOutlineGithub,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
 const Footer = () => {
  return (
    <footer className="footer">
           <div className='footer-wrapper container'>
                <div className='each-footer'>
                  <h1 className='title'>adarsh k</h1>
                  <h6>im a programmer</h6>
                  <h6>web developer</h6>
                  <div className='socials'>
                    <AiOutlineGithub/>
                    <AiOutlineInstagram/>
                    <AiOutlineTwitter/>
                  </div>
                </div>

                <div className='each-footer'>
                  <h1 className='title'>service</h1>
                  <h6>frontEnd Developer</h6>
                  <h6>backEnd Developer</h6>
                </div>
 

                <div className='each-footer'>
                  <h1 className='title'>contact</h1>
                  <h6>Kannur, Kerala</h6>
                  <h6> 7592053980</h6>
                  <h6>adarshk0027@gmail.com</h6>
                </div>

           </div>
    </footer>
  )
}
export default Footer