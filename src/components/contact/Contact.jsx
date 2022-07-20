import React, {useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {ImLinkedin} from 'react-icons/im'
import {FaDiscord} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ejewhng', 'template_9v3equr', e.target, 'a69AwCSDKmy89XVQI')

    form.current.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_icon"/>
            <h4>Email</h4>
            <h5>blorent97@codebuzz.org</h5>
            <a href="mailto:blorent97@codebuzz.org" target='_blank'>Send A Message</a>
          </article>
          <article className="contact_option">
            <ImLinkedin className="contact_icon"/>
            <h4>Linkdin</h4>
            <h5>bernie lorente</h5>
            <a href="https://www.linkedin.com/in/bernie-lorente-43b6bb245/" target='_blank'>Let's Connect</a>
          </article>
          <article className="contact_option">
            <FaDiscord className="contact_icon"/>
            <h4>Discord</h4>
            <h5>Check out our discord community</h5>
            <a href="" target='_blank'>Join</a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact