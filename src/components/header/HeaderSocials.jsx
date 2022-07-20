import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/' target='_blank'><BsLinkedin /></a>
        <a href='https://www.github.com/' target='_blank'><BsGithub /></a>
        <a href='https://www.twitter.com/' target='_blank'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials