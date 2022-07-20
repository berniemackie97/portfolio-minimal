import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/me.png'
import IMG2 from '../../assets/me.png'
import IMG3 from '../../assets/me.png'
import IMG4 from '../../assets/me.png'
import IMG5 from '../../assets/me.png'
import IMG6 from '../../assets/me.png'
import IMG7 from '../../assets/me.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio