import React from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCompass, AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
import {Element, Link} from 'react-scroll'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <Link activeClass="active" smooth spy to='home' className='Link'>
          <AiOutlineHome />

      </Link>
      <Link activeClass="active" offset={100} smooth spy to='about' className='Link'>
          <AiOutlineUser />
      </Link>
      <Link activeClass="active" smooth spy to='experience' className='Link'>
          <AiOutlineBook />
      </Link>
      <Link activeClass="active" offset={60} smooth spy to='services' className='Link'>
          <AiOutlineCompass />
      </Link>
      <Link activeClass="active" offset={140} smooth spy to='contact' className='Link'>
          <AiOutlineMessage />
      </Link>
    </nav>
  )
}

export default Nav