import React, { useEffect,useContext } from 'react'
import CVA from './CVA'
import Me from '../../assets/me.png'
import './style.css'
import HeaderSocials from './HeaderSocials'
import {MY_CONTEXT} from '../../Context'
function Header () {
  const {MyDetails}=useContext(MY_CONTEXT).state
  return (
    <header>
      <div className='container  header__container'>
        <h5>Hello I'm </h5>
        <h1>Adarsh K Radhakrishnan</h1>
        <h5>Full Stack Developer</h5>

        <CVA />
        <HeaderSocials Socials={MyDetails.SocialMedia}/>
        <a href='' className='scroll_down'>
          scroll Down
        </a>

        <div className='me'>
          <img src={Me} alt='iam here' />
        </div>
      </div>
    </header>
  )

  
}

export default Header
