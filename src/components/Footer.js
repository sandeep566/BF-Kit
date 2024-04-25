import React from 'react'
import './Footer.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                    <div className='footer-description'>
                        <h3 className='text-white'>Logo</h3>
                        <h2 >Savor South India On-the-Go!</h2>
                        <p>Experience the essence of South Indian cuisine wherever you are with our mobile idly's and vada service. Fresh, flavorful, and delivered with a smile, it's a taste journey you won't want to miss!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
					<div className="menu">
						<h4>Menu</h4>
						<ul className="footer-menu">
							<li><a href="#">home<FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></a></li>
							<li><a href="#">about us<FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></a></li>
							<li><a href="#">Restaurants<FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></a></li>
							<li><a href="#">Contacts<FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></a></li>
						</ul>
					</div>
				</div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
					<div className="menu contacts">
						<h4>Contacts</h4>
						<div className="footer-location">
							<FontAwesomeIcon className='locationIcon' icon={faLocationDot}></FontAwesomeIcon>
							<p>Gowlidoddy , Gachibowli , Madhapur</p>
						</div>
						<a href="mailto:bfkit@gmail.com"><FontAwesomeIcon className='me-3 contact-icon' icon={faEnvelope}></FontAwesomeIcon>bfkit@gmail.com</a>
						<a href="callto:+918340025256"><FontAwesomeIcon className='me-3 contact-icon' icon={faPhone}></FontAwesomeIcon>+91 8340025256</a>
					</div>
					<ul className="social-media">
						<li><a href="#"><FontAwesomeIcon className='social-media-icon' icon={faFacebook}></FontAwesomeIcon></a></li>
						<li><a href="#"><FontAwesomeIcon className='social-media-icon' icon={faInstagram}></FontAwesomeIcon></a></li>
						<li><a href="#"><FontAwesomeIcon className='social-media-icon' icon={faWhatsapp}></FontAwesomeIcon></a></li>
					</ul>
				</div>
            </div>
            <div className="footer-two gap no-bottom">
                <p>Copyright © 2024. BF-KIT. All rights reserved.</p>
                <div className="privacy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms &amp; Services</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer