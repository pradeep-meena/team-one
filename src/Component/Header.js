import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [toggleheader, setToggleheader] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      
   <header className="mt-3 header container-fluid">
    
      {/* Top row: Logo and Toggle Button */}
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/home">
          <img
            src="https://i.ibb.co/5Tq0pq6/Black-logo-no-background.png"
            alt="Logo"
            className="me-2"
            width="150"
          />
        </Link>
        {/* Toggle button visible only on mobile */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={handleToggle}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
      
      {/* Navigation content */}
      <div className={`${isOpen ? "d-block" : "d-none"} d-lg-flex mt-2`}>
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center w-100">
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mx-4 header-content-p">
            <Link className="header-content-p" to="/features"><p>Features</p></Link>
            <Link className="header-content-p" to="/pricing"><p>Pricing</p></Link>
            <Link className="header-content-p" to="/integration"><p>Integrations</p></Link>
            <Link className="header-content-p" to="/contact"><p>Contact</p></Link>
          </div>
          <div className="d-flex sign_in mt-3 mt-lg-0 mx-4">
            <button className="btn btn-outline-dark me-3" style={{height:'35px'}}>Sign in</button>
            <button className="btn btn-primary" style={{height:'35px'}}>Sign up free</button>
          </div>
        </div>
      </div>
      
    </header>
   
       {/* {toggleheader && isMobile && 
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to='/features' >
                    Features
                  </Link>
                </li>
                <Link to='/pricing' >
                <li className="nav-item">
                    Pricing
                </li>
                </Link>
                <li className="nav-item">
                  <Link to="/integration">
                    Integrations
                  </Link>
                </li>
                <li className="nav-item">
                 <Link to="/">
                    Contacts
                    </Link>
                </li>
               
              </ul>          }  */}
      {/* Render Navbar inline or as a sidebar */}
      {/* {toggleheader && (
        <div className={isMobile ? 
          <div className="collapse navbar-collapse" id="navbarNav">
        
        </div>
        : ""}>
          <Navbar />
        </div>
      )} */}
    </div>
  );
};

export default Header;