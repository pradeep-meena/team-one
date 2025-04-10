import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-section py-5 bg-dark text-white mt-3'>
      <div className="container">
        <div className="row">
          {/* Products Section */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Products</h6>
            <p className="footer-item">
              <img
                src="https://i.ibb.co/MDP5fFCz/image-removebg-preview.png"
                alt="PSA"
                className="footer-icon"
              />
              <a href="#" className="footer-link">PSA</a>
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
          </div>

          {/* Company Section */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Company</h6>
          
            <div>  <a href="#" className="footer-link">Contact us</a></div>
           <div>  <a href="#" className="footer-link">Events</a></div>
            <div><a href="#" className="footer-link">Channel Partners</a></div>
            <div><a href="#" className="footer-link">Technology Partners</a></div>
            <div> <a href="#" className="footer-link">Distributors</a></div>
            <div>  <a href="#" className="footer-link">Referral Program</a> </div>
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Our Services</h6>
            <div>   <a href="#" className="footer-link">Features</a></div>
           <div>  <a href="#" className="footer-link">Integrations</a></div>
            <div><a href="#" className="footer-link">Pricing</a></div>
          </div>

          {/* Share Section */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Share</h6>
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-5">
          <p className="footer-bottom-text">© 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
