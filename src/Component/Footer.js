import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-section   text-white py-4'>
      <div className="container">
        <div className="row">
          {/* Products Section */}
          {/* <div className="col-md-3 mb-4">
            <h6 className="footer-title">Products</h6>
            <p className="footer-item">
              <img
                src="https://i.ibb.co/MDP5fFCz/image-removebg-preview.png"
                alt="Teamone"
                className="footer-icon"
              />
              <a href="#" className="footer-link"></a>
            </p>
            <p className="footer-item">
              <img
                src="https://i.ibb.co/rGkHzWzq/image-removebg-preview-1.png"
                alt="Service Desk"
                className="footer-icon"
              />
              <a href="#" className="footer-link">SERVICE DESK</a>
            </p>
            <p className="footer-item">
              <img
                src="https://i.ibb.co/nNFc7mmk/image-removebg-preview-2.png"
                alt="ITSM"
                className="footer-icon"
              />
              <a href="#" className="footer-link">ITSM</a>
            </p>
          </div> */}

<div className="col-md-3 mb-4">
            {/* <h6 className="footer-title">TeamOne </h6> */}
            <img
            // src="https://i.ibb.co/5Tq0pq6/Black-logo-no-background.png"
            src="https://i.ibb.co/Qjm3yG7L/img.png"
            alt="Logo"
            className="me-2"
            width="200"
            height="50"
          />

            </div>


          {/* Company Section */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Company</h6>
          
            <div>  <Link to="/contact" className="footer-link">Contact us</Link></div>
      
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Our Services</h6>
            <div>   <a href="#" className="footer-link">Features</a></div>
           <div>  <a href="#" className="footer-link">Integrations</a></div>
            <div><a href="#" className="footer-link">Pricing</a></div>
          </div>

          {/* Share Section */}
          <div className="col-md-3 mb-2">
            <p className="footer-title">Share</p>
            <label htmlFor="email" className="footer-label">Enter your email:</label>
            <input type="email" id="email" name="email" className="footer-input"/>
            <div className='footer-share-icon d-flex mt-3'>
              <a href="#" className="footer-icon-link">
                <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="footer-social-icon"/>
              </a>
              <a href="#" className="footer-icon-link">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="footer-social-icon"/>
              </a>
              <a href="#" className="footer-icon-link">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="footer-social-icon"/>
              </a>
              <a href="#" className="footer-icon-link">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="footer-social-icon"/>
              </a>
            
            </div>
            <p className="">© 2025 All rights reserved</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
