import React from 'react'
import './Feature.css'
import IMG1 from '../../assets/me.png'
import IMG2 from '../../assets/me.png'
import IMG3 from '../../assets/me.png'
import IMG4 from '../../assets/me.png'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: IMG1,
    title: 'lame project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, alias explicabo unde ducimus maiores magni, enim tempora voluptas magnam vitae recusandae qui vel nesciunt, in totam soluta pariatur veniam! Asperiores?'
  },
  {
    image: IMG2,
    title: 'lame project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, alias explicabo unde ducimus maiores magni, enim tempora voluptas magnam vitae recusandae qui vel nesciunt, in totam soluta pariatur veniam! Asperiores?'
  },
  {
    image: IMG3,
    title: 'lame project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, alias explicabo unde ducimus maiores magni, enim tempora voluptas magnam vitae recusandae qui vel nesciunt, in totam soluta pariatur veniam! Asperiores?'
  },
  {
    image: IMG4,
    title: 'lame project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, alias explicabo unde ducimus maiores magni, enim tempora voluptas magnam vitae recusandae qui vel nesciunt, in totam soluta pariatur veniam! Asperiores?'
  }
]

const Feature = () => {
  return (
    <section id='feature'>
      <h5>Stuff I'm Working on Now!</h5>
      <h2>Featured Projects</h2>

      <Swiper className="container feature_container" 
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ image, title, description }, index) => {
            return (
              <SwiperSlide key={index} className="feature">
              <div className="feature_image">
                <img src={image} alt={title} />
              </div>
              <h5 className='feature_title'>{title}</h5>
              <small className='feature_desc'>
                {description}
              </small>
            </SwiperSlide>
            )
          })
        } 
      </Swiper>
    </section>
  )
}

export default Feature