import React from 'react'
import about from '../../assets/me-about.jpg'
import Cards from './Crads'
import { FaAward, FaUser, FaUsers } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
import './style.css'
const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know </h5>
      <h2>ABOUT ME</h2>
      <div className='container about__container'>
        <div className='about-image'>
          <div className='about-image-container'>
            <img src={about}></img>
          </div>
        </div>
        <div className='about-me'>
          <div className='about__card-container'>
            <Cards
              icon={<FaAward />}
              label='Expieriance'
              desc='3+ Years Of Expieriances'
            />
            <Cards icon={<FaUser />} label='Clients' desc='MoreThan 50' />
            <Cards icon={<MdComputer />} label='Projects' desc='MoreThan 5' />
          </div>
          <div className='details'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              odio sed voluptate dolor animi voluptates, quo veniam, sit a
              aspernatur error magni? Neque quo vel reprehenderit molestiae
              aliquam ad eos.
            </p>
            <a href='#Contact' className='btn btn-primary' style={{paddingTop:"0"}}>Lets Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
