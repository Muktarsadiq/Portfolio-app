import React from 'react';
import './about.css';
import Me  from '../../assets/me-about.JPG';
import { FaAward } from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="contaner about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt='about image' />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icons" />
              <h5>Clients</h5>
              <small>2 clients WorldWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>10</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid labore sint dicta laudantium voluptates laboriosam itaque, deleniti aperiam asperiores architecto recusandae eos unde! Placeat numquam recusandae inventore commodi hic.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>

        </div>
      </div>
    </section>
  )
}

export default About