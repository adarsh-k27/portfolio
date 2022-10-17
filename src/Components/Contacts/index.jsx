import React from 'react'
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineInstagram
} from 'react-icons/ai'
import ContactBox from './ContactBox'

import './style.css'
const Contacts = () => {
  const data = [
    {
      icon: <AiOutlineMail className='icons'/>,
      link: 'adarshk0027@gmail.com',
      text: 'Email'
    },
    {
      icon: <AiOutlineWhatsApp className='icons'/>,
      link: 'https://api.whatsapp.com/send?phone=7592053980',
      text: 'Whatsapp'
    },
    {
      icon: <AiOutlineInstagram className='icons'/>,
      link: '',
      text: 'Instagram'
    }
  ]
  return (
    <section id='Contact'>
      <h5>Keep In Touch</h5>
      <h2>My Contacts</h2>
      <div className='container contact__container'>
        <div className='contact-list'>
          {data.map((item, index) => (
            <ContactBox icon={item.icon} link={item.link} text={item.text} />
          ))}
        </div>
        <form>
          <input type={"text"} placeholder="Full Name" required></input>
          <input type={"email"} placeholder="Your Email" required></input>
          <textarea name='message'  rows="7" placeholder='Your Message' required></textarea>
          <button type={"submit"} className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}
export default Contacts
