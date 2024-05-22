import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Empowering Memorable Experiences – At Eventify, we are dedicated to helping you create unforgettable events with ease and efficiency. From planning to execution, we provide innovative tools and exceptional service to ensure every detail is perfect.</p>
            <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.facebook_icon} alt="Facebook" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.twitter_icon} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.linkedin_icon} alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+237-652-423-576</li>
                <li>contact@eventify.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Eventify.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
