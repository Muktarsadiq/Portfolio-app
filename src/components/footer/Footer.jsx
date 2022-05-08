import React from 'react';
import {BsTwitter} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

import './footer.css';

const Footer = () => {
  return (
    <footer>
        <a href="#" className="footer__logo">....</a>

      <ul classname="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com"><BsTwitter /></a>
        <a href="https://Facebook.com"><BsFacebook /></a>
        <a href="https://Linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Muktar Sadiq. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer