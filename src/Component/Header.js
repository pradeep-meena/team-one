import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import AuthForm from "./auth/AuthPage";
const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img
            // src="https://i.ibb.co/5Tq0pq6/Black-logo-no-background.png"
            src="https://i.ibb.co/Qjm3yG7L/img.png"
            alt="Logo"
            className="me-2"
            width="200"
            height="50"
          />
              </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link  font-weight-bold
              " to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-flex mt-3 mt-lg-0">
            <button className="btn btn-outline-dark me-3" style={{ height: "35px" }} onClick={handleModal}>
              Sign in
            </button>
            <button className="btn btn-primary" style={{ height: "35px" }} onClick={handleModal}>
              Sign up free
            </button>
          </div>
        </div>
      </div>

      {isModal && (
        <div className="modal-backdrop" onClick={handleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={handleModal}>×</button>
            <AuthForm />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
     