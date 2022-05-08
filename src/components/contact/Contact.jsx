import React from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import  {BsTwitter} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0gkd55h', 'template_gltkbjn', form.current, 'aTLP1Euc730Uvqawa')
      
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>muktar.m.sadiq@gmail.com</h5>
            <a href="mailto:muktar.m.sadiq@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>muktarsadiq_</h5>
            <a href="https://twitter.com/muktarsadiq_">Send a Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;