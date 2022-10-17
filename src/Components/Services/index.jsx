import React from 'react'
import {BsCheck2} from 'react-icons/bs'
import './style.css'
 const Services = () => {
  return (
    <section id="Services">
     <h5> What I Offer</h5>
     <h2>My Services</h2>
       <div className='container service__container'>
          <article className='service'>
             <div className='title'>
              <h3>Web Development</h3>
             </div>
             <ul>
              <li><BsCheck2 className='icon'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime</li>
              <li><BsCheck2 className='icon'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime </li>
              <li><BsCheck2 className='icon'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime </li>
              <li><BsCheck2 className='icon'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime </li>
              <li><BsCheck2 className='icon'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime </li>
             </ul>
          </article>
       </div>
    </section>
  )
}
export default Services
