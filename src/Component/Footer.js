import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* <footer class="bg-light py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <h6 class="fw-bold">Products</h6>
                    <ul class="list-unstyled">
                        <li><span class="text-danger fw-bold">&#9679; PSA</span></li>
                        <li><span class="text-primary fw-bold">&#9679; SERVICE DESK</span></li>
                        <li><span class="text-success fw-bold">&#9679; ITSM</span></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-6">
                    <h6 class="fw-bold">Company</h6>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">Channel Partners</a>
                        </li>
                        <li>
                            <a href="#">Technology Partners</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-6">
                    <h6 class="fw-bold">Key Features</h6>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#">Service Desk</a>
                        </li>
                        <li>
                            <a href="#">Sales CRM</a>
                        </li>
                        <li>
                            <a href="#">Billable Time</a>
                        </li>
                        <li>
                            <a href="#">Tracking</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <h6 class="fw-bold">Compare PSA</h6>
                    <ul class="list-unstyled">
                        <li><a href="#">Top Desk</a></li>
                        <li><a href="#">Kaseya BMS</a></li>
                        <li><a href="#">Atera</a></li>
                        <li><a href="#">Freshservice</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-6">
                    <h6 class="fw-bold">Social</h6>
                    <div class="row">
                        <div class="col-md-12" style={{fontSize:"20px"}}>
                            <a href="#" class="me-3 "><i class="bi bi-linkedin"></i></a>
                        </div>
                        <div class="col-md-12" style={{fontSize:"20px"}}>
                            <a href="#" class="me-3"><i class="bi bi-twitter"></i></a>
                        </div>
                        <div class="col-md-12" style={{fontSize:"20px"}}>
                            <a href="#" class="me-3"><i class="bi bi-facebook"></i></a>
                        </div>
                        <div class="col-md-12" style={{fontSize:"20px"}}>
                            <a href="#" class="me-3"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> */}
     <div className="container-fluid pt-4 bg-light">
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
        <div className="col-md-2">
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
        <div className="col-md-2">
          <h6 style={{ fontWeight: "bold" }}>HaloPSA</h6>
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
        {/* Key Features Section */}
        <div className="col-md-2">
          <h6 style={{ fontWeight: "bold" }}>Key Features</h6>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Service Desk
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Sales CRM
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Billable Time
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Tracking
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Reporting
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Contracts
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Billing
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Stock Management
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Projects
          </a>
        </div>
        {/* Compare PSA Section */}
        <div className="col-md-2">
          <h6 style={{ fontWeight: "bold" }}>Compare PSA</h6>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            ConnectWise
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Datto Autotask
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Accelo
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Harmony PSA
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Naverisk
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Top Desk
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Kaseya BMS
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Atera
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            Freshservice
          </a>
        </div>
        {/* Social Section */}
        <div className="col-md-1">
          <h6 style={{ fontWeight: "bold" }}>Social</h6>
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
  )
}

export default Footer