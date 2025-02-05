import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/home">
          <img
            src="https://i.ibb.co/5Tq0pq6/Black-logo-no-background.png"
            alt="Logo"
            className="me-2"
            width="150"
          />
        </Link>

        {/* Navbar Toggle Button (Bootstrap) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/integration">
                Integrations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Sign In / Sign Up Buttons */}
          <div className="d-flex mt-3 mt-lg-0">
            <button className="btn btn-outline-dark me-3" style={{ height: "35px" }}>
              Sign in
            </button>
            <button className="btn btn-primary" style={{ height: "35px" }}>
              Sign up free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
     