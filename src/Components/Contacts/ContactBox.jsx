import React from 'react'

 const ContactBox = ({icon,link,text}) => {
  return (
    <div className='contact-box'>
        {icon}
        <h2>{text}</h2>
        <a href={link}>Send Message</a>
    </div>
  )
}
export default ContactBox
