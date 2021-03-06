import React from 'react';
import './service.css';
import {BsCheck} from 'react-icons/bs';

const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services