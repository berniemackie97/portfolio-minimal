import React from 'react'
import './Footer.css'
import {TbBrandLinkedin, TbBrandTwitter} from 'react-icons/tb'
import {GoMarkGithub} from 'react-icons/go'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Bernie</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#feature">Feature</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com"><TbBrandLinkedin /></a>
        <a href="https://github.com"><GoMarkGithub /></a>
        <a href="https://twitter.com"><TbBrandTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Bernardo Lorente. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer