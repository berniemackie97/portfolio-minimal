import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_card-icon'/>
              <h5>Experience</h5>
              <small>1.5 Years experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_card-icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_card-icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nisi suscipit quia quaerat harum sint obcaecati officia! Iure tempora in sequi expedita amet commodi nam corrupti praesentium saepe est. Blanditiis.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About