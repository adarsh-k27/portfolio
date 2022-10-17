import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
 const HeaderSocials = ({Socials}) => {
  return (
    <div className='header__socials'>
      <a href={Socials&& Socials[0].link} target={"_blank"}><BsLinkedin/></a>
      <a href={Socials &&  Socials[1].link} target={"_blank"}><BsGithub/></a>
      <a href={Socials && Socials[2].link} target={"_blank"}><FaInstagramSquare/></a>
    </div>
  )
}
export default HeaderSocials;
