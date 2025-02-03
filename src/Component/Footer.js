import React from 'react'

const Footer = () => {
  return (
    <div className='footer-section py-4 bg-light mt-3'>
     <div className="container">
      <div className="row">
        {/* Products Section */}
        <div className="col-md-3">
          <h6 style={{ fontWeight: "bold" }}>Products</h6>
          <p>
            <img
              src="https://i.ibb.co/MDP5fFCz/image-removebg-preview.png"
              alt=""
            />{" "}
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold"
              }}
            >
              PSA
            </a>
          </p>
          <p>
            <img
              src="https://i.ibb.co/rGkHzWzq/image-removebg-preview-1.png"
              alt=""
            />{" "}
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold"
              }}
            >
              SERVICE DESK
            </a>
          </p>
          <p>
            <img
              src="https://i.ibb.co/nNFc7mmk/image-removebg-preview-2.png"
              alt=""
            />{" "}
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold"
              }}
            >
              ITSM
            </a>
          </p>
        </div>
        {/* Company Section */}
        <div className="col-md-3">
          <h6 style={{ fontWeight: "bold" }}>Company</h6>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Contact us
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Events
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Channel Partners
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Technology Partners
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Distributors
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Referral Program
          </a>
        </div>
        {/* HaloPSA Section */}
        <div className="col-md-3">
          <h6 style={{ fontWeight: "bold" }}>Our Services</h6>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Features
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Integrations
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Mobile Apps
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Blog
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Pricing
          </a>
        </div>
        {/* share Section */}
        <div className="col-md-3"> 
          <h6 style={{ fontWeight: "bold" }}>Share</h6>
          <label for="email">Enter your email:</label>
          <input type="email" id="email" name="email"/>
          <div className='footer-share-icon' style={{display:"flex",flexWrap:"nowrap"}}>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
              width={20}
            />
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              width={20}
            />
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              width={20}
            />
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="YouTube"
              width={20}
            />
          </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer